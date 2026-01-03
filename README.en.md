# US1BZA - Cybersecurity Expert Portfolio

A modern, professional portfolio website for cybersecurity expert US1BZA, built with Next.js 16, React 19, and Tailwind CSS.

## Features

- 🌓 **Dark/Light Theme Toggle** - Seamless theme switching with smooth animations
- 🌍 **Bilingual Support** - English and Russian language support
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Smooth Animations** - Framer Motion powered animations throughout
- 🔒 **Secure Architecture** - Enterprise-grade security headers and CSP
- 🎨 **Modern Design** - Clean, professional cybersecurity aesthetic
- ♿ **Accessibility Compliant** - WCAG AA standards with ARIA roles
- 🚀 **Performance Optimized** - Fast loading with optimized images and code splitting

## Tech Stack

- **Framework**: Next.js 16.0.10 (App Router)
- **Runtime**: React 19.0.0
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Inter font family
- **Language**: TypeScript 5.7.2
- **Package Manager**: pnpm 8.15.1

## Project Structure

```
├── app/
│   ├── about/page.tsx          # About page
│   ├── certifications/page.tsx # Professional certifications
│   ├── projects/page.tsx       # Projects showcase
│   ├── social/page.tsx         # Social media links
│   ├── gratitude/page.tsx      # Acknowledgements
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page
│   ├── robots.ts               # SEO robots configuration
│   ├── sitemap.ts              # Dynamic sitemap generation
│   └── globals.css             # Global styles
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── header.tsx              # Scrolling marquee header
│   ├── navigation.tsx          # Main navigation
│   ├── theme-provider.tsx      # Theme context with persistence
│   ├── theme-toggle.tsx        # Theme switcher
│   ├── language-provider.tsx   # Language context with translations
│   ├── language-toggle.tsx     # Language switcher
│   ├── music-player.tsx        # Optional YouTube player (opt-in)
│   └── footer.tsx              # Footer with Islamic message
└── public/
    └── us1bza-avatar.png       # US1BZA avatar
```

## Pages

### Home (`/`)
- Hero section with animated US1BZA branding
- Professional tagline and call-to-action buttons
- Animated background elements

### About (`/about`)
- Profile information with 13+ years experience
- Comprehensive skills showcase with tabbed interface
- Language proficiencies (Turkish, Russian, English)

### Projects (`/projects`)
- Featured custom Linux distributions
- Security tools and applications
- Technology stack badges
- GitHub integration for open source projects

### Social Media (`/social`)
- Development platforms (GitHub, GitLab, Gitee)
- Secure communication channels (Telegram, Discord, Matrix)
- Professional networks and technical forums
- Security research communities

### Certifications (`/certifications`)
- Industry certifications (OSCP, CISSP, CEH, CKA, etc.)
- Chronological certification timeline (2016-2025)
- Official certification descriptions
- Privacy-focused credential display

### Gratitude (`/gratitude`)
- Acknowledgements to security researchers
- Recognition of technical communities
- Spiritual guides and Islamic scholars

## Key Features

### Security Architecture
- Strict Content Security Policy (CSP) without unsafe-eval
- HTTP Strict Transport Security (HSTS) with preload
- X-Frame-Options: DENY for clickjacking protection
- Referrer-Policy and Permissions-Policy configured
- Cross-Origin-Opener-Policy (COOP) and Cross-Origin-Resource-Policy (CORP)
- Deterministic dependency management with pnpm lockfile
- Automated security audits in CI/CD pipeline

### Theme System
- Dark mode (default): Black backgrounds with white text
- Light mode: White backgrounds with black text
- Smooth CSS transitions between themes
- localStorage persistence across sessions

### Internationalization
- English and Russian language support
- Context-based translation system
- Language toggle in navigation
- Localized content for all pages with complete translations

### Music Player (Opt-in)
- User consent required before loading YouTube API
- Privacy notice for third-party content
- Error handling with retry logic
- Fully contained and removable feature

### Animations
- Page transitions with Framer Motion
- Scroll-triggered animations
- Hover effects on interactive elements
- Loading states and micro-interactions

## Installation & Setup

### Prerequisites
- Node.js 20+ 
- pnpm 8.15.1+ (recommended) or npm

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/us1bza/portfolio.git
   cd portfolio
   ```

2. **Install dependencies (deterministic)**
   ```bash
   pnpm install --frozen-lockfile
   ```

3. **Run type check**
   ```bash
   pnpm type-check
   ```

4. **Run development server**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

5. **Build for production**
   ```bash
   pnpm build
   pnpm start
   ```

## Development

### Code Quality
```bash
# Type checking
pnpm type-check

# Linting
pnpm lint

# Security audit
pnpm audit --audit-level=moderate

# Full build
pnpm build
```

### Customization

#### Adding New Languages
1. Update the `Language` type in `components/language-provider.tsx`
2. Add translations to the `translations` object
3. Update the language toggle component

#### Modifying Theme Colors
1. Edit CSS variables in `app/globals.css`
2. Update Tailwind config in `tailwind.config.ts`
3. Adjust component styles as needed

#### Adding New Projects
1. Update the `projects` array in `app/projects/page.tsx`
2. Add project data to language translations
3. Include appropriate icons and descriptions

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

### Manual Deployment
The application works on any platform supporting Next.js:
- **Vercel** (recommended - zero config)
- **Netlify**
- **AWS Amplify**
- **Self-hosted** with Node.js

### Environment Variables
No environment variables required for basic functionality.

Optional:
- `NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL` - Development OAuth redirect (if using auth)

## Performance Optimizations

- Next.js 16 optimizations with Turbopack
- Image optimization with unoptimized flag for static hosting
- Code splitting with dynamic imports
- Minimal bundle size with Tailwind CSS
- Lazy loading for non-critical components
- Font optimization with Next.js font system
- Static generation for maximum performance

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles throughout
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios (WCAG AA compliant)
- Focus indicators for interactive elements
- Skip links for navigation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Security

See [SECURITY.md](.github/SECURITY.md) for security policy and vulnerability reporting.

Key security measures:
- CSP without unsafe-eval
- HSTS with preload
- Deterministic dependency lockfile
- Automated security audits
- Type-safe codebase
- Regular dependency updates

## CI/CD

GitHub Actions workflow includes:
- TypeScript type checking
- ESLint linting
- Security audit (pnpm audit)
- Production build verification

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

**US1BZA** - Cybersecurity Expert & Linux Systems Architect

- Email: us1bza@proton.me
- GitHub: [@us1bza](https://github.com/us1bza)
- Username on most platforms: `us1bza`

For secure communication, use ProtonMail or encrypted messaging platforms listed in the Social section.

---

**Built with security and privacy in mind.**
