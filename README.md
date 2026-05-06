# Aal The Best — Website

Business-to-trade information website for Aal The Best, wholesale importer of Scotch whisky and Ukrainian spirits for the Norwegian market.

---

## Before You Begin — Install Node.js

This project requires **Node.js** (version 18 or newer).

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS** version (the one that says "Recommended For Most Users")
3. Run the installer and follow the steps (keep all default options)
4. When it's done, open a new terminal/command prompt and verify it worked:
   ```
   node --version
   npm --version
   ```
   You should see version numbers printed — that means Node.js is installed.

---

## Running the Site Locally

Open a terminal in the project folder (the folder containing this README):

```bash
# 1. Install dependencies (only needed once, or after updates)
npm install

# 2. Start the development server
npm run dev
```

Then open your browser and go to **http://localhost:4321**

The site will automatically refresh in your browser whenever you save a file.

---

## Making Edits

| What you want to change | File to edit |
|---|---|
| Home page | `src/pages/index.astro` |
| Products page | `src/pages/products.astro` |
| About page | `src/pages/about.astro` |
| Contact page | `src/pages/contact.astro` |
| Navigation bar | `src/components/Nav.astro` |
| Footer | `src/components/Footer.astro` |
| Age verification gate | `src/components/AgeGate.astro` |
| Colours / fonts | `tailwind.config.cjs` |
| Site title / fonts / meta | `src/layouts/Layout.astro` |

### Things to fill in

Search the project for `[` (square bracket) — those are placeholder values you need to replace with your real information:

- `[Firmanavn AS]` → Your registered company name
- `[Gateadresse]` → Your street address
- `[Postnummer] [By]` → Your postal code and city
- `[XXX XXX XXX]` → Your organisation number (Org.nr.)
- `post@aalthebest.no` → Your actual email address

---

## Deploying to GitHub Pages

### Step 1 — Create a GitHub account

If you don't have one, go to [https://github.com](https://github.com) and sign up. Your username will be part of your site's URL.

### Step 2 — Create a new repository on GitHub

1. Log in to GitHub
2. Click the **+** button in the top-right corner → **New repository**
3. Name it `aal-the-best` (or whatever you prefer — this becomes part of your URL)
4. Set it to **Public** (required for free GitHub Pages)
5. Do **not** tick "Add a README file" (we already have one)
6. Click **Create repository**

### Step 3 — Configure the site URL in the project

Open [astro.config.mjs](astro.config.mjs) and update the two placeholders at the top:

```js
export default defineConfig({
  site: 'https://YOUR-USERNAME.github.io',   // ← replace YOUR-USERNAME
  base: '/aal-the-best',                      // ← replace aal-the-best if you chose a different repo name
  ...
});
```

Save the file.

### Step 4 — Install Git

If you don't have Git installed:

1. Go to [https://git-scm.com/downloads](https://git-scm.com/downloads)
2. Download and install (keep all default options)
3. Open a new terminal and confirm: `git --version`

### Step 5 — Push the project to GitHub

Open a terminal in your project folder and run these commands one at a time:

```bash
# Set up Git in this folder (only once)
git init
git add .
git commit -m "Initial commit"

# Connect to your GitHub repository (replace the URL with your own — copy it from GitHub)
git remote add origin https://github.com/YOUR-USERNAME/aal-the-best.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

> **Tip:** The exact URL to use is shown on GitHub right after you create the repository. It looks like `https://github.com/your-name/aal-the-best.git`

### Step 6 — Enable GitHub Pages with Actions

1. On GitHub, open your repository
2. Click **Settings** (the tab at the top)
3. In the left sidebar, click **Pages**
4. Under **Source**, change the dropdown from "Deploy from a branch" to **GitHub Actions**
5. Click **Save**

### Step 7 — Trigger a deploy

The site deploys automatically every time you push changes to GitHub. To trigger the first deployment:

1. Go to the **Actions** tab on your repository
2. If you see a workflow listed, click it and then click **Run workflow** → **Run workflow**

Or just make a small change to any file, save it, and run:

```bash
git add .
git commit -m "Trigger first deploy"
git push
```

### Step 8 — View your live site

After a minute or two, your site will be live at:

```
https://YOUR-USERNAME.github.io/aal-the-best/
```

You can see the deployment progress under the **Actions** tab on GitHub.

---

## Updating the Site After Launch

Every time you want to update the site:

1. Make your changes in the project files
2. Run in the terminal:
   ```bash
   git add .
   git commit -m "Describe what you changed"
   git push
   ```
3. GitHub will automatically rebuild and publish the updated site (takes ~1 minute)

---

## Norwegian Alcohol Law Compliance

This website is designed for compliance with the Norwegian **Alkoholloven §&nbsp;9-2** advertising prohibition:

- **Age gate** on every visit — requires visitors to confirm they are 18+ and trade professionals
- **B2B framing only** — content is factual product information for licensed trade, not consumer advertising
- **No promotional language** — no slogans, lifestyle imagery, or language encouraging consumption
- **Responsible consumption notice** — in footer on every page
- **`noindex`** meta tag — prevents search engine indexing that could expose it to general public
- **Trade confirmation checkbox** — on the contact form

**Important:** Before going live, consult with a Norwegian lawyer familiar with `alkoholloven` to confirm your specific situation. You will also need:
- A valid wholesale licence (*engrosbevillingen*) from your local municipality or Helsedirektoratet
- To ensure all product labels and documentation meet Mattilsynet requirements

---

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── AgeGate.astro
│   │   ├── Footer.astro
│   │   └── Nav.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── products.astro
│       ├── about.astro
│       └── contact.astro
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
├── package.json
├── tailwind.config.cjs
└── tsconfig.json
```

---

## Tech Stack

- **[Astro 5](https://astro.build)** — static site framework
- **[Tailwind CSS 3](https://tailwindcss.com)** — utility-first styling
- **[GitHub Pages](https://pages.github.com)** — free static hosting
- **[GitHub Actions](https://github.com/features/actions)** — automatic deployment pipeline
