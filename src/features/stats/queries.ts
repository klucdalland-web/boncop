import prisma from "@/db/prisma";

export type PlatformStats = {
  totalFreelances: number;
  totalViews: number;
};

/**
 * Retourne les statistiques publiques de la plateforme.
 *
 * `totalFreelances` ne compte que les freelances validés.
 * `totalViews` cumule toutes les vues de profils, conformément au cadrage.
 *
 * En cas d'échec de la base, des valeurs de repli sont renvoyées pour ne pas
 * casser le rendu ISR de la page d'accueil.
 */
export async function getPlatformStats(): Promise<PlatformStats> {
  try {
    const [totalFreelances, views] = await Promise.all([
      prisma.user.count({
        where: {
          role: "FREELANCE",
          validated: "VALIDATE",
        },
      }),
      prisma.user.aggregate({
        _sum: {
          profileViews: true,
        },
      }),
    ]);

    return {
      totalFreelances,
      totalViews: views._sum?.profileViews ?? 0,
    };
  } catch (error) {
    console.error(
      "Impossible de récupérer les statistiques de la plateforme",
      error,
    );

    return {
      totalFreelances: 0,
      totalViews: 0,
    };
  }
}
