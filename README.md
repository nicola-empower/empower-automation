# Empower Automation ⚡

**Custom Google Workspace Automation & Business Process Optimisation**

A modern, high-performance website for Empower Automation - a consultancy specializing in Google Apps Script development, API integrations, and workflow efficiency solutions for small businesses and solopreneurs.

##  Overview

This website showcases automation services through an interactive, developer-themed design. Built with performance and SEO in mind, it features custom tools, educational content, and productized service offerings to help businesses understand and adopt automation.

##  Tech Stack

- **Framework**: [Astro](https://astro.build) v5.16.3 - Static site generation with partial hydration
- **UI Library**: [React](https://react.dev) v19.2.0 - For interactive components
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4.1.17 - Utility-first CSS framework
- **Icons**: [Lucide React](https://lucide.dev) - Beautiful, consistent icon set
- **Backend & Database**: **Google Apps Script** (Serverless) + **Google Sheets** (NoSQL-like DB)
- **Deployment**: [Vercel](https://vercel.com) - Edge network deployment
- **Fonts**: Inter (UI), JetBrains Mono (code)

##  Key Features

### 🚀 "Wow" Factors
- **Magic Welcome**: URL-based personalization engine (e.g., `?name=Elon&company=SpaceX` rewrites the terminal hero text).
- **Live Savings Ticker**: Matrix-style top bar calculating "Total Hours Saved" for clients in real-time.
- **Terminal Aesthetic**: Custom dark-mode design inspired by developer environments (VS Code/Terminal).

### 🤖 Lead Generation & Backend
- **Unified Backend**: A single Google Apps Script handles all form submissions (Serverless & Free).
- **ROI Calculator**: React-based tool calculating annual savings and break-even time -> Data sent to Sheets -> Auto-email notification.
- **Automation Logic Gate**: Interactive decision tree quiz -> Leads captured in Sheets.
- **Contact Form**: Secure submission directly to Google Sheets with instant email alerts to admin.

### 📚 Content System
- **System Logs**: 21 educational blog posts in MDX format with custom styling, Lucide icons, and dark theme
- **Product Pages**: Dedicated landing pages for "Automated Invoice", "Web Data Extraction", and "Smarter Work Day" packages
- **Service Pages**: Comprehensive service descriptions with code examples and pricing

### 🔒 Privacy & Compliance (UK Laws)
- **Strictly No Cookies**: No analytics, trackers, or pixels.
- **GDPR Compliant**: Explicit data retention (1 year) and destruction policies.
- **Legal Protection**: Conditional software licensing (Protection against non-payment).

##  Project Structure

```
empower-automation/
├── backend/
│   └── google-apps-script.js  # The Brain: Handles all API requests & Emails
├── src/
│   ├── components/
│   │   ├── SavingsTicker.tsx  # Live counter component
│   │   ├── TerminalHero.astro # "Magic Welcome" logic
│   │   ├── Navbar.astro       # Global Nav
│   │   └── Footer.astro       # Legally Compliant Footer
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   ├── privacy.astro      # Custom "No Tracking" Policy
│   │   ├── terms.astro        # Custom Automation Terms
│   │   └── products/          # Product landing pages
│   └── content/               # MDX Blog Posts
└── package.json
```

##  Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nicola-empower/empower-automation.git
   cd empower-automation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

##  Design System

### Brand Colors
```css
--brand-orange: #FF6B35
--brand-magenta: #E91E63
--brand-purple: #9C27B0
--brand-gold: #FDB713
--brand-dark: #0d1117
```

### Typography
- **Headings**: Inter (sans-serif)
- **Body**: Inter (sans-serif)
- **Code**: JetBrains Mono (monospace)

##  SEO Features

- ✅ XML Sitemap (`/sitemap-index.xml`)
- ✅ robots.txt
- ✅ Canonical URLs
- ✅ Open Graph meta tags
- ✅ Structured data ready
- ✅ Optimized images (WebP/AVIF)
- ✅ Fast page loads (<1s)

##  Contributing

This is a private project for Empower Automation. For inquiries, contact [nicola@empowerautomation.co.uk](mailto:nicola@empowerautomation.co.uk).

##  License

All rights reserved. © 2025 Nicola Berry, Empower Automation.

##  Links

- **Website**: [empowerautomation.co.uk](https://empowerautomation.co.uk)
- **LinkedIn**: [Nicola Berry](https://linkedin.com/in/empowervaservices)

---

**Designed & Built by Empower Digital Solutions**
