# Aal The Best — Website

Live site: **aalthebest.com**
GitHub repo: **github.com/Aalthebest/AalthebestWebsite**

---

## What is this?

This is the source code for the Aal The Best website. It is built with Astro and hosted for free on GitHub Pages. Every time changes are pushed to GitHub, the live site updates automatically within ~2 minutes.

---

## First-Time Setup (do this once on a new computer)

### 1. Install Node.js
1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS** version
3. Run the installer (keep all defaults)
4. Open a terminal and confirm it worked: `node --version`

### 2. Install Git
1. Go to [https://git-scm.com/downloads](https://git-scm.com/downloads)
2. Download and install (keep all defaults)
3. Open a terminal and confirm it worked: `git --version`

### 3. Download the project from GitHub
Open a terminal and run:
```
git clone https://github.com/Aalthebest/AalthebestWebsite.git
cd AalthebestWebsite
npm install
```

### 4. Configure Git with your identity
```
git config --global user.email "eirikmb@outlook.com"
git config --global user.name "Aalthebest"
```

---

## Making Changes

### Recommended: use Claude Code
1. Open Claude Code (claude.ai/code) in the project folder
2. Tell Claude what you want changed in plain language
3. Claude will edit the files directly

### Or edit files manually
| What you want to change | File to edit |
|---|---|
| Home page | `src/pages/index.astro` |
| Products page | `src/pages/products.astro` |
| About Us page | `src/pages/about.astro` |
| Contact page | `src/pages/contact.astro` |
| Navigation bar | `src/components/Nav.astro` |
| Footer | `src/components/Footer.astro` |
| Age gate | `src/components/AgeGate.astro` |

### Preview changes locally before publishing
```
npm run dev
```
Then open **http://localhost:4321** in your browser. The site refreshes live as you save files.

---

## Publishing Changes to the Live Site

After making changes, run these three commands in the terminal:

```
git add .
git commit -m "describe what you changed"
git push
```

The live site at **aalthebest.com** will update automatically within ~2 minutes.

To check the deployment status, go to the **Actions** tab on GitHub.

---

## Logging in to GitHub

- URL: [https://github.com/Aalthebest](https://github.com/Aalthebest)
- When pushing changes, use your GitHub username and a **Personal Access Token** as the password (not your regular GitHub password)
- To create a token: GitHub → profile picture → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token → tick **repo** → copy the token

---

## Project Structure

```
/
├── public/                  ← images, logos, brand assets
│   ├── logo/
│   ├── Glenturret/
│   ├── Hetman/
│   └── Bakgrunner/
├── src/
│   ├── components/
│   │   ├── AgeGate.astro    ← age verification popup
│   │   ├── Nav.astro        ← navigation bar
│   │   └── Footer.astro     ← footer
│   ├── layouts/
│   │   └── Layout.astro     ← shared page wrapper
│   └── pages/
│       ├── index.astro      ← home page
│       ├── products.astro   ← products page
│       ├── about.astro      ← about us page
│       └── contact.astro    ← contact page
├── .github/workflows/
│   └── deploy.yml           ← auto-deploy to GitHub Pages
├── astro.config.mjs
└── tailwind.config.cjs
```

---

## Tech Stack

- **Astro 5** — static site framework
- **Tailwind CSS 3** — styling
- **GitHub Pages** — free hosting
- **GitHub Actions** — automatic deployment
