import Link from "next/link";
import { notFound } from "next/navigation";
import { getFreelanceProfile } from "@/features/freelance/queries";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Profil freelance | BonCop",
  description: "Consultez le parcours et les compétences d'un freelance.",
};

type ProfilePageProps = {
  params: Promise<{
    id: string;
  }>;
};

function getPhoneHref(phone: string): string {
  const value = phone.trim();
  const digits = value.replace(/\D/g, "");

  if (value.startsWith("+") || digits.startsWith("242")) {
    return `tel:+${digits}`;
  }

  if (digits.startsWith("0")) {
    return `tel:+242${digits.slice(1)}`;
  }

  return `tel:${digits}`;
}

function getWhatsAppHref(phone: string): string | null {
  const value = phone.trim();
  const digits = value.replace(/\D/g, "");

  if (!digits) {
    return null;
  }

  if (value.startsWith("+")) {
    return `https://wa.me/${digits}`;
  }

  if (digits.startsWith("242")) {
    return `https://wa.me/${digits}`;
  }

  if (digits.startsWith("0")) {
    return `https://wa.me/242${digits.slice(1)}`;
  }

  return null;
}

export default async function FreelanceProfilePage({
  params,
}: ProfilePageProps) {
  const { id } = await params;
  const profileId = Number(id);

  if (!Number.isSafeInteger(profileId) || profileId < 1) {
    notFound();
  }

  const profile = await getFreelanceProfile(profileId);

  if (!profile) {
    notFound();
  }

  const fullName =
    [profile.prenom, profile.nom].filter(Boolean).join(" ") ||
    "Freelance BonCop";
  const metiers = profile.userMetiers.map((relation) => relation.metier.libelle);
  const phone = profile.telephone?.trim();
  const whatsapp = profile.whatsapp?.trim();
  const whatsappHref = whatsapp ? getWhatsAppHref(whatsapp) : null;

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <nav className="mb-7 text-sm text-ink-500" aria-label="Fil d'Ariane">
        <Link href="/search" className="font-semibold text-brand-700 hover:underline">
          Recherche
        </Link>
        <span aria-hidden="true"> / </span>
        <span>Profil</span>
      </nav>

      <article className="overflow-hidden rounded-lg border border-line-200 bg-white shadow-card">
        <header className="border-b border-line-200 bg-surface-100 px-5 py-8 sm:px-8">
          <p className="text-sm font-semibold text-brand-700">Profil freelance</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            {fullName}
          </h1>
          <p className="mt-3 text-sm text-ink-500">
            {[profile.ville, profile.quartier].filter(Boolean).join(" - ") ||
              "Localisation non renseignée"}
          </p>
          {metiers.length > 0 ? (
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Métiers du freelance">
              {metiers.map((metier) => (
                <li
                  key={metier}
                  className="rounded-full bg-brand-100 px-3 py-1.5 text-sm font-semibold text-brand-800"
                >
                  {metier}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 text-sm text-ink-500">
              Aucun métier n&apos;a encore été renseigné.
            </p>
          )}
        </header>

        <div className="grid gap-8 px-5 py-8 sm:px-8 md:grid-cols-[minmax(0,1fr)_15rem]">
          <section aria-labelledby="cv-title" className="min-w-0">
            <h2 id="cv-title" className="text-xl font-semibold text-ink-900">
              Présentation et parcours
            </h2>
            {profile.cvDescription?.trim() ? (
              <div
                className="mt-4 whitespace-pre-wrap break-words text-base leading-7 text-ink-700"
              >
                {profile.cvDescription}
              </div>
            ) : (
              <p className="mt-4 text-sm leading-6 text-ink-500">
                Ce freelance n&apos;a pas encore ajouté de présentation à son profil.
              </p>
            )}
          </section>

          <aside className="h-fit rounded-md border border-line-200 p-4">
            <h2 className="text-base font-semibold text-ink-900">Contacter</h2>
            <div className="mt-4 space-y-4">
              {phone ? (
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                    Téléphone
                  </p>
                  <a
                    href={getPhoneHref(phone)}
                    className="break-all text-sm font-semibold text-brand-700 underline-offset-4 hover:underline"
                  >
                    {phone}
                  </a>
                </div>
              ) : null}

              {whatsapp ? (
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                    WhatsApp
                  </p>
                  {whatsappHref ? (
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="break-all text-sm font-semibold text-brand-700 underline-offset-4 hover:underline"
                    >
                      {whatsapp}
                    </a>
                  ) : (
                    <p className="break-all text-sm text-ink-700">{whatsapp}</p>
                  )}
                </div>
              ) : null}

              {!phone && !whatsapp ? (
                <p className="text-sm leading-6 text-ink-500">
                 Aucune information de contact n&apos;est disponible pour le moment.
                </p>
              ) : null}
            </div>
          </aside>
        </div>

        <footer
          className="flex flex-col gap-2 border-t border-line-200 px-5 py-4 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between sm:px-8"
        >
          <span>{profile.profileViews} consultation{profile.profileViews > 1 ? "s" : ""}</span>
          <span>
            Membre depuis {profile.createdAt.toLocaleDateString("fr-FR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </span>
        </footer>
      </article>
    </main>
  );
}
