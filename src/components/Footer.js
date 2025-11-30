import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Privacy Policy', url: '#' },
    { name: 'Terms of Service', url: '#' },
    { name: 'Sitemap', url: '#' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-section">
            <motion.h3
              className="footer-logo"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.h3>
            <p className="footer-description">
              Crafting beautiful digital experiences with passion and precision.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              {['Home', 'About', 'Projects', 'Contact'].map((link, index) => (
                <motion.button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="footer-link"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5, color: '#667eea' }}
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Connect</h4>
            <div className="footer-social">
              {[
                { icon: FaGithub, name: 'GitHub', url: 'https://github.com/yourusername' },
                { icon: FaLinkedin, name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
                { icon: FaTwitter, name: 'Twitter', url: 'https://twitter.com/yourusername' },
                { icon: MdEmail, name: 'Email', url: 'mailto:your.email@example.com' }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 5
                    }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} John Doe. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              {footerLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  className="footer-bottom-link"
                  whileHover={{ color: '#667eea' }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ 
            y: -5,
            boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)'
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          ↑
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
