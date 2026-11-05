import Link from "next/link";
import { SearchFilters } from "@/features/search/components/SearchFilters";
import {
  getSearchFreelances,
  getSearchOptions,
} from "@/features/search/queries";

type SearchParams = {
  ville?: string | string[];
  metierIds?: string | string[];
};

type SearchPageProps = {
  searchParams: Promise<SearchParams>;
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Trouver un freelance | BonCop",
  description: "Recherchez des freelances au Congo par ville et par métier.",
};

function getFirstValue(value: string | string[] | undefined): string {
  if (Array.isArray(value)) {
    return value[0]?.trim() ?? "";
  }

  return value?.trim() ?? "";
}

function getMetierIds(value: string | string[] | undefined): number[] {
  const values = Array.isArray(value) ? value : value ? [value] : [];

  return Array.from(
    new Set(
      values
        .map((item) => Number(item))
        .filter((id) => Number.isSafeInteger(id) && id > 0)
    )
  );
}

function getFreelanceName(prenom: string | null, nom: string | null): string {
  return [prenom, nom].filter(Boolean).join(" ") || "Freelance BonCop";
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const selectedCity = getFirstValue(params.ville);
  const selectedMetierIds = getMetierIds(params.metierIds);

  const [options, freelances] = await Promise.all([
    getSearchOptions(),
    getSearchFreelances({
      ville: selectedCity || undefined,
      metierIds: selectedMetierIds,
    }),
  ]);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8 space-y-3">
        <p className="text-sm font-semibold text-brand-700">BonCop / Recherche</p>
        <h1 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
          Trouvez le bon freelance
        </h1>
        <p className="max-w-2xl text-base leading-7 text-ink-500">
          Choisissez une ville et un ou plusieurs métiers pour découvrir les
          profils publiés au Congo.
        </p>
      </header>

      <SearchFilters
        cities={options.cities}
        metiers={options.metiers}
        selectedCity={selectedCity}
        selectedMetierIds={selectedMetierIds}
      />

      <section className="mt-10" aria-labelledby="search-results-title">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="search-results-title"
              className="text-2xl font-bold text-ink-900"
            >
              Profils disponibles
            </h2>
            <p className="mt-1 text-sm text-ink-500" aria-live="polite">
              {freelances.length} profil{freelances.length > 1 ? "s" : ""} affiché
              {freelances.length > 1 ? "s" : ""}
            </p>
          </div>
          <Link
            href="/register"
            className="text-sm font-semibold text-brand-700 underline-offset-4 hover:underline"
          >
            Vous êtes freelance ? Créez votre profil
          </Link>
        </div>

        {freelances.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {freelances.map((freelance) => {
              const name = getFreelanceName(freelance.prenom, freelance.nom);
              const metierLabels = freelance.userMetiers.map(
                (relation) => relation.metier.libelle
              );

              return (
                <article
                  key={freelance.id}
                  className="flex h-full flex-col rounded-lg border border-line-200 bg-white p-5 shadow-card"
                >
                  <div className="flex flex-1 flex-col gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-ink-900">{name}</h3>
                      <p className="mt-1 text-sm text-ink-500">
                        {[freelance.ville, freelance.quartier]
                          .filter(Boolean)
                          .join(" - ") || "Localisation non renseignée"}
                      </p>
                    </div>

                    {metierLabels.length > 0 ? (
                      <ul className="flex flex-wrap gap-2" aria-label="Métiers">
                        {metierLabels.map((label) => (
                          <li
                            key={label}
                            className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-800"
                          >
                            {label}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-ink-500">Métier non renseigné</p>
                    )}

                    <p className="line-clamp-4 text-sm leading-6 text-ink-700">
                      {freelance.cvDescription?.trim() ||
                        "Ce freelance n'a pas encore ajouté de présentation."}
                    </p>
                  </div>

                  <div
                    className="mt-5 flex items-center justify-between border-t border-line-200 pt-4"
                  >
                    <span className="text-xs text-ink-500">
                      {freelance.profileViews} vue
                      {freelance.profileViews > 1 ? "s" : ""}
                    </span>
                    <Link
                      href={`/profile/${freelance.id}`}
                      className="inline-flex min-h-10 items-center rounded-md bg-brand-600 px-4 text-sm font-semibold text-white hover:bg-brand-700"
                    >
                      Voir le profil
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div
            className="rounded-lg border border-dashed border-line-200 bg-surface-100 px-5 py-12 text-center"
          >
            <h3 className="text-lg font-semibold text-ink-900">
              Aucun profil ne correspond à votre recherche
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-ink-500">
              Essayez une autre ville ou retirez un métier de la sélection.
              Seuls les profils validés par l&apos;administration sont affichés..
            </p>
            <Link
              href="/search"
              className="mt-5 inline-flex min-h-11 items-center rounded-md border border-line-200 bg-white px-4 text-sm font-semibold text-ink-700 hover:bg-surface-100"
            >
              Réinitialiser la recherche
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
