import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/db/prisma", () => ({
  default: {
    user: {
      updateMany: vi.fn(),
      findFirst: vi.fn(),
    },
  },
}));

import prisma from "@/db/prisma";
import { getFreelanceProfile } from "./queries";

describe("getFreelanceProfile", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("refuse un identifiant invalide sans interroger la base", async () => {
    await expect(getFreelanceProfile(0)).resolves.toBeNull();
    await expect(getFreelanceProfile(Number.NaN)).resolves.toBeNull();

    expect(prisma.user.updateMany).not.toHaveBeenCalled();
  });

  it("renvoie null si le profil est absent, en attente ou banni", async () => {
    vi.mocked(prisma.user.updateMany).mockResolvedValue({ count: 0 } as never);

    await expect(getFreelanceProfile(18)).resolves.toBeNull();
    expect(prisma.user.findFirst).not.toHaveBeenCalled();
  });

  it("compte la consultation et retourne le profil avec ses métiers", async () => {
    const profile = {
      id: 18,
      prenom: "Alex",
      nom: "Mabiala",
      profileViews: 4,
      userMetiers: [
        {
          metier: {
            id: 2,
            libelle: "Développeur web",
          },
        },
      ],
    };

    vi.mocked(prisma.user.updateMany).mockResolvedValue({ count: 1 } as never);
    vi.mocked(prisma.user.findFirst).mockResolvedValue(profile as never);

    await expect(getFreelanceProfile(18)).resolves.toEqual(profile);
    expect(prisma.user.updateMany).toHaveBeenCalledWith({
      where: {
        id: 18,
        role: "FREELANCE",
        validated: "VALIDATE",
      },
      data: {
        profileViews: {
          increment: 1,
        },
      },
    });
    expect(prisma.user.findFirst).toHaveBeenCalledWith(
      expect.objectContaining({
        where: {
          id: 18,
          role: "FREELANCE",
          validated: "VALIDATE",
        },
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
      })
    );
  });
});