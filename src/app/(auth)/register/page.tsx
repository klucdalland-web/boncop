import { RegisterForm } from "@/features/auth/components/RegisterForm"

export const metadata = { title: "Inscription | BonCop" }

export default function RegisterPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6">
      <h1 className="mb-6 text-2xl font-bold">Créer un compte freelance</h1>
      <RegisterForm />
    </main>
  )
}