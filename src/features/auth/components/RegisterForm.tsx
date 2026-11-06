"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { registerUser } from "@/features/auth/actions"

export function RegisterForm() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    const formData = new FormData(event.currentTarget)

    startTransition(async () => {
      const result = await registerUser({
        email: formData.get("email"),
        password: formData.get("password"),
        prenom: formData.get("prenom") || undefined,
        nom: formData.get("nom") || undefined,
        telephone: formData.get("telephone") || undefined,
        whatsapp: formData.get("whatsapp") || undefined,
        ville: formData.get("ville") || undefined,
        quartier: formData.get("quartier") || undefined,
      })

      if (!result.success) {
        setError(result.error)
        return
      }
      router.push("/login?registered=1")
    })
  }

  return (
   <div id="register" className="bg-gradient-to-br from-brand-50 via-white to-violet/10 rounded-2xl p-7 sm:p-9 border border-brand-100 shadow-soft relative overflow-hidden">
  <div className="relative">
    <div className="flex items-center gap-2.5 mb-6">
      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-violet text-white flex items-center justify-center shadow-glow">
        <i className="fas fa-user-plus text-sm"></i>
      </span>
      <div>
        <h3 className="font-bold text-lg text-slate-900">Créer un compte</h3>
        <p className="text-xs text-slate-500">Rejoignez les talents</p>
      </div>
    </div>

    <form onSubmit={onSubmit} className="space-y-3.5">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5">Prénom</label>
          <input 
            name="prenom"
            type="text" 
            placeholder="Prénom"
            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100 transition"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5">Nom</label>
          <input 
            name="nom"
            type="text" 
            placeholder="Nom"
            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100 transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email</label>
        <input 
          name="email"
          type="email" 
          required 
          autoComplete="email"
          placeholder="vous@exemple.com"
          className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100 transition"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1.5">Mot de passe</label>
        <input 
          name="password"
          type="password" 
          required 
          minLength={8} 
          autoComplete="new-password"
          placeholder="••••••••"
          className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100 transition"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5">Téléphone</label>
          <input 
            name="telephone"
            type="tel"
            placeholder="06 123 4567"
            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100 transition"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5">WhatsApp</label>
          <input 
            name="whatsapp"
            type="tel"
            placeholder="WhatsApp"
            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100 transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5">Ville</label>
          <select 
            name="ville"
            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100 transition"
          >
            <option value="">Sélectionnez votre ville</option>
            <option value="Brazzaville">Brazzaville</option>
            <option value="Pointe-Noire">Pointe-Noire</option>
            <option value="Dolisie">Dolisie</option>
            <option value="Nkayi">Nkayi</option>
            <option value="Ouesso">Ouesso</option>
            <option value="Owando">Owando</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5">Quartier</label>
          <input 
            name="quartier"
            type="text"
            placeholder="Votre quartier"
            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white outline-none focus:border-brand-400 focus:ring-4 focus:ring-brand-100 transition"
          />
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button 
        type="submit"
        disabled={isPending}
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold bg-gradient-to-r from-brand-600 to-violet text-white text-sm shadow-glow hover:-translate-y-0.5 disabled:opacity-50 disabled:translate-y-0 transition"
      >
        {isPending ? "Création…" : "Créer mon compte"} <i className="fas fa-arrow-right text-xs"></i>
      </button>
    </form>
  </div>
</div>

  )
}