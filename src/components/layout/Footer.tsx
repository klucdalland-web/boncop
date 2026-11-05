import Link from "next/link";

const links = [
  { href: "/about", label: "À propos" },
  { href: "/search", label: "Recherche" },
  { href: "/login", label: "Connexion" },
];

export function Footer() {
  return (
    <footer className="border-t border-line-200 bg-surface-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-x-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex min-h-11 items-center px-2 text-sm font-medium text-ink-700 hover:text-brand-600"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-sm text-ink-500">
          © {new Date().getFullYear()} BonCop. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
