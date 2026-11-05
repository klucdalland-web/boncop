"use server"

import bcrypt from "bcryptjs"
import { z } from "zod"
import prisma  from "@/db/prisma"
import { auth } from "@/auth"

const RegisterSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z
    .string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères"),
    prenom: z.string().min(1).optional(),
    nom: z.string().min(1).optional(),
    telephone: z.string().min(6).optional(),
    whatsapp: z.string().min(6).optional(),
    ville: z.string().min(1).optional(),
    quartier: z.string().min(1).optional(),
})

export type RegisterInput = z.infer<typeof RegisterSchema>

export type RegisterResult =
  | { success: true; userId: number }
  | { success: false; error: string }

export async function registerUser(input: unknown): Promise<RegisterResult> {
  const parsed = RegisterSchema.safeParse(input)
  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? "Données invalides",
     
    }
  }

  const { email, password, ...rest } = parsed.data
  const normalizedEmail = email.trim().toLowerCase()

  const existing = await prisma.user.findUnique({
    where: { email: normalizedEmail },
    select: { id: true },
  })
  if (existing) {
    return { success: false, error: "Cet email est déjà utilisé" }
  }

  const hashedPassword = await bcrypt.hash(password, 12)

  const user = await prisma.user.create({
    data: {
      email: normalizedEmail,
      password: hashedPassword,
      role: "FREELANCE",
      validated: "ATTENTE",
      ...rest,
    },
    select: { id: true },
  })

  return { success: true, userId: user.id }
}

export async function verifySession() {
  const session = await auth()
  return session ?? null
}