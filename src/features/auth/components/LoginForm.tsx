"use client"

import { useState, useTransition } from "react"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"

export function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") ?? "/"
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    const formData = new FormData(event.currentTarget)

    startTransition(async () => {
      const result = await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false,
      })

      if (!result || result.error) {
        setError("Email ou mot de passe incorrect.")
        return
      }
      router.push(callbackUrl)
      router.refresh()
    })
  }

  return (
    
    <div id="login" className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200/80 shadow-soft">
      <div className="flex items-center gap-2.5 mb-6">
        <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
          <i className="fas fa-lock text-sm"></i>
        </span>
        <div>
          <h3 className="font-bold text-lg text-slate-900">Connexion</h3>
          <p className="text-xs text-slate-500">Accédez à votre espace</p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email</label>
          <input 
            name="email"
            type="email" 
            required
            autoComplete="email"
            placeholder="vous@exemple.com"
            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-slate-50 outline-none focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100 transition"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1.5">Mot de passe</label>
          <input 
            name="password"
            type="password" 
            required
            autoComplete="current-password"
            placeholder="••••••••"
            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-slate-50 outline-none focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100 transition"
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button 
          type="submit"
          disabled={isPending}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold bg-slate-900 text-white text-sm hover:bg-slate-800 disabled:opacity-50 transition"
        >
          {isPending ? "Connexion…" : "Se connecter"}
        </button>
      </form>
    </div>

  )
}