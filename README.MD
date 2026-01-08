# Finech – Financial APIs Frontend

This repository contains the frontend implementation of the **Finech – Financial APIs** landing page, built as part of an assignment to convert a provided Figma design into a functional, responsive web application.

The project closely follows the given design while using modern frontend best practices with **Next.js**, **React**, and **Tailwind CSS**.

---

##  Tech Stack

- **Framework:** Next.js (App Router, latest stable version)
- **Language:** TypeScript
- **UI Library:** React.js
- **Styling:** Tailwind CSS
- **Package Manager:** npm
- **Version Control:** Git
- **Repository Hosting:** GitHub


---

##  Project Structure

```
finech-frontend
├── public
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components
│       ├── ui
│       │   └── Button.tsx
│       ├── Container.tsx
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── IndustrySolutions.tsx
│       ├── DeveloperTools.tsx
│       ├── EnterpriseSecurity.tsx
│       ├── Testimonials.tsx
│       ├── Pricing.tsx
│       ├── FinalCTA.tsx
│       └── Footer.tsx
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---


##  Key Components

- **Header** – Navigation bar with CTA
- **Hero** – Main landing section with headline and call-to-actions
- **Features** – Core product value propositions
- **IndustrySolutions** – Industry-based use cases
- **DeveloperTools** – Code snippet and developer-focused section
- **EnterpriseSecurity** – Security and compliance highlights
- **Testimonials** – Customer feedback cards
- **Pricing** – Pricing plans section
- **FinalCTA** – Call-to-action before footer
- **Footer** – Footer navigation and copyright

Reusable UI elements such as buttons are placed under `components/ui`.

---

##  Responsiveness

The application is fully responsive using Tailwind CSS responsive utilities:

- **Desktop:** Full layout as per Figma
- **Tablet:** Adjusted grid and spacing
- **Mobile:** Stacked layout, optimized typography and spacing

---

## ♿ Accessibility (Basic)

- Semantic HTML elements used where applicable
- Buttons and inputs have clear labels
- Keyboard-friendly navigation for interactive elements

---

## ▶️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/finech-frontend.git
cd finech-frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## 📝 Notes

- The UI closely matches the provided Figma design in terms of layout, spacing, typography, and colors.
- Minor deviations were made only where technically justified.
- The project focuses on frontend implementation; no backend or API integration is included.

---

## 📄 License

This project is created for evaluation purposes only.

© 2026 Finech. All rights reserved.

