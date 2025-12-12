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
- **Content**: [MDX](https://mdxjs.com) - Markdown with JSX for rich content
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics) - Privacy-friendly web analytics
- **Deployment**: [Vercel](https://vercel.com) - Edge network deployment
- **Fonts**: Inter (UI), JetBrains Mono (code)

##  Key Features

### Interactive Tools
- **ROI Calculator**: React-based tool calculating annual savings and break-even time for automation investments
- **Automation Logic Gate**: Interactive decision tree helping users determine if tasks are worth automating
- **Lead Capture**: Both tools integrate with Google Apps Script backend for lead generation and automated email reports

### Content System
- **System Logs**: 21 educational blog posts in MDX format with custom styling, Lucide icons, and dark theme
- **Product Pages**: Dedicated landing pages for "Automated Invoice" and "Smarter Work Day" packages
- **Service Pages**: Comprehensive service descriptions with code examples and pricing

### Design & UX
- **Terminal Aesthetic**: Custom dark-mode design inspired by developer environments (VS Code/Terminal)
- **Code Theming**: Syntax-highlighted code blocks using Dracula theme
- **Responsive Design**: Mobile-first approach with smooth animations
- **Brand Colors**: Orange (#FF6B35), Magenta (#E91E63), Purple (#9C27B0), Gold (#FDB713)

### Performance & SEO
- **Optimized Images**: Astro Image component with automatic WebP/AVIF conversion
- **Sitemap**: Auto-generated XML sitemap for search engines
- **Meta Tags**: Comprehensive Open Graph and Twitter Card support
- **Analytics**: Vercel Analytics with Web Vitals tracking
- **Lighthouse Ready**: Optimized for 100/100 scores

##  Project Structure

```
empower-automation/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/              # Optimized images
│   │   ├── portfolio.jpg
│   │   ├── automation-autopsy-feature.png
│   │   └── hero-background.png
│   ├── components/          # Reusable components
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── TerminalHero.astro
│   │   ├── CodePricing.astro
│   │   ├── DataPipeline.tsx
│   │   └── TypewriterText.tsx
│   ├── content/
│   │   └── system-logs/     # 21 MDX blog posts
│   ├── layouts/
│   │   └── Layout.astro     # Base layout with SEO
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   ├── contact.astro
│   │   ├── products/        # Product landing pages
│   │   ├── services/        # Service pages
│   │   └── system-logs/     # Blog system
│   └── styles/
│       └── global.css       # Tailwind imports
├── astro.config.mjs         # Astro configuration
├── tailwind.config.js       # Tailwind configuration
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

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

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

### Components
All components follow a dark-theme, terminal-inspired aesthetic with:
- Gradient borders and hover effects
- Syntax-highlighted code blocks
- Smooth transitions and animations
- Responsive grid layouts

##  Content Management

### Adding System Logs (Blog Posts)

1. Create a new `.mdx` file in `src/content/system-logs/`
2. Add frontmatter:
   ```yaml
   ---
   title: "Your Post Title"
   description: "Brief description"
   pubDate: "2025-12-01"
   tags: ["Tag1", "Tag2"]
   ---
   ```
3. Use MDX syntax with Lucide icons:
   ```jsx
   <IconCheckCircle className="w-6 h-6 text-brand-gold" />
   ```

### Updating Products/Services

Product pages are located in `src/pages/products/` and `src/pages/services/`. Each is a standalone Astro component with custom layouts.

##  Deployment

This project is configured for **Vercel** deployment:

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically on push to main branch

**Environment**: Static site (no server-side rendering)

##  SEO Features

- ✅ XML Sitemap (`/sitemap-index.xml`)
- ✅ robots.txt
- ✅ Canonical URLs
- ✅ Open Graph meta tags
- ✅ Twitter Card meta tags
- ✅ Structured data ready
- ✅ Optimized images (WebP/AVIF)
- ✅ Fast page loads (<1s)
- ✅ Prerendered static pages for max speed
- ✅ Social sharing optimized (OG Images)

##  Analytics

Vercel Analytics is integrated with:
- Page views tracking
- Web Vitals monitoring
- Privacy-friendly (no cookies)
- Real-time dashboard

##  Contributing

This is a private project for Empower Automation. For inquiries, contact [nicola@empowerdigitalsolutions.co.uk](mailto:nicola@empowerdigitalsolutions.co.uk).

##  License

All rights reserved. © 2025 Nicola Berry, Empower Automation.

##  Links

- **Website**: [empowerautomation.co.uk](https://empowerautomation.co.uk)
- **LinkedIn**: [Nicola Berry](https://linkedin.com/in/empowervaservices)

---

**Built by Nicola Berry**
