# Priyal Dance Studio - Classical Dance Portfolio

A modern, elegant, fully responsive classical dance portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Dark Glassmorphism Theme** - Beautiful glassmorphic design with custom colors
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🎭 **Auto-sliding Hero Carousel** - Fullscreen carousel with smooth animations
- 🖼️ **Interactive Gallery** - Responsive grid with hover effects and modal popups
- 📧 **EmailJS Integration** - Contact form sends emails without backend
- ✨ **Smooth Animations** - Powered by Framer Motion
- 🎯 **Fixed Navigation** - Left sidebar on desktop, mobile-friendly overlay

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **EmailJS** - Email service integration

## Color Scheme

- Background: `#1e0638`
- Accent: `#bc5eff`
- Text: `#ffd8c6`

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up images:
   - Move your images folder to `public/images/` (or create `public/images/` and copy images there)
   - Images will be accessible at `/images/filename.jpg`

3. Configure EmailJS:
   - Update `src/config/emailjs.js` with your EmailJS credentials
   - See EmailJS Setup section below for details

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## EmailJS Setup

1. **Sign up** at [EmailJS](https://www.emailjs.com/)

2. **Create an Email Service:**
   - Go to Email Services
   - Add a new service (Gmail recommended)
   - Follow the setup instructions

3. **Create an Email Template:**
   - Go to Email Templates
   - Create a new template
   - Set "To Email" field to: `{{to_email}}`
   - Set "Reply To" field to: `{{from_email}}`
   - Set "Subject" to: `New Interest Form Submission - {{from_name}}`
   - Use these variables in your email body:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{phone}}` - Phone number
     - `{{whatsapp}}` - WhatsApp number
     - `{{city_country}}` - City/Country
     - `{{interest}}` - Interest selection
     - `{{message}}` - Message content
     - `{{submission_date}}` - Date and time

4. **Get Your Keys:**
   - Service ID: Found in Email Services
   - Template ID: Found in Email Templates
   - Public Key: Found in Account → API Keys

5. **Update `src/config/emailjs.js`:**
   ```javascript
   export const emailjsConfig = {
     serviceId: 'your_service_id',
     templateId: 'your_template_id',
     publicKey: 'your_public_key',
     recipientEmail: 'your-email@gmail.com',
   }
   ```

## Building for Production

```bash
npm run build
```

The built files will be in the `docs` directory (Vite is configured to build into `docs/` so GitHub Pages can serve directly from the `main` branch).

## Deployment to GitHub Pages

You can publish this site using GitHub Pages from the `main` branch (`/docs` folder):

1. Run the build:
```bash
npm run build
```
2. Commit the generated `docs/` folder to the `main` branch:
```bash
git add docs
git commit -m "chore: update docs (build)"
git push origin main
```
3. In your GitHub repository, go to **Settings → Pages** and set **Source** to **main branch /docs folder**.
4. Wait a minute — your site will be available at `https://<your-username>.github.io/<your-repo>/` (or your custom domain if configured).

> Note: A `.nojekyll` file has been added to `docs/` to prevent GitHub Pages from ignoring files that start with `_`.

## Deployment to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/priyal-dance-studio.git
   git push -u origin main
   ```

2. **Go to [Vercel](https://vercel.com/) and sign in**

3. **Import your project:**
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings

4. **Configure build settings:**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

5. **Add Environment Variables (if needed):**
   - Go to Project Settings → Environment Variables
   - Add any required variables (EmailJS keys are already in code, but you can use env vars if preferred)

6. **Deploy:**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `https://your-project.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

### Vercel Configuration File (Optional)

Create a `vercel.json` file in the root directory for custom configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Important Notes for Vercel Deployment

1. **No server-side code needed** - This is a static site, Vercel will serve it perfectly

2. **EmailJS works in production** - EmailJS runs client-side, so it works on Vercel without any backend

3. **Environment Variables** - If you want to use environment variables for EmailJS config:
   - Add them in Vercel Dashboard → Project Settings → Environment Variables
   - Update `src/config/emailjs.js` to use `import.meta.env.VITE_EMAILJS_SERVICE_ID` etc.

4. **Custom Domain** - After deployment, you can add a custom domain in Vercel Dashboard → Settings → Domains

5. **Automatic Deployments** - Every push to your main branch will trigger a new deployment automatically

## Project Structure

```
priyal_dance_studio/
├── public/
│   └── images/                 # Image assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed left navigation
│   │   ├── Home.jsx            # Hero carousel section
│   │   ├── About.jsx           # About section
│   │   ├── Portfolio.jsx       # Portfolio with subsections
│   │   ├── Gallery.jsx         # Image gallery with modal
│   │   ├── Awards.jsx          # Awards section
│   │   ├── Events.jsx          # Events cards
│   │   ├── Contact.jsx         # Contact information
│   │   ├── FloatingButton.jsx  # "Are You Interested?" button
│   │   ├── InterestModal.jsx   # Contact form modal
│   │   └── Footer.jsx          # Footer with social icons
│   ├── config/
│   │   └── emailjs.js          # EmailJS configuration
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  bg: '#1e0638',
  accent: '#bc5eff',
  text: '#ffd8c6',
}
```

### Content
- Edit component files in `src/components/` to update content
- Replace images in the `public/images/` folder
- Update carousel slides in `src/components/Home.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Build Errors on Vercel
- Ensure all dependencies are in `package.json`
- Check that `vite.config.js` is properly configured
- Verify Node.js version compatibility (Vercel uses Node 18 by default)

### EmailJS Not Working
- Verify EmailJS credentials in `src/config/emailjs.js`
- Check EmailJS template configuration
- Ensure "To Email" field uses `{{to_email}}` variable
- Check browser console for errors

### Images Not Loading
- Ensure images are in `public/images/` folder
- Use relative paths: `/images/filename.jpg`
- Check file names match exactly (case-sensitive)

## License

© 2025 Priyal Dance Studio • All Rights Reserved
