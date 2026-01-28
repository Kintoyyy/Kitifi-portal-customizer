# 🎨 Kitifi Portal Customizer

A powerful, user-friendly web application for customizing captive portals with live preview. Built with React and Vite for blazing-fast performance.

![Portal Customizer](https://img.shields.io/badge/Built%20with-React%20%2B%20Vite-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Live HTML Editor** - Edit your portal's HTML structure in real-time
- **Live CSS Editor** - Modify styles with instant feedback
- **Real-time Preview** - See changes as you type with live preview panel
- **Visual Style Controls** - Easy-to-use controls for common customizations:
  - 🎨 Color pickers for primary, secondary, text, and background colors
  - 📝 Font family selector with popular web fonts
  - 📏 Font size adjustment
  - 🔘 Border radius controls for buttons and inputs
  - 📐 Layout spacing controls (padding and margins)
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Beginner-Friendly** - Clean, intuitive interface with helpful labels
- **Advanced Customization** - Direct code editing for power users

## 🚀 Live Demo

Visit the live application: [Kitifi Portal Customizer](https://kintoyyy.github.io/Kitifi-portal-customizer/)

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/Kintoyyy/Kitifi-portal-customizer.git
cd Kitifi-portal-customizer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages (requires gh-pages setup)

## 📖 Usage

### Quick Start

1. **Edit HTML**: Use the HTML editor on the left to modify the portal structure
2. **Customize Styles**: Use the style controls panel to adjust colors, fonts, and spacing
3. **Apply Changes**: Click "Apply Styles to CSS" to generate CSS from your visual controls
4. **Fine-tune**: Edit CSS directly in the CSS editor for advanced customization
5. **Preview**: See all changes instantly in the live preview panel
6. **Reset**: Use "Reset to Default" to start over

### Style Controls

#### Colors
- **Primary Color**: Main brand color (buttons, links)
- **Secondary Color**: Accent color for gradients
- **Text Color**: Main text color throughout the portal
- **Background Color**: Container background color

#### Typography
- **Font Family**: Choose from popular web-safe fonts
- **Font Size**: Adjust base font size (12px - 24px)

#### Layout
- **Button Radius**: Border radius for buttons (0px - 30px)
- **Input Radius**: Border radius for input fields (0px - 30px)
- **Container Padding**: Inner spacing of the main container (10px - 60px)
- **Element Spacing**: Spacing between form elements (5px - 40px)

## 🏗️ Project Structure

```
Kitifi-portal-customizer/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/                      # Static assets
├── src/
│   ├── components/
│   │   ├── HTMLEditor.jsx      # HTML code editor
│   │   ├── HTMLEditor.css
│   │   ├── CSSEditor.jsx       # CSS code editor
│   │   ├── CSSEditor.css
│   │   ├── Preview.jsx         # Live preview panel
│   │   ├── Preview.css
│   │   ├── StyleControls.jsx   # Visual customization controls
│   │   └── StyleControls.css
│   ├── App.jsx                 # Main application component
│   ├── App.css
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🌐 Deployment

### GitHub Pages (Automated)

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

1. Ensure GitHub Pages is enabled in your repository settings
2. Set the source to "GitHub Actions"
3. Push to the `main` branch
4. The workflow will automatically build and deploy your site

### Manual Deployment

```bash
npm run build
npm run deploy
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Powered by [Vite](https://vitejs.dev/)
- Deployed on [GitHub Pages](https://pages.github.com/)

## 💡 Tips

- Use the style controls for quick visual changes
- Edit HTML and CSS directly for advanced customization
- The preview updates in real-time as you type
- Click "Apply Styles to CSS" to update CSS based on visual controls
- Use "Reset to Default" to restore the original template

---

Made with ❤️ for the Kitifi project
