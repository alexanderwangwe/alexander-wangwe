# Alex Wangwe - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, showcasing my skills as a front End software developer.

## 🚀 Live Demo

Visit the live site: [alexwangwe.dev](https://your-domain.com)

## 🛠️ Built With

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **React 19** - Latest React features
- **Vercel** - Deployment and hosting

## ✨ Features

- 🌓 **Dark/Light Mode** - Toggle between themes with system preference detection
- 📱 **Responsive Design** - Optimized for all device sizes
- ⚡ **Performance Optimized** - Fast loading with Next.js optimizations
- 🎨 **Modern UI** - Clean, professional design
- 📧 **Contact Integration** - Easy way to get in touch
- 🔗 **Social Links** - GitHub, LinkedIn, and Strava profiles

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind config
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main homepage
└── components/
    ├── ThemeProvider.tsx # Theme context and management
    └── ThemeToggle.tsx   # Theme switcher component
```

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/alexanderwangwe/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Theme Colors

Update the color scheme in `src/app/globals.css`:

```css
:root {
  --background: #faf7f2;
  --foreground: #181818;
}

.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
}
```

### Content

Edit your personal information in `src/app/page.tsx`:

- Bio and introduction
- Work experience
- Skills and tools
- Contact information

## 📧 Contact

- **Email**: alexanderwangwe@gmail.com
- **GitHub**: [@alexanderwangwe](https://github.com/alexanderwangwe)
- **LinkedIn**: [Alexander Wangwe](https://www.linkedin.com/in/alexander-wangwe/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you found this portfolio template helpful, please give it a star!
