# BonCop : identité et design tokens

> Responsable : Développeur 3 (Garant UI/UX). Inspiration : Fiverr (marketplace claire, fond blanc, vert comme couleur d'action, cartes de profils lisibles). Nous reprenons sa structure, pas ses couleurs exactes : le vert Fiverr `#1DBF73` n'atteint pas le contraste AA avec du texte blanc (≈ 2,5:1). BonCop utilise un vert plus profond pour tout ce qui porte du texte.

---

## 1. Ton

BonCop parle à deux publics : des recruteurs pressés et des freelances qui vendent leur talent. Le ton est **direct, chaleureux et professionnel**.

| Principe | À faire | À éviter |
|---|---|---|
| Clair | « Trouver un freelance » | « Découvrir l'écosystème de talents » |
| Actif | « Enregistrer le profil » | « Soumettre » |
| Local | Mentionner Brazzaville, Pointe-Noire, WhatsApp, le français courant | Jargon anglais, formules importées |
| Respectueux | Vouvoiement par défaut sur les écrans publics | Familiarité excessive |
| Honnête | Une erreur dit ce qui s'est passé et quoi faire | Excuses vagues, « Oups ! » |

Règles de rédaction : phrases courtes, majuscule en début de phrase uniquement (pas de TITRES EN MAJUSCULES), un bouton garde le même verbe tout au long du parcours (« Publier » donne « Profil publié »).

---

## 2. Palette

Toutes les paires texte/fond ci-dessous visent **WCAG AA** (4,5:1 pour le texte normal, 3:1 pour le texte large et les éléments d'interface). Tous les ratios ont été calculés selon la formule de luminance relative WCAG 2.1 ; la colonne « Contraste » indique le ratio réel.

### Couleurs de marque

| Token | Hex | Usage | Contraste |
|---|---|---|---|
| `brand-600` (primaire) | `#0C7C43` | Boutons principaux, liens, focus | Blanc dessus : 5,28:1 ✔ |
| `brand-700` (survol) | `#09663A` | Hover des boutons principaux | Blanc dessus : 7,06:1 ✔ |
| `brand-800` (actif) | `#075230` | Pressed | Blanc dessus : 9,30:1 ✔ |
| `brand-100` | `#E3F5EA` | Fonds légers, badges succès | Texte `brand-800` dessus : 8,20:1 ✔ |
| `brand-400` | `#1DBF73` | **Décoratif uniquement** (illustrations, barres, icônes sans texte) | Ne jamais porter de texte |
| `accent-400` | `#FFB33E` | Étoiles de notation, mise en avant | Décoratif uniquement |

### Neutres

| Token | Hex | Usage | Contraste sur blanc |
|---|---|---|---|
| `ink-900` | `#222325` | Titres, texte principal | 15,73:1 ✔ |
| `ink-700` | `#404145` | Texte courant | 10,19:1 ✔ |
| `ink-500` | `#62646A` | Texte secondaire, aides | 5,91:1 ✔ |
| `ink-400` | `#74767E` | Bordures de champs (3:1 requis) | 4,53:1 ✔ |
| `line-200` | `#DADBDD` | Séparateurs décoratifs, bordures de cartes | Décoratif |
| `surface-100` | `#F5F5F5` | Fond de section | |
| `surface-0` | `#FFFFFF` | Fond de page, cartes | |

### Sémantiques

| Token | Fond | Texte / bordure | Contraste |
|---|---|---|---|
| `danger` | `#FDECEC` | `#C62828` | Texte sur blanc : 5,62:1 ✔ ; sur fond `danger` : 4,92:1 ✔ ; blanc sur `danger-fg` : 5,62:1 ✔ |
| `warning` | `#FFF4E0` | `#8A4B00` | 6,24:1 ✔ |
| `success` | `#E3F5EA` | `#075230` | 8,20:1 ✔ |
| `info` | `#E8F1FD` | `#1A4E9B` | 7,07:1 ✔ |

**Règle** : l'information ne passe jamais par la couleur seule. Une erreur a une icône et un texte, un statut a un libellé.

---

## 3. Typographie

Fiverr utilise une police propriétaire (Macan) que nous ne pouvons pas reprendre. Équivalent libre, chargé via `next/font/google` (auto-hébergé au build, aucune requête externe au runtime, ce qui aide le score Lighthouse).

| Rôle | Police | Poids |
|---|---|---|
| Interface | **Plus Jakarta Sans** | 400, 500, 600, 700 |
| Code / monospace | **JetBrains Mono** | 400, 500 |

Fallbacks : `ui-sans-serif, system-ui, "Segoe UI", Roboto, Arial, sans-serif` et `ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace`.

### Échelle typographique

| Token | Taille | Interligne | Usage |
|---|---|---|---|
| `text-xs` | 12 px | 16 px | Mentions, badges |
| `text-sm` | 14 px | 20 px | Libellés, aides, texte des champs denses |
| `text-base` | 16 px | 24 px | Texte courant (minimum sur mobile pour les champs, évite le zoom iOS) |
| `text-lg` | 18 px | 28 px | Texte d'introduction |
| `text-xl` | 20 px | 28 px | Titres de cartes |
| `text-2xl` | 24 px | 32 px | Titres de section |
| `text-3xl` | 32 px | 40 px | Titre de page |
| `text-4xl` | 44 px | 52 px | Titre de la page d'accueil (≥ 768 px, 32 px en dessous) |

Longueur de ligne maximale : 70 caractères (`max-w-prose`).

---

## 4. Espacement, rayons, ombres

**Base 4 px.** Seules ces valeurs sont autorisées dans les composants.

| Token | Valeur | Tailwind |
|---|---|---|
| `space-1` | 4 px | `1` |
| `space-2` | 8 px | `2` |
| `space-3` | 12 px | `3` |
| `space-4` | 16 px | `4` |
| `space-6` | 24 px | `6` |
| `space-8` | 32 px | `8` |
| `space-12` | 48 px | `12` |
| `space-16` | 64 px | `16` |
| `space-24` | 96 px | `24` |

| Rayon | Valeur | Usage |
|---|---|---|
| `radius-sm` | 4 px | Boutons, champs, badges |
| `radius-md` | 8 px | Cartes de profil, menus |
| `radius-lg` | 12 px | Modales |
| `radius-full` | 9999 px | Avatars, pastilles |

| Ombre | Valeur | Usage |
|---|---|---|
| `shadow-card` | `0 1px 3px rgb(34 35 37 / 0.08)` | Cartes au repos |
| `shadow-raised` | `0 8px 24px rgb(34 35 37 / 0.12)` | Carte survolée, menus |
| `shadow-modal` | `0 16px 48px rgb(34 35 37 / 0.20)` | Modales |

Cibles tactiles : **44 × 44 px minimum**.

---

## 5. Fichiers de tokens

### 5.1 `src/app/globals.css` (Tailwind v4, source de vérité)

```css
@import "tailwindcss";

@theme {
  /* Marque */
  --color-brand-100: #E3F5EA;
  --color-brand-400: #1DBF73;
  --color-brand-600: #0C7C43;
  --color-brand-700: #09663A;
  --color-brand-800: #075230;
  --color-accent-400: #FFB33E;

  /* Neutres */
  --color-ink-900: #222325;
  --color-ink-700: #404145;
  --color-ink-500: #62646A;
  --color-ink-400: #74767E;
  --color-line-200: #DADBDD;
  --color-surface-100: #F5F5F5;
  --color-surface-0: #FFFFFF;

  /* Sémantiques */
  --color-danger-bg: #FDECEC;
  --color-danger-fg: #C62828;
  --color-warning-bg: #FFF4E0;
  --color-warning-fg: #8A4B00;
  --color-success-bg: #E3F5EA;
  --color-success-fg: #075230;
  --color-info-bg: #E8F1FD;
  --color-info-fg: #1A4E9B;

  /* Polices (variables injectées par next/font) */
  --font-sans: var(--font-jakarta), ui-sans-serif, system-ui, "Segoe UI", Roboto, Arial, sans-serif;
  --font-mono: var(--font-jetbrains), ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;

  /* Rayons */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* Ombres */
  --shadow-card: 0 1px 3px rgb(34 35 37 / 0.08);
  --shadow-raised: 0 8px 24px rgb(34 35 37 / 0.12);
  --shadow-modal: 0 16px 48px rgb(34 35 37 / 0.20);
}

/* Tokens de composants (alias sémantiques) */
:root {
  --focus-ring: 0 0 0 2px var(--color-surface-0), 0 0 0 4px var(--color-brand-600);
  --control-height-sm: 44px;
  --control-height-md: 44px;
  --control-height-lg: 52px;
  --skeleton-base: #ECEDEE;
  --skeleton-shine: #F7F7F8;
}

body {
  background: var(--color-surface-0);
  color: var(--color-ink-900);
  font-family: var(--font-sans);
}

:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
}

/* Squelette de chargement : dimensions du contenu final, CLS ≈ 0 */
.skeleton {
  background: linear-gradient(
    90deg,
    var(--skeleton-base) 25%,
    var(--skeleton-shine) 50%,
    var(--skeleton-base) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.4s ease-in-out infinite;
  border-radius: var(--radius-sm);
}

@keyframes skeleton-shimmer {
  from { background-position: 200% 0; }
  to   { background-position: -200% 0; }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }

  .skeleton {
    animation: none;
    background: var(--skeleton-base);
  }
}
```

> Si le projet est en Tailwind v3, les mêmes valeurs vont dans `theme.extend` de `tailwind.config.ts` (`colors`, `borderRadius`, `boxShadow`, `fontFamily`).

### 5.2 `src/app/layout.tsx` (extrait : polices)

```tsx
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

// <html lang="fr" className={`${jakarta.variable} ${jetbrains.variable}`}>
```

---

## 6. Tokens par composant (`src/components/ui/`)

Règles communes : composants **génériques** (aucune logique métier, aucun import de `features/`), props typées, `className` fusionnable (`cn()` de `@/lib/cn`), accessibilité native (éléments HTML sémantiques d'abord, ARIA ensuite).

### Button

| Variante | Fond | Texte | Bordure | Hover |
|---|---|---|---|---|
| `primary` | `brand-600` | blanc | aucune | `brand-700` |
| `secondary` | blanc | `ink-700` | `ink-400` 1 px | fond `surface-100` (texte `ink-700` : 9,35:1 ✔) |
| `ghost` | transparent | `brand-600` | aucune | fond `brand-100` (texte `brand-600` : 4,65:1 ✔) |
| `danger` | `danger-fg` | blanc | aucune | plus foncé |

Tailles : `sm` 44 px, `md` 44 px (défaut), `lg` 52 px. Rayon `radius-sm`. Police `text-sm` / 600 (`text-base` en `lg`). Padding horizontal `space-4` (`space-6` en `lg`). État `disabled` : fond `surface-100`, texte `ink-500`, `cursor-not-allowed`. État `loading` : spinner, `aria-busy="true"`, largeur inchangée (pas de CLS).

### Input / Textarea / Select

Hauteur 44 px, rayon `radius-sm`, bordure `ink-400` 1 px, texte `text-base` `ink-900`, placeholder `ink-500`. Focus : bordure `brand-600` + `focus-ring`. Erreur : bordure `danger-fg`, message sous le champ (`text-sm`, `danger-fg`, icône), lié par `aria-describedby` et `aria-invalid="true"`. Le `<label>` est toujours visible (jamais seulement un placeholder).

### Modal

Fond de superposition `ink-900` à 60 %, panneau blanc, rayon `radius-lg`, ombre `shadow-modal`, padding `space-6`, largeur max 480 px (`sm`) / 640 px (`md`). Utiliser `<dialog>` ou un composant accessible : `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, piège du focus, fermeture avec Échap, retour du focus à l'élément déclencheur, scroll du `body` bloqué. Plein écran sous 640 px.

### Card (profil freelance)

Fond blanc, bordure `line-200`, rayon `radius-md`, ombre `shadow-card`, padding `space-4`. Survol : `shadow-raised`, sans déplacement. Image ou avatar à dimensions fixes (`width`/`height` explicites, `next/image`) pour éviter le CLS.

### Badge

`text-xs` / 600, rayon `radius-full`, padding `space-1` × `space-3`. Variantes `success`, `warning`, `danger`, `info`, `neutral` avec paires fond/texte du tableau sémantique.

---

## 7. Squelette de chargement

Principe : **le squelette reprend exactement les dimensions du contenu final** pour supprimer tout décalage de mise en page.

| Token | Valeur |
|---|---|
| `skeleton-base` | `#ECEDEE` |
| `skeleton-shine` | `#F7F7F8` |
| Rayon | celui du composant remplacé |
| Animation | dégradé qui glisse, 1,4 s, boucle |
| Mouvement réduit | animation désactivée, couleur fixe `skeleton-base` |

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--skeleton-base) 25%,
    var(--skeleton-shine) 50%,
    var(--skeleton-base) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.4s ease-in-out infinite;
  border-radius: var(--radius-sm);
}

@keyframes skeleton-shimmer {
  from { background-position: 200% 0; }
  to   { background-position: -200% 0; }
}
```

```tsx
// src/components/ui/Skeleton.tsx
import { cn } from "@/lib/cn";

type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className }: SkeletonProps) {
  return <div aria-hidden="true" className={cn("skeleton", className)} />;
}

// Conteneur : annonce un seul message aux lecteurs d'écran
export function SkeletonRegion({ label = "Chargement en cours", children }: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div role="status" aria-live="polite" aria-busy="true">
      <span className="sr-only">{label}</span>
      {children}
    </div>
  );
}
```

Exemple : `ProfileCardSkeleton` = avatar 64 × 64 (`radius-full`) + 3 lignes (16 px, 14 px, 14 px) + 2 badges, dans une `Card` de mêmes dimensions. À brancher dans les fichiers `loading.tsx` de chaque route.

---

## 8. État d'erreur

Il répond à trois questions : que s'est-il passé, est-ce grave, que faire maintenant. Pas d'excuses, pas d'humour, pas de message technique.

| Élément | Spécification |
|---|---|
| Conteneur | `role="alert"`, fond `danger-bg`, bordure `danger-fg` 1 px, rayon `radius-md`, padding `space-6` |
| Icône | Alerte 24 px, `danger-fg`, `aria-hidden` |
| Titre | `text-xl` / 600, `ink-900` |
| Description | `text-base`, `ink-700`, 1 à 2 phrases |
| Action | Bouton `primary` (« Réessayer ») + lien `ghost` (« Retour à l'accueil ») |
| Détail technique | `digest` de l'erreur en `font-mono` `text-xs` `ink-500`, utile au support |

Messages types :

| Situation | Titre | Description |
|---|---|---|
| Réseau / serveur | Impossible de charger les profils | La connexion a échoué. Vérifiez votre réseau, puis réessayez. |
| 404 | Profil introuvable | Ce profil n'existe plus ou son adresse est incorrecte. |
| 403 | Accès réservé | Connectez-vous avec un compte autorisé pour voir cette page. |
| Compte banni | Compte suspendu | Votre profil n'est plus visible. Contactez l'équipe BonCop. |
| Formulaire | Le formulaire contient 2 erreurs | Corrigez les champs signalés en rouge, puis enregistrez de nouveau. |

```tsx
// src/components/ui/ErrorState.tsx
import { Button } from "./Button";

type ErrorStateProps = {
  title: string;
  description: string;
  onRetry?: () => void;
  digest?: string;
};

export function ErrorState({ title, description, onRetry, digest }: ErrorStateProps) {
  return (
    <div
      role="alert"
      className="rounded-md border border-danger-fg bg-danger-bg p-6"
    >
      <h2 className="text-xl font-semibold text-ink-900">{title}</h2>
      <p className="mt-2 text-base text-ink-700">{description}</p>
      {onRetry && (
        <Button className="mt-4" onClick={onRetry}>
          Réessayer
        </Button>
      )}
      {digest && (
        <p className="mt-4 font-mono text-xs text-ink-500">Référence : {digest}</p>
      )}
    </div>
  );
}
```

```tsx
// src/app/error.tsx (doit être un Client Component)
"use client";
import { ErrorState } from "@/components/ui/ErrorState";

export default function Error({ error, reset }: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-prose p-6">
      <ErrorState
        title="Impossible de charger la page"
        description="Un problème est survenu de notre côté. Réessayez dans un instant."
        onRetry={reset}
        digest={error.digest}
      />
    </div>
  );
}
```

---

## 9. Checklist de revue (Développeur 4 + Développeur 3)

- [ ] Aucune couleur en dur : uniquement des tokens
- [ ] Contraste AA vérifié sur chaque nouvelle paire texte/fond
- [ ] Focus visible sur tous les éléments interactifs
- [ ] Cibles tactiles ≥ 44 px
- [ ] Images avec `width`/`height` et `alt` pertinent
- [ ] Squelette aux dimensions du contenu final (CLS ≈ 0)
- [ ] Animations désactivées avec `prefers-reduced-motion`
- [ ] Textes en français, sentence case, verbes d'action
- [ ] Audit Lighthouse ≥ 100 en accessibilité, bonnes pratiques et SEO sur la page modifiée
