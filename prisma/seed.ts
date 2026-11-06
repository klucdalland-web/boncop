import { config } from "dotenv"
import path from "node:path"

// 1. Charger .env.local
config({ path: path.resolve(process.cwd(), ".env.local") })

// 2. LA LIGNE MAGIQUE : On écrase DATABASE_URL par DIRECT_URL
// Ainsi, quand prisma.ts sera importé, il utilisera le port 5432.
process.env.DATABASE_URL = process.env.DIRECT_URL

// 3. Maintenant on importe Prisma
import prisma from "../src/db/prisma"
import bcrypt from "bcryptjs"

// ... le reste de ton code (async function main() { ... })

console.log("DATABASE_URL type:", typeof process.env.DATABASE_URL)
console.log("DATABASE_URL défini:", Boolean(process.env.DATABASE_URL))
console.log("DIRECT_URL type:", typeof process.env.DIRECT_URL)
console.log("DIRECT_URL défini:", Boolean(process.env.DIRECT_URL))

async function main() {
  console.log("⏳ Début de la création des comptes de test...")

  const freelancePassword = await bcrypt.hash("Test1234", 12)
  const adminPassword = await bcrypt.hash("Admin1234", 12)

  const freelance = await prisma.user.upsert({
    where: { email: "test@mail.com" },
    update: {},
    create: {
      email: "test@mail.com",
      password: freelancePassword,
      role: "FREELANCE",
      validated: "VALIDATE",
      prenom: "Test",
      nom: "Freelance",
      ville: "Brazzaville",
    },
  })
  console.log("✅ Compte Freelance prêt :", freelance.email)

  const admin = await prisma.user.upsert({
    where: { email: "admin@mail.com" },
    update: {},
    create: {
      email: "admin@mail.com",
      password: adminPassword,
      role: "ADMIN",
      validated: "VALIDATE",
      prenom: "Super",
      nom: "Admin",
    },
  })
  console.log("✅ Compte Admin prêt :", admin.email)
}

main()
  .catch((e) => {
    console.error("❌ Erreur lors du seed :", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })