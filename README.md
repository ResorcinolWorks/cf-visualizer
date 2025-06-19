# 🔥 Codeforces Visualizer

<div align="center">

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20App-blue?style=for-the-badge)](https://cf-visualizer-rho.vercel.app/)
[![GitHub](https://img.shields.io/github/license/ResorcinolWorks/cf-visualizer?style=for-the-badge)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/ResorcinolWorks/cf-visualizer?style=for-the-badge)](https://github.com/ResorcinolWorks/cf-visualizer/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/ResorcinolWorks/cf-visualizer?style=for-the-badge)](https://github.com/ResorcinolWorks/cf-visualizer/network)

</div>

---

## 🚀 Live Demo

Experience the visualizer live: [**Codeforces Visualizer**](https://cf-visualizer-rho.vercel.app/)

---

## ✨ Overview

Codeforces Visualizer is a sleek, modern web application designed to help competitive programmers and enthusiasts visualize their Codeforces journey and compare their performance with others. Built with cutting-edge web technologies including **shadcn/ui** components and **magic-ui** effects, it provides comprehensive analytics and stunning visualizations of your coding progress.

**Please Note:** This is an unofficial tool and is not affiliated with or endorsed by Codeforces. It utilizes the publicly available Codeforces API.

## 🎯 Key Highlights

- ⚡ **High Performance**: Optimized with sessionStorage caching and efficient API usage
- 📱 **Fully Responsive**: Seamless experience across all devices
- 🎨 **Modern Design**: Professional black & white theme with shadcn/ui components
- ✨ **Magical Effects**: Interactive shine borders, sparkles, and cursor glow effects
- 📊 **Rich Visualizations**: Interactive charts and graphs powered by Recharts
- 🔄 **Real-time Data**: Live data fetching from Codeforces API
- 🚀 **Fast Loading**: Built with Vite for lightning-fast development and production builds
- 🎭 **Professional UI**: Clean Vercel-inspired design with Inter font

## 🌟 Features

### 👤 Individual Profile Visualization
- **📈 Rating Analysis:**
  - Current and max rating with rank information
  - Interactive rating graph to track progress over time
  - Historical rating changes with contest-wise breakdown
  
- **📊 Activity Insights:**
  - Submission heatmap showing daily coding activity (GitHub-style)
  - Problems solved distribution by rating categories
  - Language usage statistics with clean pie charts
  
- **🏆 Performance Metrics:**
  - Verdict distribution (Accepted, Wrong Answer, TLE, etc.)
  - Tag-wise problem solving analysis
  - Contest participation history and performance

### 👥 Profile Comparison
- **⚔️ Head-to-Head Analysis:**
  - Side-by-side comparison of two Codeforces handles
  - Visual comparison bars for key statistics
  - Rating progression overlay graphs
  
- **📈 Detailed Comparisons:**
  - Problems solved by rating categories
  - Tag-wise problem distribution comparison
  - Contest duel table with winner indicators (🏆)
  - Performance metrics analysis

### 🎨 Modern UI Features
- **✨ Magic Effects:**
  - Animated shine border on GitHub button
  - Sparkles animation behind main title
  - Interactive cursor glow effect
  - Smooth hover transitions and animations

- **🎯 Professional Design:**
  - Clean white cards with subtle shadows
  - Consistent black & white color scheme
  - Inter font for modern typography
  - Responsive grid layouts

- **⚡ Enhanced UX:**
  - Smart loading states with skeletons
  - Error boundaries with graceful fallbacks
  - Optimized for accessibility
  - Mobile-first responsive design

## 🛠️ Technologies Used

### Frontend Stack
- **[React 19](https://react.dev/)** - Latest React with improved performance
- **[Vite 6.3](https://vitejs.dev/)** - Next-generation frontend tooling
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Modern utility-first styling
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible components
- **[magic-ui](https://magicui.design/)** - Stunning visual effects and animations

### UI Components & Effects
- **[Recharts](https://recharts.org/)** - Powerful data visualization
- **[React Router 7](https://reactrouter.com/)** - Modern routing solution
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[React Icons](https://react-icons.github.io/react-icons/)** - Comprehensive icon library

### Development & Deployment
- **[Vercel](https://vercel.com/)** - Seamless deployment and hosting
- **[pnpm](https://pnpm.io/)** - Fast, efficient package manager
- **[ESLint](https://eslint.org/)** - Code quality and consistency
- **[PostCSS](https://postcss.org/)** - CSS processing and optimization

### Performance Optimizations
- **SessionStorage Caching** - Reduces redundant API calls
- **Component-level Loading** - Independent data fetching
- **Optimized Bundle Size** - Tree-shaking and code splitting
- **Modern Build Tools** - Vite for fast development and builds

## 📦 Installation & Local Development

### Prerequisites

Ensure you have the following installed:

- **[Node.js](https://nodejs.org/)** (v18.x or higher recommended)
- **[pnpm](https://pnpm.io/installation)** (Preferred package manager)

```bash
# Install pnpm globally if you haven't already
npm install -g pnpm
```

### 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ResorcinolWorks/cf-visualizer.git
   cd cf-visualizer
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm run dev
   ```
   
   🎉 Your app will be running at `http://localhost:5173/`

### 📝 Available Scripts

```bash
# Development
pnpm run dev          # Start development server
pnpm run build        # Build for production
pnpm run preview      # Preview production build locally
pnpm run lint         # Run ESLint for code quality
```

## 🏗️ Project Structure

```
cf-visualizer/
├── public/                     # Static assets
│   ├── favicon.svg
│   └── vite.svg
├── src/
│   ├── components/             # React components
│   │   ├── charts/            # Chart components (Recharts)
│   │   │   ├── LanguagesPie.jsx
│   │   │   ├── RatingGraph.jsx
│   │   │   ├── RatingWiseBarChart.jsx
│   │   │   ├── SubmissionHeatmap.jsx
│   │   │   ├── TagsPie.jsx
│   │   │   └── VerdictPie.jsx
│   │   ├── compare/           # Comparison components
│   │   │   ├── CompareProblemsBar.jsx
│   │   │   ├── CompareTagsBar.jsx
│   │   │   ├── ComparisonRatingGraph.jsx
│   │   │   └── ContestDuelTable.jsx
│   │   ├── magic-ui/          # Magic UI effects
│   │   │   ├── animated-grid-pattern.jsx
│   │   │   ├── cursor-glow.jsx
│   │   │   ├── dot-pattern.jsx
│   │   │   ├── shine-border.jsx
│   │   │   └── sparkles.jsx
│   │   ├── profile/           # Profile components
│   │   │   ├── FactsGrid.jsx
│   │   │   └── ProfileCard.jsx
│   │   └── ui/                # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── table.tsx
│   │       ├── ErrorMessage.jsx
│   │       ├── Footer.jsx
│   │       ├── LoadingSkeleton.jsx
│   │       ├── Navbar.jsx
│   │       └── SectionContainer.jsx
│   ├── hooks/                  # Custom React hooks
│   │   ├── useContests.js
│   │   ├── useSubmissions.js
│   │   └── useUserData.js
│   ├── lib/                    # Utility libraries
│   │   └── utils.ts           # shadcn/ui utilities
│   ├── pages/                  # Application pages
│   │   ├── CompareProfiles.jsx
│   │   ├── HomePage.jsx
│   │   └── SingleProfile.jsx
│   ├── utils/                  # Helper functions
│   │   ├── cache.js
│   │   ├── chart-formatters.js
│   │   ├── merge-utils.js
│   │   ├── profile-stats.js
│   │   └── tag-utils.js
│   ├── App.jsx                 # Main application
│   ├── index.css              # Global styles
│   ├── main.jsx               # Application entry point
│   └── routes.jsx             # Route definitions
├── components.json             # shadcn/ui config
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── vite.config.js             # Vite configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
- **Primary**: Black & White theme for professional look
- **Accents**: Electric blue (`#3b82f6`) for interactive elements
- **Charts**: Grayscale palette for consistent data visualization
- **Effects**: White shine borders and sparkle effects

### Typography
- **Font**: Inter - Modern, readable sans-serif
- **Sizes**: Responsive typography scale
- **Weights**: From light (300) to bold (700)

### Components
- **Cards**: White background with subtle borders and shadows
- **Buttons**: shadcn/ui components with custom styling
- **Charts**: Consistent black/white color schemes
- **Effects**: Subtle animations and magical touches

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**! 

### 🔄 How to Contribute

1. **🍴 Fork the Project**
2. **🌿 Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **💾 Commit your Changes**
   ```bash
   git commit -m 'feat: Add some AmazingFeature'
   ```
4. **🚀 Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **📬 Open a Pull Request**

### 📋 Contribution Guidelines

- Follow the existing code style and conventions
- Use TypeScript for new components when applicable
- Follow shadcn/ui component patterns
- Write clear, descriptive commit messages
- Test your changes thoroughly
- Update documentation if needed

### 🐛 Reporting Issues

Found a bug or have a feature request? Please [open an issue](https://github.com/ResorcinolWorks/cf-visualizer/issues) with:
- Clear description of the problem/feature
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots if applicable

## 📈 Performance Notes

This application has been optimized for performance and reliability:

- **Modern Caching**: SessionStorage for API response caching
- **Rate Limiting**: Smart submission limiting to avoid API constraints
- **Component Optimization**: Independent loading and error boundaries
- **Bundle Optimization**: Tree-shaking and modern build tools
- **Accessibility**: ARIA labels and keyboard navigation support

## 🎯 Recent Updates (v2.0)

### Major UI Redesign
- ✅ Complete shadcn/ui integration
- ✅ Modern black & white theme
- ✅ Professional Vercel-inspired design
- ✅ Magic UI effects and animations

### Technical Improvements
- ✅ Upgraded to React 19 and Vite 6
- ✅ TypeScript integration
- ✅ Improved build configuration
- ✅ Enhanced error handling

### New Features
- ✅ Shine border effects on buttons
- ✅ Sparkles animation behind titles
- ✅ Interactive cursor glow
- ✅ Contest winner indicators
- ✅ Improved responsive design

## 🙏 Acknowledgments

- **[Codeforces](https://codeforces.com/)** for providing the comprehensive API
- **[Vercel](https://vercel.com/)** for seamless deployment and hosting
- **[shadcn](https://ui.shadcn.com/)** for the beautiful component system
- **[magic-ui](https://magicui.design/)** for stunning visual effects
- The competitive programming community for inspiration and feedback

## 👨‍💻 Authors

- **Shashank Raj** - *Initial work and core development*
- **Ayush Raghuvanshi** - *Performance optimizations and enhancements*

---

<div align="center">

**⭐ Star this repository if it helped you visualize your Codeforces journey! ⭐**

Made with ❤️ for the competitive programming community

</div>
