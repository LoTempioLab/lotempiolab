# LoTempio Lab Website

This repository contains the static React + Vite site for the LoTempio Lab.

It uses [Vite](https://vitejs.dev/) for development and bundling, [Ant Design](https://ant.design/) for UI components, and [React Router](https://reactrouter.com/) for navigation.

The site is deployed via GitHub Pages at https://hadleyking.github.io/lotempiolab/

## 1. Prerequisites

You’ll need:
- macOS with a terminal (zsh or bash)
- Node.js ≥ 18 (includes npm)
- Git installed (xcode-select --install or brew install git)

Verify installs:
  
    node -v
    npm -v
    git --version

## 2. Clone the repository
    git clone https://github.com/hadleyking/lotempiolab.git
    cd lotempiolab

## 📦 3. Install dependencies
npm install

## 4. Run locally (development mode)

Start the Vite dev server:

    npm run dev


Then open the local preview (usually): http://localhost:5173/

The dev server reloads automatically when you save changes.

## 5. Editing the site
|What you want to edit	  | File or folder| 
|-------------------------|---------------|
|Main structure (routing) | src/App.jsx |
|Header & footer          | src/components/SiteHeader.jsx, SiteFooter.jsx|
|Pages                    | src/pages/|
|Images                   | src/assets/images/|
|Global styles	          | src/App.css or src/index.css|
|Page-specific styles	  | Each page’s .css file|

## 6. Build for production
When you’re ready to publish:

    npm run build

This outputs a static site in the dist/ folder.

You can preview the production build locally:

    npm run preview

## 7. Deploy to GitHub Pages

This project uses gh-pages for automated deployment.

Commit any changes first:

    git add .
    git commit -m "Update site content"
    git push

Then deploy:

    npm run deploy


That builds the site and pushes `dist/` to the `gh-pages` branch.
Your live site updates in about 1–2 minutes at https://hadleyking.github.io/lotempiolab/

## 8. Troubleshooting
|Problem | Likely Cause | Fix|
|-|-|-|
|Clicking links breaks site | Missing basename in Router or wrong base in vite.config.js | Ensure basename="/lotempiolab" and base: '/lotempiolab/'
|Blank screen after deploy | Incorrect base path | Same as above|
|CSS or images missing | Relative import issue | Use import ... from "../assets/...";|
|404 when refreshing | Normal on GitHub Pages if mis-configured | Ensure Router basename and Vite base set correctly| 

## 9. Update workflow (summary)

```shell
# edit files in src/
npm run dev              # preview changes live
git add .
git commit -m "Some update"
git push                 # save to main branch
npm run deploy           # rebuild and publish to GitHub Pages
```

## 10. File structure
```shell 
lotempiolab/
├── public/
│   └── CNAME              # optional custom domain
├── src/
│   ├── assets/images/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── vite.config.js
├── package.json
└── README.md
```