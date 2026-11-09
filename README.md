# Priyanshu Dhaka — Personal Portfolio Website

**Professional Identity:** Full-stack Developer & AI Engineer  
**Tagline:** *I build scalable web applications and AI-powered experiences.*

A warm-cream, editorial, studio-grade personal portfolio website engineered with **React**, **JavaScript (ES6+)**, **Tailwind CSS**, and **Framer Motion**. Designed to attract international freelance clients, showcase full-stack and AI engineering architecture, and convert remote job opportunities.

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Installation Commands](#2-installation-commands)
3. [Running the Development Server](#3-running-the-development-server)
4. [Building for Production](#4-building-for-production)
5. [Configuring Environment Variables](#5-configuring-environment-variables)
6. [Customizing Projects, Social Links & Personal Information](#6-customizing-projects-social-links--personal-information)
7. [Replacing the Resume PDF Placeholder](#7-replacing-the-resume-pdf-placeholder)
8. [Deployment Guide](#8-deployment-guide)
9. [Project Structure](#9-project-structure)

---

## 1. Prerequisites

Ensure the following tools are installed on your system before starting:

- **Node.js**: `v18.0.0` or higher (recommended LTS `v18` or `v20`)
- **npm**: `v9.0.0` or higher (comes bundled with Node.js), or `pnpm` / `yarn`

Verify your local versions:

```bash
node -v
npm -v
```

---

## 2. Installation Commands

Extract the project ZIP archive and install dependencies from the project root directory:

```bash
cd priyanshu-dhaka-portfolio
npm install
```

---

## 3. Running the Development Server

Start the local Vite development server with hot module replacement (HMR):

```bash
npm run dev
```

- The development server will launch at `http://localhost:5173`.
- Edits to any file inside `src/` will automatically reload in the browser.

---

## 4. Building for Production

Compile, bundle, and minify the production assets into the `dist/` directory:

```bash
npm run build
```

To test the production build locally before deploying:

```bash
npm run preview
```

---

## 5. Configuring Environment Variables

1. Copy the included `.env.example` template to `.env.local`:

```bash
cp .env.example .env.local
```

2. Open `.env.local` and configure any optional variables:

| Variable | Description | Default / Fallback |
| :--- | :--- | :--- |
| `VITE_CONTACT_ENDPOINT` | Optional webhook/form endpoint URL (e.g., Formspree `https://formspree.io/f/your_id` or custom Express API endpoint) for direct server-side form submission. | Client-side validation + formatted `mailto:` / clipboard handoff |
| `VITE_CONTACT_EMAIL` | Optional override for your primary contact email address. | Configured in `src/data/portfolioData.js` |
| `VITE_SITE_URL` | Canonical production URL for SEO and sitemap references. | `https://priyanshudhaka.example.com` |

> **Security Note:** Never store private secret keys (such as raw OpenAI/Anthropic secret keys or Razorpay secret keys) in `VITE_*` frontend variables. All frontend environment variables are embedded at build time.

---

## 6. Customizing Projects, Social Links & Personal Information

All website copy, skills, projects, services, and social links are centralized in a single file so you never have to hunt through UI components:

- **File Location:** `src/data/portfolioData.js`

### What to Update Before Publishing:

1. **Personal Email & Location (`portfolioData.personal`)**:
   - Replace `email: 'hello.priyanshudhaka@example.com'` with your real email address.
2. **About Me Bio (`portfolioData.about.paragraphs`)**:
   - Edit or expand the introduction paragraphs to reflect your personal story and preferences.
3. **Featured Project Links (`portfolioData.projects.items`)**:
   - Replace `liveDemoUrl` and `githubRepoUrl` placeholders on each of the 3 featured project showcases (`MERN Stack Ecommerce Application`, `AI-Powered Applications`, and `SaaS Applications`) with your real deployed URLs and GitHub repositories.
4. **Social Profiles (`portfolioData.contact.socials`)**:
   - Update the `url` and `handle` fields for **GitHub**, **LinkedIn**, and **X / Twitter**.
5. **SEO Canonical Domain (`index.html`, `public/robots.txt`, `public/sitemap.xml`)**:
   - Replace `https://priyanshudhaka.example.com` with your custom domain name.

---

## 7. Replacing the Resume PDF Placeholder

In strict compliance with portfolio authenticity standards, no fake resume with invented employment history or degrees was generated. Instead, a clearly documented placeholder PDF is located at:

```text
public/resume/Priyanshu_Dhaka_Resume_Placeholder.pdf
```

### How to Replace It:
1. Export your official resume as a PDF file (e.g., `Priyanshu_Dhaka_Resume.pdf`).
2. Place it inside `public/resume/Priyanshu_Dhaka_Resume.pdf`.
3. Update `resume.fileUrl` and `resume.fileName` in `src/data/portfolioData.js`.

---

## 8. Deployment Guide

This project outputs a standard static bundle in `dist/` and can be deployed in under two minutes to any modern hosting platform:

### Option A: Vercel (Recommended)
1. Push your repository to GitHub/GitLab.
2. Import the project in Vercel.
3. Framework Preset: **Vite** | Build Command: `npm run build` | Output Directory: `dist`.
4. Add any environment variables from `.env.example` and click **Deploy**.

### Option B: Netlify
1. Connect your repository in Netlify or drag-and-drop the `dist/` folder after running `npm run build`.
2. Build Command: `npm run build` | Publish Directory: `dist`.

### Option C: Cloudflare Pages / GitHub Pages / Docker NGINX
- Run `npm run build` and serve the static `dist/` directory from any CDN or container.

---

## 9. Project Structure

```text
priyanshu-dhaka-portfolio/
├── public/
│   ├── resume/
│   │   └── Priyanshu_Dhaka_Resume_Placeholder.pdf
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── HeroVisual.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── ResumeBanner.jsx
│   │   ├── Services.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── hooks/
│   │   └── useReducedMotion.js
│   ├── utils/
│   │   └── motionVariants.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```
