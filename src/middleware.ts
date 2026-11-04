import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const isLogged = !!req.auth
  const role = (req.auth?.user as any)?.role as string | undefined
  const validated = (req.auth?.user as any)?.validated as string | undefined
  const path = req.nextUrl.pathname

  // /admin/* : réservé aux administrateurs connectés
  if (path.startsWith("/admin")) {
    if (!isLogged) {
      return NextResponse.redirect(new URL("/login", req.url))
    }
    if (role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", req.url))
    }
  }

  // /profile/edit : réservé aux freelances connectés et validés
  if (path.startsWith("/profile/edit")) {
    if (!isLogged) {
      return NextResponse.redirect(new URL("/login", req.url))
    }
    if (role !== "FREELANCE") {
      return NextResponse.redirect(new URL("/", req.url))
    }
    if (validated === "BANNI") {
      return NextResponse.redirect(new URL("/", req.url))
    }
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/admin/:path*", "/profile/edit"],
}