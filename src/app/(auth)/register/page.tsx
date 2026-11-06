import { RegisterForm } from "@/features/auth/components/RegisterForm"

export const metadata = { title: "Inscription | BonCop" }

export default function RegisterPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">

    <div className="text-center max-w-xl mx-auto mb-10">
      <p className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-2">Espace membre</p>
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">Rejoignez la communauté</h2>
      <p className="text-slate-600">Deux options pour entrer dans le réseau.</p>
    </div>

    <div className="max-w-4xl mx-auto">
      <RegisterForm />
     </div>
  </section>
  )
}