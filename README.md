# Professional Developer Portfolio 🚀

A modern, multi-page personal developer portfolio built with **React 18**, **React Router v6**, **Vite**, and **Tailwind CSS v4**.

## ✨ Key Features & Requirements Met

### 1. Core Stack
- **Vite** for lightning-fast build and development.
- **React 18** for component-based UI.
- **React Router v6** for seamless multi-page SPA navigation (`/`, `/about`, `/projects`, `/contact`).
- **Tailwind CSS v4** for utility-first styling.

### 2. HTML Structure (Home Page)
- **Hero Section**: Profile photo with glow effect, "Fullstack Developer - Jakarta" subtitle, and Gradient CTA buttons.
- **Skills Section**: Grid layout displaying core tech stack (React, Laravel, JS, CSS, Git, VSCode).
- **Projects Preview**: 3 featured project cards utilizing a reusable `<ProjectCard />` component.

### 3. Hooks Implementation
- **`useState`**: 
  - Managed mobile hamburger menu toggle state (`Navbar.jsx`).
  - Controlled contact form inputs and submission state (`Contact.jsx`).
  - Managed the global `theme` state (dark/light mode) (`App.jsx`).
- **`useEffect`**:
  - Dynamically updated document title (`document.title`) per page.
  - Implemented **smooth scroll to top** on every route change (`App.jsx`).
  - Synchronized the `dark` class on the HTML root element for theme toggling.
- **`useLocation`**: 
  - Detected active routes to highlight the active navigation link (`Navbar.jsx`).

### 4. CSS Features (Tailwind CSS)
- **Glassmorphism**: Applied `backdrop-blur-md` and `bg-white/80` (or `bg-gray-900/80` in dark mode) to create a premium frosted glass effect on the sticky Navbar.
- **Animations & Transitions**: Extensively used `hover:-translate-y-2`, `hover:scale-105`, and `transition-all duration-300` on buttons and cards for interactive micro-animations.
- **Gradient Typography**: Utilized `bg-gradient-to-r from-gray-900 to-blue-500 bg-clip-text text-transparent` for stunning section headings.
- **Responsive Design**: Employed mobile-first principles with breakpoints (`md:grid-cols-2`, `lg:grid-cols-3`) ensuring perfect layouts across smartphones, tablets, and desktops.

## 📂 Project Structure
```text
src/
├── components/
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   └── ProjectCard.jsx
├── pages/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   └── Projects.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## 🛠️ How to Run Locally

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## 🌐 Deployment (Vercel)
This project is configured for Vercel deployment with SPA routing support via `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
