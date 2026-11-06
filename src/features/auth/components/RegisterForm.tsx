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
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium">Email</span>
        <input name="email" type="email" required autoComplete="email" className="rounded border px-3 py-2" />
      </label>

      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium">Mot de passe</span>
        <input name="password" type="password" required minLength={8} autoComplete="new-password" className="rounded border px-3 py-2" />
      </label>

      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Prénom</span>
          <input name="prenom" className="rounded border px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Nom</span>
          <input name="nom" className="rounded border px-3 py-2" />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Téléphone</span>
          <input name="telephone" className="rounded border px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">WhatsApp</span>
          <input name="whatsapp" className="rounded border px-3 py-2" />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Ville</span>
          <input name="ville" className="rounded border px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Quartier</span>
          <input name="quartier" className="rounded border px-3 py-2" />
        </label>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={isPending}
        className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {isPending ? "Création…" : "Créer mon compte"}
      </button>
    </form>
  )
}