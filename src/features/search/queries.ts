import type { Prisma } from "@/generated/prisma";
import prisma from "@/db/prisma";

export type SearchFilters = {
  ville?: string;
  metierIds: number[];
};

export type SearchOptions = {
  cities: string[];
  metiers: Array<{
    id: number;
    libelle: string;
  }>;
};

export type SearchResultProfile = Prisma.UserGetPayload<{
  select: {
    id: true;
    prenom: true;
    nom: true;
    ville: true;
    quartier: true;
    cvDescription: true;
    profileViews: true;
    userMetiers: {
      select: {
        metier: {
          select: {
            id: true;
            libelle: true;
          };
        };
      };
    };
  };
}>;

const MAX_SEARCH_RESULTS = 30;

export async function getSearchOptions(): Promise<SearchOptions> {
  const [metiers, cityRows] = await Promise.all([
    prisma.metier.findMany({
      select: {
        id: true,
        libelle: true,
      },
      orderBy: {
        libelle: "asc",
      },
    }),
    prisma.user.findMany({
      where: {
        role: "FREELANCE",
        validated: "VALIDATE",
        ville: {
          not: null,
        },
      },
      select: {
        ville: true,
      },
      distinct: ["ville"],
      orderBy: {
        ville: "asc",
      },
    }),
  ]);

  const cities = Array.from(
    new Set(
      cityRows
        .map((row) => row.ville?.trim())
        .filter((city): city is string => Boolean(city))
    )
  ).sort((first, second) => first.localeCompare(second, "fr"));

  return {
    cities,
    metiers,
  };
}

export async function getSearchFreelances(
  filters: SearchFilters
): Promise<SearchResultProfile[]> {
  const ville = filters.ville?.trim();
  const metierIds = Array.from(
    new Set(filters.metierIds.filter((id) => Number.isSafeInteger(id) && id > 0))
  );

  const where: Prisma.UserWhereInput = {
    role: "FREELANCE",
    validated: "VALIDATE",
    ...(ville
      ? {
          ville: {
            equals: ville,
            mode: "insensitive",
          },
        }
      : {}),
    ...(metierIds.length > 0
      ? {
          userMetiers: {
            some: {
              metierId: {
                in: metierIds,
              },
            },
          },
        }
      : {}),
  };

  return prisma.user.findMany({
    where,
    select: {
      id: true,
      prenom: true,
      nom: true,
      ville: true,
      quartier: true,
      cvDescription: true,
      profileViews: true,
      userMetiers: {
        select: {
          metier: {
            select: {
              id: true,
              libelle: true,
            },
          },
        },
      },
    },
    orderBy: [{ createdAt: "desc" }, { id: "desc" }],
    take: MAX_SEARCH_RESULTS,
  });
}
