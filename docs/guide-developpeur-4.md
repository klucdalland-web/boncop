# Guide pratique - Développeur 4 BonCop

Ce document explique le travail du développeur 4, la manière de le tester et le parcours GitHub à suivre. Il s'adresse aussi à une personne qui débute avec Git et le développement web.

## 1. Ce que le développeur 4 doit livrer

Le développeur 4 est responsable de la consultation publique des freelances et de la revue de code principale.

| Élément | Fichier | Résultat attendu |
| --- | --- | --- |
| Page de recherche | `src/app/search/page.tsx` | Afficher les filtres et les profils correspondants. |
| Filtres de recherche | `src/features/search/components/SearchFilters.tsx` | Choisir une ville et plusieurs métiers. |
| Requêtes de recherche | `src/features/search/queries.ts` | Charger les métiers, les villes existantes et les profils publiés. |
| Fiche publique | `src/app/profile/[id]/page.tsx` | Afficher le CV d'un freelance sur une route dynamique. |
| Récupération du profil | `src/features/freelance/queries.ts` | Charger le profil et ses métiers, refuser un profil absent ou banni et compter une consultation. |
| Tests | `src/features/search/queries.test.ts` et `src/features/freelance/queries.test.ts` | Vérifier les filtres et le chargement du profil. |
| Revue de code | `.github/pull_request_template.md` | Fournir une checklist commune pour les pull requests. |

Les requêtes de lecture sont dans des fichiers `queries.ts`. Elles ne remplacent pas les Server Actions prévues pour le développeur 5 : `searchFreelances` et `updateFreelanceProfile` restent dans son périmètre. Les pages actuelles peuvent ainsi fonctionner sans importer un fichier d'action qui n'existe pas encore dans la branche `develop` de départ.

### Règles fonctionnelles appliquées

- La recherche ne montre que les comptes `FREELANCE` dont le statut est `VALIDATE`.
- Les villes proposées viennent des profils publiés présents dans la base. Le cadrage cite Brazzaville et Pointe-Noire comme exemples, mais ne fournit pas une liste exhaustive ; aucune liste supplémentaire n'est inventée ici.
- Plusieurs métiers peuvent être cochés. Un profil est retenu s'il possède au moins un des métiers choisis (intersection partielle).
- La fiche publique refuse les identifiants invalides, les comptes qui ne sont pas des freelances et les comptes qui ne sont pas encore validés (en attente ou bannis).
- Une consultation de la fiche augmente `profileViews` d'une unité. Le mot de passe haché n'est jamais récupéré par la requête publique.
- Le profil est rendu à chaque requête (`force-dynamic` et `revalidate = 0`) afin de refléter rapidement une modération ou une évolution des vues.
- Les cartes n'utilisent pas d'images distantes. Leur taille ne dépend donc pas du chargement d'une image et leur mise en page reste stable.

## 2. Préparer l'ordinateur

Installer les outils suivants :

1. **Git** pour télécharger le dépôt et enregistrer l'historique.
2. **Node.js LTS** et npm pour exécuter Next.js.
3. **PostgreSQL** pour stocker les comptes, les métiers et les relations.
4. **Visual Studio Code** (ou un éditeur équivalent) pour ouvrir les fichiers.
5. Un compte GitHub ayant accès au dépôt `sun123isa/boncop`.

Après installation, ouvrir un terminal et vérifier :

```bash
git --version
node --version
npm --version
```

## 3. Récupérer le projet

Choisir un dossier où conserver ses projets, puis exécuter :

```bash
git clone https://github.com/sun123isa/boncop.git
cd boncop
git fetch origin
git checkout develop
git pull origin develop
```

- `git clone` télécharge le dépôt et son historique.
- `cd boncop` entre dans le dossier du projet.
- `git fetch origin` récupère les références des branches distantes.
- `git checkout develop` place le terminal sur la branche d'intégration.
- `git pull origin develop` met cette branche à jour.

Ne commence jamais une fonctionnalité directement sur `main` ou `develop`.

**Tu utilises l'archive BonCop préparée avec ce guide ?** Dans ce cas, tu n'as pas besoin de refaire le `git clone` : le dossier fourni contient déjà le dépôt Git, l'historique et la branche `feature/dev4-recherche-profils`. Après extraction, ouvre le terminal dans ce dossier et vérifie :

```bash
git status
git branch --show-current
git remote -v
```

La branche attendue est `feature/dev4-recherche-profils` et `origin` doit pointer vers le dépôt BonCop. Tu peux passer directement à la préparation de PostgreSQL. Les commandes `git clone` ci-dessus servent uniquement à repartir d'une copie neuve du dépôt distant.

## 4. Préparer PostgreSQL et les variables d'environnement

### 4.1 Créer la base

Avec pgAdmin :

1. Ouvrir pgAdmin et se connecter au serveur PostgreSQL local.
2. Faire un clic droit sur **Databases**.
3. Choisir **Create > Database...**.
4. Saisir `boncop_db` dans le champ **Database**.
5. Enregistrer avec **Save**.

Il est aussi possible de créer la base depuis le terminal PostgreSQL :

```bash
createdb boncop_db
```

### 4.2 Créer le fichier `.env`

Dans le dossier principal `boncop`, créer un fichier nommé `.env` (pas `.env.txt`). Le dépôt de départ ne contient pas le fichier `.env.example` annoncé dans son README ; il faut donc créer `.env` manuellement pour le moment.

Exemple à adapter avec le nom d'utilisateur et le mot de passe PostgreSQL de votre ordinateur :

```dotenv
DATABASE_URL="postgresql://postgres:VOTRE_MOT_DE_PASSE@localhost:5432/boncop_db?schema=public"
AUTH_SECRET="COLLER_ICI_UN_SECRET_ALEATOIRE"
```

Pour générer une valeur `AUTH_SECRET`, exécuter cette commande puis copier le résultat dans `.env` :

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Ne jamais envoyer le fichier `.env` sur GitHub. Il contient des informations privées. Le dépôt ignore déjà les fichiers `.env*`.

## 5. Installer et démarrer l'application

Depuis le dossier `boncop` :

```bash
npm ci
npx prisma migrate dev
npx prisma generate
npm run dev
```

**Préalable important pour cette archive :** le fichier `src/app/layout.tsx` est vide dans la version reçue. Next.js App Router a besoin d'un layout racine contenant les balises HTML et BODY. Le développeur 3 doit donc compléter et fusionner ce fichier avant que les pages puissent être vérifiées dans le navigateur. Je ne l'ai pas modifié afin de respecter sa responsabilité. Si le serveur démarre mais affiche une erreur de layout, ce n'est pas un bug de la page D4 : c'est ce prérequis d'équipe qui manque.

À quoi servent ces commandes ?

- `npm ci` installe les dépendances exactement selon `package-lock.json`.
- `npx prisma migrate dev` applique les migrations du dépôt sur la base locale.
- `npx prisma generate` génère le client TypeScript Prisma dans `src/generated/prisma`.
- `npm run dev` démarre le serveur local Next.js.

Ouvrir ensuite ces adresses dans le navigateur :

- `http://localhost:3000/search` : page de recherche.
- `http://localhost:3000/register` : inscription d'un freelance.
- `http://localhost:3000/login` : connexion.
- `http://localhost:3000/profile/1` : exemple de fiche (remplacer `1` par un identifiant existant).

Pour arrêter le serveur, revenir au terminal et appuyer sur `Ctrl + C`.

## 6. Préparer des données pour vérifier les pages

La recherche ne montre que les profils validés. Pour tester le travail du développeur 4 sans dépendre du formulaire d'inscription ou du dashboard admin, créer un profil de démonstration directement dans la base locale avec pgAdmin :

1. Ouvrir la base `boncop_db`.
2. Ouvrir **Tools > Query Tool**.
3. Copier le SQL ci-dessous dans l'éditeur.
4. Remplacer `dev4@boncop.local` par une adresse de test qui n'est pas déjà utilisée dans cette base, puis cliquer sur le bouton d'exécution (icône éclair ou bouton **Execute** selon la version de pgAdmin).

```sql
INSERT INTO "metiers" ("libelle")
VALUES ('Développement web')
ON CONFLICT ("libelle") DO NOTHING;

INSERT INTO "users" (
  "email",
  "password",
  "role",
  "nom",
  "prenom",
  "ville",
  "quartier",
  "telephone",
  "whatsapp",
  "cv_description",
  "validated",
  "created_at",
  "updated_at"
)
VALUES (
  'dev4@boncop.local',
  'LOCAL_DEV_ONLY_NOT_A_LOGIN_PASSWORD',
  'FREELANCE',
  'Mabiala',
  'Alex',
  'Brazzaville',
  'Moungali',
  '+242 06 123 45 67',
  '+242 06 123 45 67',
  'Développeur web. Je réalise des sites et des applications web.',
  'VALIDATE',
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
)
ON CONFLICT ("email") DO UPDATE SET
  "ville" = EXCLUDED."ville",
  "quartier" = EXCLUDED."quartier",
  "telephone" = EXCLUDED."telephone",
  "whatsapp" = EXCLUDED."whatsapp",
  "cv_description" = EXCLUDED."cv_description",
  "validated" = EXCLUDED."validated",
  "updated_at" = CURRENT_TIMESTAMP
RETURNING "id";

INSERT INTO "user_metier" ("user_id", "metier_id")
SELECT users."id", metiers."id"
FROM "users" AS users
CROSS JOIN "metiers" AS metiers
WHERE users."email" = 'dev4@boncop.local'
  AND metiers."libelle" = 'Développement web'
ON CONFLICT ("user_id", "metier_id") DO NOTHING;
```

Note : le mot de passe est volontairement une valeur factice. Ce profil sert uniquement à tester la recherche et la fiche publique ; il ne peut pas servir à se connecter. N'utilisez jamais ce SQL sur la base de production. En production, la création et la validation des profils passent par les fonctionnalités d'authentification et d'administration.

### Vérifier les filtres

1. Ouvrir `http://localhost:3000/search`.
2. Choisir **Brazzaville** dans la liste des villes.
3. Cocher **Développement web**.
4. Cliquer sur **Rechercher**.
5. Vérifier que le profil de test apparaît.
6. Retirer le métier ou choisir une autre ville : le résultat doit changer ou disparaître.
7. Cliquer sur **Effacer les filtres** pour revenir à la recherche initiale.

### Vérifier la fiche et le compteur de vues

Récupérer l'identifiant retourné par la commande SQL, puis ouvrir `http://localhost:3000/profile/ID`.

Dans pgAdmin, exécuter :

```sql
SELECT "id", "profile_views", "validated"
FROM "users"
WHERE "email" = 'dev4@boncop.local';
```

Recharger la fiche dans le navigateur et relancer le `SELECT`. `profile_views` doit augmenter de 1 à chaque consultation de la page.

Pour vérifier le bannissement, exécuter :

```sql
UPDATE "users"
SET "validated" = 'BANNI'
WHERE "email" = 'dev4@boncop.local';
```

La fiche ne doit plus être accessible. Pour remettre le compte dans l'état de test :

```sql
UPDATE "users"
SET "validated" = 'VALIDATE'
WHERE "email" = 'dev4@boncop.local';
```

## 7. Contrôles avant de proposer le code

Exécuter toutes les commandes depuis le dossier racine :

```bash
npm run lint
npx tsc --noEmit
npm test
npm run build
```

Ces commandes contrôlent respectivement le style du code, les types TypeScript, les tests automatisés et la compilation de production. Le build doit être exécuté avec un `DATABASE_URL` valide et une base accessible si les modules serveur interrogent PostgreSQL pendant la compilation.

**État des vérifications pendant la préparation de cette branche :** les dépendances npm n'étaient pas installées et le registre npm était inaccessible depuis l'environnement de travail (`EAI_AGAIN` / erreur DNS). La syntaxe TypeScript/TSX des sept fichiers D4 a été contrôlée et les deux fonctions de requête ont passé des essais isolés avec Prisma simulé. En revanche, Vitest, ESLint, le contrôle complet des types et le build Next.js n'ont pas pu être exécutés. Après `npm ci`, il faut donc lancer réellement les quatre commandes ci-dessus avant de demander la fusion.

Faire aussi une vérification manuelle dans le navigateur :

- une ville sans profil donne un état vide lisible ;
- aucun métier sélectionné n'empêche pas la recherche ;
- plusieurs métiers peuvent être cochés ;
- les profils `ATTENTE` ou `BANNI` ne sont pas proposés dans la recherche ;
- un identifiant de fiche invalide donne une page 404 ;
- un profil banni donne une page 404 ;
- la fiche conserve sa mise en page sur écran mobile ;
- les liens de téléphone et WhatsApp ne s'affichent que lorsqu'une valeur est disponible.

## 8. Créer une issue GitHub

Une **issue** est une fiche de travail. Elle décrit un besoin ou un bug avant que quelqu'un commence à coder. Elle permet de savoir qui fait le travail, pourquoi il est fait et comment vérifier qu'il est terminé.

1. Ouvrir `https://github.com/sun123isa/boncop`.
2. Cliquer sur l'onglet **Issues**.
3. Cliquer sur **New issue**.
4. Choisir **Nouvelle fonctionnalité** ou **Signaler un bug**. Les modèles sont dans `.github/ISSUE_TEMPLATE/`.
5. Donner un titre précis, par exemple `[SEARCH] Filtrer les profils par ville`.
6. Décrire le résultat attendu et ajouter des critères d'acceptation cochables.
7. Dans le panneau de droite, choisir **Assignees** puis la personne responsable.
8. Ajouter une étiquette de priorité si le dépôt en possède (`priority: high`, `priority: medium` ou `priority: low`).
9. Cliquer sur **Submit new issue**.

Pour le backlog S22, l'issue doit aussi avoir un statut. Si le dépôt utilise un GitHub Project :

1. Ouvrir l'issue.
2. Dans le panneau de droite, ouvrir **Projects**.
3. Ajouter l'issue au tableau BonCop.
4. Dans la colonne **Status**, choisir `Todo`, `In progress` ou `Done` selon l'avancement.

Une issue ne doit passer à `Done` qu'après la revue, la fusion dans `develop` et le test de l'intégration. À défaut de tableau Project configuré, créer ou demander au responsable du dépôt de créer un tableau avec ces trois statuts.

## 9. Créer une branche et faire des commits courts

Une branche est une copie de travail isolée. Elle évite de modifier directement la version commune.

Si tu pars d'un clone neuf du dépôt GitHub, commence par récupérer `develop` puis crée ta branche :

```bash
git checkout develop
git pull origin develop
git checkout -b feature/dev4-recherche-profils
```

Si tu utilises l'archive préparée, cette branche existe déjà et contient les six commits du travail D4. Vérifie simplement que tu es dessus :

```bash
git branch --show-current
git status
```

Ne relance pas `git checkout -b` dans ce deuxième cas : Git refuserait de créer une branche portant un nom déjà utilisé.

Faire des modifications petites et cohérentes. Exemple de commits :

```bash
git add src/features/search/queries.ts
git commit -m "feat(search): ajoute les requêtes de recherche"

git add src/features/search/components/SearchFilters.tsx
git commit -m "feat(search): ajoute les filtres ville et métiers"

git add src/app/search/page.tsx
git commit -m "feat(search): affiche les profils filtrés"

git add src/features/freelance/queries.ts "src/app/profile/[id]/page.tsx"
git commit -m "feat(profile): ajoute la fiche freelance SSR"
```

Puis enregistrer les tests et la documentation dans leurs propres commits :

```bash
git add src/features/freelance/queries.test.ts src/features/search/queries.test.ts
git commit -m "test(search): couvre les filtres et les profils"

git add docs/guide-developpeur-4.md .github/
git commit -m "docs(dev4): ajoute le guide et les modèles GitHub"
```

Un commit doit expliquer une seule intention. Éviter les messages vagues comme `modif`, `update` ou `final`.

Avant de pousser, vérifier les fichiers restants avec `git status --short`, les ajouter par chemin précis, puis intégrer les nouveautés de l'équipe :

```bash
git checkout develop
git pull origin develop
git checkout feature/dev4-recherche-profils
git merge develop
```

S'il y a un conflit, Git indique les fichiers concernés. Ouvrir ces fichiers dans VS Code, rechercher les marqueurs `<<<<<<<`, `=======` et `>>>>>>>`, garder la version correcte ou combiner les deux, supprimer les marqueurs, puis vérifier le code. Ensuite :

```bash
git add chemin/du/fichier-resolu
git commit
```

Ne pas supprimer le travail d'un collègue sans lui demander. Si le conflit touche un fichier qu'il possède, le contacter avant de choisir une version.

Envoyer enfin la branche :

```bash
git push -u origin feature/dev4-recherche-profils
```

## 10. Ouvrir une pull request (PR)

Une **pull request** demande à l'équipe d'intégrer les commits d'une branche dans une autre. Pour le projet BonCop, la destination normale est `develop`, pas `main`.

1. Après le `git push`, ouvrir le dépôt GitHub.
2. Cliquer sur **Pull requests**.
3. Cliquer sur **New pull request** (ou le bouton **Compare & pull request** proposé par GitHub).
4. En haut, régler **base** sur `develop`.
5. Régler **compare** sur `feature/dev4-recherche-profils` (votre branche).
6. Vérifier que le résumé des fichiers correspond à votre issue.
7. Donner un titre clair, par exemple `feat(search): ajoute la recherche par ville et métier`.
8. Dans la description, expliquer le comportement ajouté, les commandes de test exécutées et les éventuelles limites.
9. Ajouter `Refs #NUMERO` ou `Closes #NUMERO` pour relier l'issue. Comme la PR cible `develop` et que `main` peut être la branche par défaut, vérifier le statut de l'issue après la fusion ; au besoin, la fermer manuellement ou la déplacer vers `Done` dans le Project.
10. Dans le panneau de droite, choisir un collègue dans **Reviewers** puis cliquer sur **Create pull request**.

Ne pas fusionner soi-même sa PR. La règle du groupe demande une revue par un autre membre.

## 11. Faire une revue de code (rôle principal du développeur 4)

Pour relire une PR :

1. Ouvrir **Pull requests** puis sélectionner la PR.
2. Lire la description et ouvrir l'issue associée.
3. Cliquer sur l'onglet **Files changed**.
4. Examiner les fichiers modifiés, les noms, les conditions, les requêtes SQL/Prisma et les cas d'erreur.
5. Pour commenter une ligne, placer le pointeur sur cette ligne, cliquer sur le `+` qui apparaît, écrire le commentaire puis **Add single comment** ou **Start a review**.
6. Quand toute la revue est terminée, cliquer sur **Review changes**.
7. Choisir :
   - **Comment** si vous avez une remarque sans bloquer la fusion ;
   - **Request changes** si un problème doit être corrigé avant la fusion ;
   - **Approve** si le code est correct et les vérifications suffisantes.
8. Cliquer sur **Submit review**.

Checklist de revue pour BonCop :

- L'issue est liée et les changements correspondent à ses critères d'acceptation.
- La PR cible `develop`, jamais `main` pour une fonctionnalité ordinaire.
- Aucun secret, mot de passe ou fichier `.env` n'est ajouté.
- Les pages publiques ne récupèrent pas le hash du mot de passe.
- La recherche n'affiche que les profils validés et filtre correctement ville et métiers.
- Les identifiants et les données reçues sont vérifiés côté serveur.
- Les états vides et les profils absents/bannis sont gérés.
- Les tests, le lint, TypeScript et le build passent.
- La page reste lisible sur mobile et ne provoque pas de décalage de mise en page.
- Les commits sont courts et leurs messages expliquent leur contenu.

Après l'approbation, un autre membre autorisé ouvre la PR et clique sur **Merge pull request** ou **Squash and merge**, selon la convention décidée par l'équipe. Une fois la fusion confirmée, il peut cliquer sur **Delete branch**. La branche locale peut ensuite être mise à jour :

```bash
git checkout develop
git pull origin develop
git branch -d feature/dev4-recherche-profils
```

## 12. Ce que chaque membre doit présenter pour S22

Le livrable S22 est prévu pour la semaine du 2 au 6 novembre 2026. Le dépôt du travail est demandé avant le stand-up du vendredi 6 novembre 2026 à 16 h, avec une démonstration pendant ce stand-up.

Le livrable S22 demande notamment :

- une application Next.js avec Auth.js ;
- au moins 70 % des fonctionnalités prioritaires terminées ;
- une page SSG, une page ISR et une page SSR, justifiées dans le README ;
- une URL Vercel stable et des variables d'environnement configurées sans secret dans Git ;
- au moins 80 en Performance et 80 en Accessibility sur Lighthouse mobile, avec une capture déposée dans le dépôt ;
- des issues avec statut et assignation ;
- au moins trois issues de bug reproductibles ouvertes sur le dépôt d'un autre groupe pendant le bug bash ;
- au moins une PR fusionnée cette semaine pour chaque membre, relue par un autre membre ;
- les comptes Git de tous les membres dans le README ;
- une démonstration d'environ une minute par membre pendant le stand-up.

La livraison du développeur 4 ne remplace pas les tâches des développeurs 1, 2, 3, 5 et 6. Avant la démonstration, vérifier que leurs pages et Server Actions ont été fusionnées dans `develop` et que le parcours complet a été testé ensemble.

### Démonstration D4 en une minute

1. Ouvrir `/search` et montrer le filtre de ville.
2. Cocher deux métiers, puis lancer la recherche.
3. Ouvrir la carte du profil de démonstration.
4. Montrer le CV, les métiers et les liens de contact sur `/profile/ID`.
5. Recharger la page et montrer dans pgAdmin que `profile_views` a augmenté.
6. Passer le compte en `BANNI` dans la base locale et recharger : la page doit afficher une 404. Le remettre ensuite en `VALIDATE`.

### Points de blocage repérés dans l'archive de départ

Ces points ne font pas partie du périmètre développeur 4, mais ils doivent être corrigés par les responsables concernés avant de pouvoir déclarer toute l'application prête :

- `src/app/layout.tsx` est vide. Le développeur 3 doit y fournir le layout racine Next.js avant que le build complet puisse réussir.
- `src/features/auth/actions.ts` importe `prisma` comme export nommé, alors que `src/db/prisma.ts` n'expose que l'export par défaut dans l'archive. Le développeur 1 doit harmoniser cet export ou les imports.
- Le README demande de copier `.env.example`, mais ce fichier n'existe pas dans l'archive. Le responsable de la configuration doit l'ajouter ou mettre le README à jour.
- Les Server Actions de recherche et de mise à jour du CV du développeur 5, ainsi que le dashboard du développeur 6, ne sont pas présents dans la branche `develop` fournie.
- Les comptes GitHub des membres, l'URL Vercel et les identifiants de démonstration ne sont pas fournis dans les documents reçus. Ils ne doivent pas être inventés.
