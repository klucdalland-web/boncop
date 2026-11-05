import { describe, it, expect } from "vitest"
import { decideAuthRedirect } from "./auth-guards"

describe("decideAuthRedirect — routes /admin", () => {
  it("redirige un visiteur non connecté vers /login", () => {
    const result = decideAuthRedirect({ path: "/admin/dashboard", isLogged: false })
    expect(result).toBe("/login")
  })

  it("redirige un FREELANCE connecté vers /", () => {
    const result = decideAuthRedirect({ path: "/admin", isLogged: true, role: "FREELANCE" })
    expect(result).toBe("/")
  })

  it("laisse passer un ADMIN connecté", () => {
    const result = decideAuthRedirect({ path: "/admin", isLogged: true, role: "ADMIN" })
    expect(result).toBeNull()
  })
})

describe("decideAuthRedirect — routes /profile/edit", () => {
  it("redirige un visiteur non connecté vers /login", () => {
    const result = decideAuthRedirect({ path: "/profile/edit", isLogged: false })
    expect(result).toBe("/login")
  })

  it("redirige un ADMIN vers /", () => {
    const result = decideAuthRedirect({ path: "/profile/edit", isLogged: true, role: "ADMIN" })
    expect(result).toBe("/")
  })

  it("redirige un FREELANCE BANNI vers /", () => {
    const result = decideAuthRedirect({
      path: "/profile/edit", isLogged: true, role: "FREELANCE", validated: "BANNI"
    })
    expect(result).toBe("/")
  })

  it("laisse passer un FREELANCE VALIDATE", () => {
    const result = decideAuthRedirect({
      path: "/profile/edit", isLogged: true, role: "FREELANCE", validated: "VALIDATE"
    })
    expect(result).toBeNull()
  })

  it("laisse passer un FREELANCE ATTENTE", () => {
    const result = decideAuthRedirect({
      path: "/profile/edit", isLogged: true, role: "FREELANCE", validated: "ATTENTE"
    })
    expect(result).toBeNull()
  })
})

describe("decideAuthRedirect — routes publiques", () => {
  it("ne redirige pas une route publique", () => {
    const result = decideAuthRedirect({ path: "/", isLogged: false })
    expect(result).toBeNull()
  })
})