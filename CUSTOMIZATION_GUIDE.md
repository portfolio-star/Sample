# Portfolio Customization Guide

This guide will help you quickly customize your portfolio website with your personal information.

## Quick Start Checklist

### 1. Personal Information (Home Section)
**File:** `src/components/Home.js`

Replace line 27:
```javascript
Hi, I'm <span className="gradient-text">Your Name</span>
```
With your actual name.

Replace line 35:
```javascript
A Passionate Web Developer
```
With your title/role.

Replace line 42:
```javascript
Crafting beautiful, responsive, and user-friendly web experiences
```
With your personal tagline.

### 2. About Section
**File:** `src/components/About.js`

**Update your bio** (lines 46-62):
- Replace the three paragraphs with your own story
- Keep it personal and engaging

**Update skills** (lines 7-14):
- Replace the skills array with your own skills
- Adjust the level (0-100) for each skill
- Change icons (emojis) to match

**Update statistics** (lines 97-125):
- Change "50+" to your number of completed projects
- Change "3+" to your years of experience
- Modify any other stats

### 3. Projects Section
**File:** `src/components/Projects.js`

**Update projects array** (lines 6-50):

For each project, update:
- `title`: Your project name
- `description`: Brief description
- `image`: Emoji or add actual images
- `tech`: Array of technologies used
- `liveDemo`: URL to live demo
- `github`: URL to GitHub repository

Example:
```javascript
{
  id: 1,
  title: 'My Awesome App',
  description: 'A cool application that does amazing things',
  image: '🚀',
  tech: ['React', 'Node.js', 'MongoDB'],
  liveDemo: 'https://myapp.com',
  github: 'https://github.com/username/myapp'
}
```

### 4. Contact Information
**File:** `src/components/Contact.js`

**Update social links** (lines 51-56):

Replace URLs with your actual profiles:
```javascript
{ name: 'GitHub', icon: '📚', url: 'https://github.com/yourusername', color: '#333' },
{ name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/yourusername', color: '#0077b5' },
{ name: 'Twitter', icon: '🐦', url: 'https://twitter.com/yourusername', color: '#1da1f2' },
{ name: 'Email', icon: '📧', url: 'mailto:your.email@example.com', color: '#ea4335' }
```

### 5. Footer
**File:** `src/components/Footer.js`

**Update copyright** (line 94):
Replace "Your Name" with your actual name.

### 6. Logo/Brand
**File:** `src/components/Header.js`

Replace line 42:
```javascript
<span className="logo-text">Portfolio</span>
```
With your brand name or initials.

## Color Customization

### Gradient Colors
The portfolio uses a purple gradient throughout. To change:

**Primary Gradient:** Search for `#667eea` and `#764ba2` across all CSS files and replace with your colors.

**Background Gradients:**
- Light mode: `#f5f7fa` → `#c3cfe2`
- Dark mode: `#1a202c` → `#2d3748`

### Where to Find Colors:
- Header: `src/components/Header.css`
- Home: `src/components/Home.css`
- About: `src/components/About.css`
- Projects: `src/components/Projects.css`
- Contact: `src/components/Contact.css`
- Footer: `src/components/Footer.css`
- Global: `src/App.css`

## Adding Real Images

### Profile Picture
1. Add image to `public/images/` folder
2. In `src/components/About.js`, replace the emoji placeholder:
```javascript
<img src="/images/your-photo.jpg" alt="Your Name" className="profile-image" />
```

### Project Images
1. Add project images to `public/images/projects/` folder
2. In `src/components/Projects.js`, replace emoji with:
```javascript
<img src="/images/projects/project1.jpg" alt="Project Name" />
```

## Form Submission (Contact Form)

Currently, the form shows a success message but doesn't actually send emails.

### Option 1: Use FormSpree
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update `src/components/Contact.js` handleSubmit function

### Option 2: Use EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Integrate with the contact form

### Option 3: Backend API
Create your own backend API to handle form submissions.

## SEO Optimization

### Update Meta Tags
**File:** `public/index.html`

Update:
- `<title>` tag
- Meta description
- Meta keywords
- Open Graph tags (for social media)

## Deployment

### Deploy to Netlify
1. Build: `npm run build`
2. Drag `build` folder to [Netlify](https://netlify.com)
3. Or connect GitHub repository for automatic deployments

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### Deploy to GitHub Pages
1. Install: `npm install gh-pages --save-dev`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. Deploy: `npm run deploy`

## Testing Responsiveness

### Browser DevTools
1. Open Chrome DevTools (F12)
2. Click device toolbar icon (Ctrl+Shift+M)
3. Test different screen sizes:
   - iPhone 12/13 (390px)
   - iPad (768px)
   - Desktop (1200px+)

### Actual Devices
Test on real phones and tablets when possible.

## Common Issues

### Issue: Components not showing
**Solution:** Check console for errors, ensure all imports are correct

### Issue: Animations not working
**Solution:** Ensure framer-motion is installed: `npm install framer-motion`

### Issue: Dark mode not persisting
**Solution:** Check browser localStorage settings, ensure cookies are enabled

### Issue: Build errors
**Solution:** Delete node_modules and package-lock.json, then run `npm install` again

## Next Steps

1. ✅ Personalize all content
2. ✅ Add your actual projects
3. ✅ Update social media links
4. ✅ Add real images
5. ✅ Test on multiple devices
6. ✅ Optimize for SEO
7. ✅ Deploy to hosting platform
8. ✅ Share with the world!

## Need Help?

- React Documentation: https://react.dev
- Framer Motion Docs: https://www.framer.com/motion/
- CSS Tricks: https://css-tricks.com
- MDN Web Docs: https://developer.mozilla.org

---

**Happy Coding! 🚀**
