import { PrismaClient } from "../generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { config } from "dotenv";
import path from "node:path";

// Forcer le chargement de .env.local AVANT de créer l'adaptateur
config({ path: path.resolve(process.cwd(), ".env.local") });

const prismaClientSingleton = () => {
  // Lire la variable ICI, à l'intérieur de la fonction
  const connectionString = process.env.DATABASE_URL;
  
  // Log de vérification (à supprimer après)
  console.log("Prisma adapter connection string type:", typeof connectionString);
  console.log("Prisma adapter connection string défini:", Boolean(connectionString));

  if (!connectionString) {
    throw new Error("DATABASE_URL n'est pas définie. Vérifie ton .env.local.");
  }

  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter });
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;