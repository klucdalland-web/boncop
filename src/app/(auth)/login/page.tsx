import { LoginForm } from "@/features/auth/components/LoginForm"

export const metadata = { title: "Connexion | BonCop" }

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6">
      <h1 className="mb-6 text-2xl font-bold">Se connecter</h1>
      <LoginForm />
    </main>
  )
}