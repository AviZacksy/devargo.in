# Dev Agro Enterprises Website

A professional website for Dev Agro Enterprises - Leading agricultural seeds & pesticides master distributor.

## Features

- 🌾 **Home Page**: Hero section with company introduction and partner showcase
- 📖 **About Us**: Company story, mission, vision, and values
- 🤝 **Our Partners**: Seed and pesticide company partnerships
- 📝 **Dealership Application**: Complete registration form for dealers
- 📞 **Contact Us**: Contact form, business information, and FAQ

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel/Netlify ready

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AviZacksy/devargo.in.git
cd devargo.in
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically with zero configuration

### Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About Us page
│   ├── contact/        # Contact page
│   ├── dealership/     # Dealership application
│   ├── partners/       # Partners page
│   └── page.tsx        # Home page
├── components/         # Reusable components
│   ├── Navigation.tsx  # Navigation bar
│   └── Footer.tsx      # Footer component
└── public/            # Static assets
    └── logo.jpg       # Company logo
```

## Customization

- Update contact information in `/src/app/contact/page.tsx`
- Modify partner information in `/src/app/partners/page.tsx`
- Customize company details in `/src/app/about/page.tsx`
- Replace placeholder content with actual business information

## License

© 2024 Dev Agro Enterprises. All rights reserved.
