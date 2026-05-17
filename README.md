# Akorede — Data & Growth Analyst Portfolio

A premium, fully animated personal portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

---

## 🚀 Quick Deploy to GitHub Pages

### Step 1 — Clone / Upload to your GitHub repo

```bash
# Option A: via git
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
# Copy all portfolio files into the cloned folder
git add .
git commit -m "Initial portfolio setup"
git push origin main

# Option B: drag & drop all files into your repo on GitHub.com
```

### Step 2 — Enable GitHub Pages (GitHub Actions method — RECOMMENDED)

1. Go to your repo on GitHub
2. Click **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. Push to `main` — the `.github/workflows/deploy.yml` workflow handles the rest
5. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Step 3 — Update `vite.config.js` base path

If your repo is named anything other than `username.github.io`:

```js
// vite.config.js
export default defineConfig({
  base: '/YOUR_REPO_NAME/', // ← change this
  ...
})
```

If it IS `username.github.io`, keep `base: './'`.

---

## 🛠 Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

---

## 📦 Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## ✏️ How to Personalise

### Update your personal info

| File | What to change |
|------|----------------|
| `index.html` | SEO title, description, Open Graph tags |
| `src/components/sections/Hero.jsx` | Name, tagline, social links, stats |
| `src/components/sections/About.jsx` | Bio paragraphs |
| `src/components/layout/Navbar.jsx` | Logo initials |
| `src/components/layout/Footer.jsx` | Social links, email |
| `src/components/sections/Contact.jsx` | `CONTACT_EMAIL`, `WHATSAPP_NUM`, social handles |

### Wire up the contact form

**Option A — Formspree (easiest, free tier)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form — copy the form ID (e.g. `xpwzrvjq`)
3. In `src/components/sections/Contact.jsx`, uncomment the Formspree block and replace `YOUR_FORM_ID`

**Option B — EmailJS**
1. Sign up at [emailjs.com](https://emailjs.com)
2. Follow their React guide
3. Replace the `handleSubmit` function with their `emailjs.send()` call

---

## ➕ How to Add a New Project

Open `src/data/projects.js` and add a new object at the end of the `projects` array:

```js
{
  id: 'proj-04',                          // unique ID
  title: 'Your Project Title',
  category: 'Analytics',                  // 'Analytics' | 'Growth' | 'Dashboard' | 'Strategy'
  tags: ['Power BI', 'SQL', 'Excel'],     // shown as pills on the card
  description: 'Short summary for the card preview.',
  problem: 'What business problem did you solve?',
  solution: 'How did you approach and solve it?',
  impact: 'What was the measurable outcome?',
  metrics: [
    { label: 'Customers Analysed', value: '5K+' },
    { label: 'Revenue Identified', value: '$120K' },
  ],
  tools: ['Power BI', 'SQL Server', 'Excel'],
  image: './projects/your-screenshot.png',  // put screenshot in /public/projects/
  github: 'https://github.com/...',         // or null
  live: 'https://your-demo-link.com',       // or null
  featured: true,
},
```

That's it. Save the file — the card renders automatically. No other code changes needed.

---

## 🖼 Adding Project Screenshots

1. Add your image to `public/projects/` (e.g. `public/projects/project-name.png`)
2. Set `image: './projects/project-name.png'` in the project object
3. Recommended dimensions: **800 × 450px** (16:9), under 200KB (use [Squoosh](https://squoosh.app) to compress)

---

## 📝 How to Update Experience

Edit `src/data/experience.js`. Add new roles at the **top** of the array (most recent first):

```js
{
  id: 'exp-00',
  role: 'Senior Data Analyst',
  company: 'Company Name',
  type: 'Full-time',
  period: '2024 — Present',
  location: 'Remote',
  description: '...',
  achievements: ['...', '...'],
  tools: ['Power BI', 'Python'],
},
```

---

## 💬 How to Update Testimonials

Edit `src/data/testimonials.js`. Replace the placeholder entries with real client quotes:

```js
{
  id: 'test-01',
  quote: 'Real client quote here.',
  name: 'Client Full Name',
  role: 'Head of Marketing',
  company: 'Company Name',
  initials: 'CM',
  accent: '#00E5CC',   // '#00E5CC' | '#7C3AED' | '#F59E0B'
},
```

---

## 🎨 Design Customisation

### Colors
All design tokens live in `tailwind.config.js`. The primary accent is `#00E5CC` (teal). To change it, update every `#00E5CC` reference in `tailwind.config.js` and `src/index.css`.

### Fonts
Loaded from Google Fonts in `index.html`:
- Display/headings: **Syne**
- Body: **Outfit**

To change, update the Google Fonts `<link>` in `index.html` and the `fontFamily` in `tailwind.config.js`.

---

## 🔍 SEO

Update these in `index.html`:
- `<title>`
- `<meta name="description">`
- `<meta property="og:title">`, `og:description`, `og:image`
- `<meta name="twitter:...">` tags

---

## 📁 Project Structure

```
portfolio/
├── .github/workflows/deploy.yml   ← GitHub Actions CI/CD
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── projects/                  ← put project screenshots here
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       ├── AnimatedCounter.jsx
│   │       ├── GlowCard.jsx
│   │       ├── ProjectCard.jsx
│   │       └── SectionHeader.jsx
│   ├── data/
│   │   ├── projects.js            ← ✏️ add new projects here
│   │   ├── experience.js          ← ✏️ add new roles here
│   │   ├── skills.js
│   │   ├── services.js
│   │   └── testimonials.js        ← ✏️ add real quotes here
│   ├── utils/
│   │   └── animations.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🧰 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion | Animations |
| React Icons | Icon library |
| GitHub Actions | CI/CD deployment |

---

Built with focus and intention. Let the data speak. 📊
