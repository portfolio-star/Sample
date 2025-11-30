# Interactive Portfolio Website

A modern, responsive portfolio website built with React, featuring smooth animations, dark mode, and mobile-first design.

## 🌟 Features

### Core Features
- **Responsive Navigation Bar** with hamburger menu for mobile devices
- **Hero Section** with animated CTA buttons and floating particles
- **About Section** with interactive skills display and statistics
- **Projects Gallery** with hover effects and card animations
- **Contact Form** with validation and social media links
- **Footer** with quick links and scroll-to-top functionality

### Interactive Elements
- ✨ Smooth scrolling between sections
- 🎨 Interactive hover effects on buttons, cards, and links
- 🌙 Dark mode toggle with smooth transitions
- 📱 Mobile-friendly hamburger menu
- ⚡ Framer Motion animations throughout
- 🎯 Form validation with friendly error messages
- 💫 Floating particles and decorative animations

### Responsive Design
- Mobile-first approach
- Optimized for desktop, tablet, and mobile screens
- Flexible grid layouts that adapt to screen size
- Touch-friendly interface for mobile users

## 🚀 Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## 🎨 Customization

### Personalizing Your Portfolio

1. **Update Personal Information** (src/components/Home.js):
   - Change "Your Name" to your actual name
   - Modify the subtitle and description

2. **About Section** (src/components/About.js):
   - Update the about text with your own story
   - Modify skills and their proficiency levels
   - Update statistics (projects completed, years of experience, etc.)

3. **Projects** (src/components/Projects.js):
   - Replace project data with your actual projects
   - Update titles, descriptions, tech stacks
   - Add your own project images/icons
   - Update demo and GitHub links

4. **Contact Information** (src/components/Contact.js):
   - Update social media links
   - Change email address
   - Customize form submission logic

5. **Colors and Branding**:
   - Update gradient colors in CSS files
   - Modify the color scheme to match your brand
   - Replace the logo text in Header component

### Tech Stack Used
- **React** - UI framework
- **Framer Motion** - Animation library
- **React Router DOM** - Navigation
- **CSS3** - Styling with custom animations

## 📱 Mobile Responsiveness

The portfolio is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🎯 Features in Detail

### Navigation
- Fixed header that becomes visible on scroll
- Smooth scroll to sections on click
- Mobile hamburger menu with slide-in animation
- Dark mode toggle button

### Home Section
- Animated welcome banner
- Interactive CTA buttons with hover effects
- Floating particle background
- Rotating gradient circles

### About Section
- Skill cards with animated progress bars
- Interactive image placeholder
- Statistics counter
- Smooth reveal animations

### Projects Section
- Card-based layout with hover effects
- Overlay with live demo and GitHub links
- Technology tags with interactive hover states
- Responsive grid layout

### Contact Section
- Form validation (name, email, message)
- Success/error message display
- Animated social media links
- Smooth input transitions

### Footer
- Quick navigation links
- Social media icons
- Scroll-to-top button
- Copyright information

## 🌙 Dark Mode

Dark mode is implemented with:
- Toggle button in the navigation bar
- Smooth transitions between themes
- Persistent preference saved in localStorage
- Comprehensive theme support across all components

## 📦 Project Structure

```
portfolio-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── Contact.js
│   │   ├── Contact.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🎨 Color Palette

- Primary Gradient: #667eea → #764ba2
- Light Background: #f5f7fa → #c3cfe2
- Dark Background: #1a202c → #2d3748
- Text Light: #1a202c
- Text Dark: #e2e8f0

## 📈 Performance

- Optimized animations with Framer Motion
- Minimal bundle size
- Fast page load times
- Smooth transitions and interactions

## 🔮 Future Enhancements

- Add blog section
- Integrate with a CMS for easy content updates
- Add more animation variations
- Implement email functionality for contact form
- Add project filtering
- Include testimonials section

---

**Built with ❤️ using React and Framer Motion**

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
