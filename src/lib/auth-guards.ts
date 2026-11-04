export type AuthGuardInput = {
  path: string
  isLogged: boolean
  role?: string
  validated?: string
}

export function decideAuthRedirect(input: AuthGuardInput): string | null {
  const { path, isLogged, role, validated } = input

  if (path.startsWith("/admin")) {
    if (!isLogged) return "/login"
    if (role !== "ADMIN") return "/"
  }

  if (path.startsWith("/profile/edit")) {
    if (!isLogged) return "/login"
    if (role !== "FREELANCE") return "/"
    if (validated === "BANNI") return "/"
  }

  return null
}