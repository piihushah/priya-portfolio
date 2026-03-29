# Priya Shah - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing frontend development expertise with a focus on performance, reusable UI components, and beautiful web experiences.

## 🚀 Features

- **Responsive Design** - Mobile-first approach that works seamlessly on all devices
- **Dark Mode Support** - Dynamic theme switching between light and dark modes
- **Component Library** - Reusable, well-designed UI components (Badge, Button, ThemeToggle, and more)
- **Projects Showcase** - Display of featured projects with detailed information
- **Contact Section** - Easy-to-use contact links (Email, LinkedIn, GitHub)
- **Performance Optimized** - Built with Vite for fast development and production builds
- **Modern Styling** - Tailwind CSS utility-first approach with custom CSS variables for theming

## 🛠️ Tech Stack

- **Frontend Framework**: React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + CSS Variables
- **Icons**: React Icons
- **Linting**: ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Base/           # Base components (Badge, Button, ThemeToggle)
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── MenuLinks.jsx
│   ├── Navbar.jsx
│   ├── Projects.jsx
│   └── ProjectCard.jsx
├── pages/              # Page components
│   └── component-library.jsx
├── data/               # Data files and configuration
│   ├── component-library.mdx
│   ├── menu.ts
│   └── projects.ts
├── style.css           # Global styles with CSS variables
├── App.jsx
└── main.jsx
```

## 🎨 Color Scheme

The portfolio uses a dynamic color system with light and dark mode support:

- **Light Mode**: Clean, professional colors with high contrast
- **Dark Mode**: Eye-friendly dark theme optimized for extended viewing

Colors are defined as CSS variables in [style.css](src/style.css) for easy customization.

## 📦 Setup & Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/piihushah/my-first-app.git
cd my-first-app
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Building

To build for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🔍 Customization

### Update Contact Information

Edit the contact links in [Contact.jsx](src/components/Contact.jsx) with your email, LinkedIn, and GitHub URLs.

### Update Projects

Modify the projects list in [projects.ts](src/data/projects.ts) to showcase your work.

### Update Menu Items

Customize navigation links in [menu.ts](src/data/menu.ts).

### Change Colors

Edit CSS variables in [style.css](src/style.css) under `:root` (light mode) and `.dark` (dark mode) selectors.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Priya Shah** - Frontend Developer

- Email: your@email.com
- LinkedIn: [linkedin.com/in/your-linkedin](https://www.linkedin.com/in/priya-shah-024723144/)
- GitHub: [github.com/your-github](https://github.com/piihushah)
- Location: Perth, WA
