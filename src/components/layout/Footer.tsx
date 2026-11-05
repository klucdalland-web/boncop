import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink-900 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-xl font-bold text-white">BonCop</p>
          <p className="mt-3 max-w-xs text-sm">
            La plateforme qui met les talents congolais à la portée de ceux qui
            recrutent.
          </p>
        </div>

        <nav aria-label="Pour les recruteurs">
          <h2 className="text-base font-semibold text-white">Recruteurs</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href="/search"
                className="hover:text-white hover:underline"
              >
                Trouver un freelance
              </Link>
            </li>
            <li>
              <Link
                href="/search"
                className="hover:text-white hover:underline"
              >
                Parcourir les métiers
              </Link>
            </li>
            <li>
              <Link
                href="/#comment"
                className="hover:text-white hover:underline"
              >
                Comment ça marche
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Pour les freelances">
          <h2 className="text-base font-semibold text-white">Freelances</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href="/register"
                className="hover:text-white hover:underline"
              >
                Créer mon CV
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="hover:text-white hover:underline"
              >
                Se connecter
              </Link>
            </li>
            <li>
              <Link
                href="/profile/edit"
                className="hover:text-white hover:underline"
              >
                Modifier mon profil
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="BonCop">
          <h2 className="text-base font-semibold text-white">BonCop</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white hover:underline">
                À propos
              </Link>
            </li>
            <li>
              <Link
                href="/about#equipe"
                className="hover:text-white hover:underline"
              >
                L&apos;équipe
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/15">
        <p className="mx-auto max-w-7xl px-4 py-6 text-sm sm:px-6 lg:px-8">
          © 2026 BonCop. Groupe1.
        </p>
      </div>
    </footer>
  );
}
