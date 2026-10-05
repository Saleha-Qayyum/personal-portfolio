# Saleha Qayyum — Personal Portfolio

A responsive, single-page personal portfolio website for **Saleha Qayyum**, a Frontend Developer.

**Live demo:** _deploy to get your URL_

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI framework |
| **Vite 8** | Build tool & dev server |
| **Tailwind CSS 3** | Utility-first styling |
| **GSAP + ScrollTrigger** | Scroll & entrance animations |
| **EmailJS** | Contact form delivery |

---

## Design System

| Token | Value |
|---|---|
| Cream background | `#F3EDE4` |
| Near-black | `#0E0E0E` |
| Gold accent | `#C9A36B` |
| Serif heading font | Cormorant Garamond |
| Body font | Jost |

---

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm 9+

### Install & Run

```bash
# 1. Clone or download the project
cd "personal portfolio"

# 2. Install dependencies
npm install

# 3. Start the dev server (opens at http://localhost:5173)
npm run dev
```

---

## Connecting the Contact Form (EmailJS)

1. Sign up free at [emailjs.com](https://www.emailjs.com/)
2. Create a **Service** (e.g. Gmail) → copy the **Service ID**
3. Create an **Email Template** → copy the **Template ID**
4. Copy your **Public Key** from Account → API Keys
5. Open [`src/components/Contact.jsx`](./src/components/Contact.jsx) and replace the three placeholder constants at the top of the file:

```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'   // ← paste here
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // ← paste here
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'   // ← paste here
```

> Your template variables should be: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{to_name}}`

---

## Adding Your University & Year

Open [`src/components/About.jsx`](./src/components/About.jsx) and find the education card — replace the two placeholder comments:

```jsx
{/* PLACEHOLDER: Replace with your university name */}
[Your University Name] · [Year]
```

---

## Replacing the Photo

The portfolio uses `src/assets/saleha2.jpg`.  
To update: replace that file (keep the same name) or update the import in [`Hero.jsx`](./src/components/Hero.jsx).

---

## Extending Projects

Projects live in an array at the top of [`src/components/Projects.jsx`](./src/components/Projects.jsx).  
Each project has:

```js
{
  id: 6,
  title: 'My New Project',
  description: 'Short description...',
  tags: ['React', 'Node.js'],
  githubUrl: 'https://github.com/...',
  liveUrl: 'https://...',    // optional — show Live Demo button
  screenshot: null,           // optional — future feature
}
```

---

## Deploying

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new).

### Netlify

```bash
# Build first
npm run build

# Drag & drop the 'dist' folder at netlify.com/drop
```

Or connect your GitHub repo in the Netlify dashboard with build command `npm run build` and publish directory `dist`.

---

## Project Structure

```
src/
├── assets/
│   └── saleha2.jpg          # Your photo
├── components/
│   ├── Navbar.jsx            # Sticky nav, hamburger, active tracking
│   ├── Hero.jsx              # Landing, rotating badge, CTA buttons
│   ├── About.jsx             # Bio, education card, approach
│   ├── Projects.jsx          # Project grid with GitHub links
│   ├── Skills.jsx            # Skill cards with Devicon logos
│   ├── Contact.jsx           # EmailJS form + contact info
│   └── Footer.jsx            # Copyright & social links
├── App.jsx                   # Root with IntersectionObserver
├── main.jsx                  # React entry point
└── index.css                 # Global styles + Tailwind directives
```

---

© 2026 Saleha Qayyum
