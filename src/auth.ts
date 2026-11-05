import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import  prisma  from "@/db/prisma"
import type { Role } from "@/generated/prisma";


export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        const email = String(credentials?.email ?? "").trim().toLowerCase()
        const password = String(credentials?.password ?? "")
        if (!email || !password) return null

        const user = await prisma.user.findUnique({ where: { email } })
        if (!user) return null

        const passwordOk = await bcrypt.compare(password, user.password)
        if (!passwordOk) return null

        // Un compte banni ne peut jamais se connecter.
        if (user.validated === "BANNI") return null

        // Un compte en attente peut se connecter mais sera limité par le middleware.
        return {
          id: String(user.id),
          email: user.email,
          role: user.role,
          prenom: user.prenom,
          nom: user.nom,
          validated: user.validated,
        }
      },
    }),
  ],
 callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = (user as { role?: Role }).role
        token.validated = (user as { validated?: string }).validated
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        ;(session.user as { role?: Role }).role = token.role as Role
        ;(session.user as { validated?: string }).validated = token.validated as string | undefined
      }
      return session
    },
  },
})