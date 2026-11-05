// Importation depuis le dossier de génération personnalisé configuré dans le schéma
import { PrismaClient } from "../generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const prismaClientSingleton = () => {
  // 1. On crée l'adaptateur v7 avec l'URL issue du fichier .env
  const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  });

  // 2. On passe l'adaptateur au client Prisma
  return new PrismaClient({ adapter });
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
