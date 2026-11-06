"use strict";

import  prisma from "@/db/prisma"; // Assurez-vous que le chemin vers votre client Prisma est correct
import { revalidatePath } from "next/cache";

// Type optionnel pour typer le retour si nécessaire, Prisma 7 génère automatiquement le type "Metier"
export async function createMetier(libelle: string) {
  const sanitizedLibelle = libelle.trim();

  if (!sanitizedLibelle) {
    throw new Error("Le libellé ne peut pas être vide.");
  }

  try {
    // Vérification de l'existence (Prisma v7 conserve la syntaxe findUnique)
    const existing = await prisma.metier.findUnique({
      where: { libelle: sanitizedLibelle },
    });

    if (existing) {
      throw new Error("Ce métier existe déjà.");
    }

    const newMetier = await prisma.metier.create({
      data: { libelle: sanitizedLibelle },
    });

    // Force Next.js à rafraîchir le cache de la page admin après l'ajout
    revalidatePath("/dashboard"); 
    
    return newMetier;
  } catch (error: any) {
    throw new Error(error.message || "Impossible de créer le métier.");
  }
}

export async function deleteMetier(id: number) {
  try {
    await prisma.metier.delete({
      where: { id },
    });

    // Force Next.js à rafraîchir le cache de la page admin après la suppression
    revalidatePath("/dashboard");
  } catch (error) {
    throw new Error("Erreur lors de la suppression du métier. Vérifiez qu'il existe.");
  }
}

// Fonction utilitaire pour alimenter notre vue brute
export async function getMetiers() {
  try {

    const lesMetiers  = await prisma.metier.findMany({
      orderBy: { libelle: "asc" },
    });

    return lesMetiers;
    
  } catch (error) {
    console.error("Erreur de récupération des métiers :", error);
    return [];
  }
}