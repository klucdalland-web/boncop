import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/db/prisma", () => ({
  default: {
    metier: {
      findMany: vi.fn(),
    },
    user: {
      findMany: vi.fn(),
    },
  },
}));

import prisma from "@/db/prisma";
import { getSearchFreelances, getSearchOptions } from "./queries";

describe("getSearchOptions", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("retourne les métiers et les villes des profils validés", async () => {
    vi.mocked(prisma.metier.findMany).mockResolvedValue([
      { id: 1, libelle: "Graphiste" },
    ] as never);
    vi.mocked(prisma.user.findMany).mockResolvedValue([
      { ville: "Brazzaville" },
      { ville: null },
      { ville: " Pointe-Noire " },
      { ville: "Pointe-Noire" },
    ] as never);

    await expect(getSearchOptions()).resolves.toEqual({
      metiers: [{ id: 1, libelle: "Graphiste" }],
      cities: ["Brazzaville", "Pointe-Noire"],
    });

    expect(prisma.user.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: {
          role: "FREELANCE",
          validated: "VALIDATE",
          ville: { not: null },
        },
        distinct: ["ville"],
      })
    );
  });
});

describe("getSearchFreelances", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("combine la ville et les métiers, sans doublons ni identifiants invalides", async () => {
    vi.mocked(prisma.user.findMany).mockResolvedValue([] as never);

    await getSearchFreelances({
      ville: " Brazzaville ",
      metierIds: [3, 3, 0, -2, 5],
    });

    expect(prisma.user.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: {
          role: "FREELANCE",
          validated: "VALIDATE",
          ville: {
            equals: "Brazzaville",
            mode: "insensitive",
          },
          userMetiers: {
            some: {
              metierId: {
                in: [3, 5],
              },
            },
          },
        },
        take: 30,
      })
    );
  });
});