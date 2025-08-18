# PI Management Agency Website - React Version

A modern, responsive React application for PI Management Sdn Bhd, a professional manpower solutions company in Malaysia.

## ✨ Features

- **Clean URLs**: Professional URLs without `.html` extensions (e.g., `/about`, `/services`)
- **React Router**: Client-side routing for smooth navigation
- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern Design**: Clean, professional design with smooth animations
- **SEO Optimized**: Proper meta tags and page titles
- **Performance Optimized**: Consolidated CSS and optimized components

## 🚀 Quick Start

### Development
```bash
npm install
npm start
```
Visit: `http://localhost:3000`

### Production Build
```bash
npm run build
```

## 📁 Project Structure

```
agency-react/
├── public/
│   ├── images/          # Static images
│   ├── index.html       # HTML template
│   └── vercel.json      # Vercel configuration
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.tsx   # Navigation header
│   │   └── Footer.tsx   # Footer component
│   ├── pages/           # Page components
│   │   ├── Home.tsx     # Homepage
│   │   ├── About.tsx    # About page
│   │   ├── Services.tsx # Services page
│   │   ├── Recruitment.tsx # Recruitment page
│   │   ├── Pricing.tsx  # Pricing page
│   │   └── Contact.tsx  # Contact page
│   ├── styles/
│   │   └── global.css   # Consolidated styles
│   └── App.tsx          # Main app component
└── vercel.json          # Vercel deployment config
```

## 🌐 Deployment to Vercel

### Method 1: Vercel CLI (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel` (for preview) or `vercel --prod` (for production)

### Method 2: GitHub Integration
1. Push code to GitHub repository
2. Connect repository to Vercel dashboard
3. Auto-deploys on every push to main branch

### Method 3: Drag & Drop
1. Run `npm run build`
2. Drag the `build` folder to Vercel dashboard

## 🔧 Configuration

### Clean URLs
The `vercel.json` file ensures all routes redirect to `index.html`, enabling clean URLs:

```json
{
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### Custom Domain
1. In Vercel dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## 📱 Pages

- **Home** (`/`) - Company overview with services and contact info
- **About** (`/about`) - Company history, team, and values
- **Services** (`/services`) - Detailed service offerings
- **Recruitment** (`/recruitment`) - Recruitment process and countries
- **Pricing** (`/pricing`) - Transparent pricing packages
- **Contact** (`/contact`) - Contact form and information

## 🎨 Design Features

- **Professional Color Scheme**: Green-based palette for trust and growth
- **Smooth Animations**: CSS animations for enhanced user experience
- **Mobile-First**: Responsive design starting from mobile devices
- **Fast Loading**: Optimized images and efficient code splitting

## 🔍 SEO & Performance

- Dynamic page titles for each route
- Meta descriptions optimized for search
- Semantic HTML structure
- Optimized images and assets
- Fast loading times with React optimization

## 🛠️ Technologies Used

- **React 18** with TypeScript
- **React Router DOM** for routing
- **CSS3** with modern features
- **Responsive Design** with mobile-first approach
- **Vercel** for deployment and hosting

## 📞 Support

For technical support or questions about the website:
- **Email**: worldaimer@yahoo.com
- **Phone**: 07-352 6408 / 07-358 1318

## 📄 License

© 2024 Agensi Pekerjaan PI Management Sdn. Bhd. All rights reserved.

---

**Deployment Status**: ✅ Ready for production deployment on Vercel with clean URLs
