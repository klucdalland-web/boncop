import type { Prisma } from "@/generated/prisma";
import prisma from "@/db/prisma";

export type UserWithMetiers = Prisma.UserGetPayload<{
  omit: {
    password: true;
  };
  include: {
    userMetiers: {
      include: {
        metier: true;
      };
    };
  };
}>;

const publicProfileWhere = (id: number): Prisma.UserWhereInput => ({
  id,
  role: "FREELANCE",
  validated: "VALIDATE",
});

export async function getFreelanceProfile(
  id: number
): Promise<UserWithMetiers | null> {
  if (!Number.isSafeInteger(id) || id < 1) {
    return null;
  }

  const where = publicProfileWhere(id);

  // Une consultation compte une vue, sans exposer le mot de passe.
  const viewUpdate = await prisma.user.updateMany({
    where,
    data: {
      profileViews: {
        increment: 1,
      },
    },
  });

  if (viewUpdate.count === 0) {
    return null;
  }

  return prisma.user.findFirst({
    where,
    omit: {
      password: true,
    },
    include: {
      userMetiers: {
        include: {
          metier: true,
        },
      },
    },
  });
}
