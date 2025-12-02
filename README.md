# 🌐 Adaverse

Adaverse est une plateforme qui recense et met en valeur les projets réalisés par les apprenant·e·s d’Ada Tech School.

L’objectif : avoir **un endroit unique** pour découvrir les projets des promos (apps web, dataviz, intégrations d’API, outils internes…), filtrés par **type de projet Ada** (AdaQuiz, AdaCheckEvent, etc.) et par **promotion**.

---
 ***  Site déployé sur Vercel : ***
👉 https://adaverse-psi.vercel.app/ 
## ✨ Fonctionnalités

### 👀 Côté utilisateur·rice

- Page d’accueil avec :
  - un **hero** présentant la plateforme et le développeur
  - un **switch dark / light mode**
  - des **carrousels horizontaux** de projets, regroupés par **type de projet Ada**.
- Chaque projet est affiché sous forme de **carte** :
  - titre du projet
  - promo associée
  - date (création / publication)
  - vignette du projet :
    - `thumbnail.png` récupéré depuis le repo GitHub si disponible
    - sinon une **image par défaut** “image non disponible”
  - clic sur la carte → ouverture de la **page de détail** (TODO / à compléter selon avancement).

- Page de détail d’un projet (en cours / à venir) :
  - titre du projet
  - promo
  - catégorie (projet Ada : AdaQuiz, AdaCheckEvent, etc.)
  - image principale
  - dates
  - liens GitHub + démo.

---

### 📝 Proposition de projet

- Bouton **« Proposer un projet »** dans le header.
- Ouverture d’une **popup avec formulaire** :
  - titre du projet (obligatoire)
  - lien GitHub (obligatoire)
  - lien vers la démo (obligatoire)
  - promo concernée (liste déroulante)
  - type de projet Ada / catégorie (liste déroulante).
- Validation côté serveur :
  - si un champ obligatoire manque → erreur, le projet n’est pas enregistré.
- Enregistrement du projet en base via **Drizzle ORM** :
  - génération d’un **slug** propre à partir du titre
  - association à une promo et à un projet Ada
  - `publishedAt` laissé vide par défaut → projet **non publié** tant qu’il n’est pas validé.

> 🧠 L’idée est que les projets puissent être proposés librement, mais qu’ils ne soient visibles publiquement qu’une fois **publiés**.

---

## 🧱 Stack technique

- **Framework fullstack** : [Next.js (App Router)](https://nextjs.org/)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **UI / CSS** : [Tailwind CSS](https://tailwindcss.com/)
- **ORM** : [Drizzle ORM](https://orm.drizzle.team/)
- **Base de données** : [Neon (PostgreSQL serverless)](https://neon.tech/)
- **Déploiement** : [Vercel](https://vercel.com/) (prévu / en cours)

---

## 🗃️ Modélisation de la base de données

La base de données suit l’énoncé officiel du projet Adaverse.

### Table `ada_projects` (projets du programme Ada)

Contient les différents **types de projets** du programme Ada (AdaQuiz, AdaCheckEvent, Adaopte, etc.).

Champs typiques :

- `id` – identifiant unique
- `name` – nom du projet Ada (ex. `"AdaQuiz"`)
- (optionnel) `description`, `stack`, `theme`, etc.

### Table `promos` (promotions Ada)

Contient les **promotions d’apprenant·e·s**.

- `id` – identifiant unique
- `name` – nom de la promo (ex. `"Frida"`)
- `start_date` – date de début de la promo

### Table `projects` (projets des apprenant·e·s)

Représente les projets étudiants.

- `id`
- `title`
- `slug`
- `urlGitHub`
- `urlDemo`
- `urlImage` (vignette / thumbnail optionnelle)
- `createdAt` – date de création (projet proposé)
- `publishedAt` – date de publication (null = projet non publié)
- `promoId` – clé étrangère vers `promos`
- `categoryId` – clé étrangère vers `ada_projects`


