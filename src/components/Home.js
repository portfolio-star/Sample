import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Resume from './Resume';
import './Home.css';

const Home = () => {
  const [showResume, setShowResume] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="home-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm <span className="gradient-text">John Doe</span>
          </motion.h1>

          <motion.h2
            className="home-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A Passionate Web Developer
          </motion.h2>

          <motion.p
            className="home-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Crafting beautiful, responsive, and user-friendly web experiences
          </motion.p>

          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              className="cta-button primary"
              onClick={() => scrollToSection('projects')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View My Work</span>
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <path
                  d="M7 10L13 10M13 10L10 7M13 10L10 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.button>

            <motion.button
              className="cta-button secondary"
              onClick={() => setShowResume(true)}
              whileHover={{ 
                scale: 1.05,
                borderColor: '#667eea'
              }}
              whileTap={{ scale: 0.95 }}
            >
              📄 View Resume
            </motion.button>

            <motion.button
              className="cta-button secondary"
              onClick={() => scrollToSection('contact')}
              whileHover={{ 
                scale: 1.05,
                borderColor: '#667eea'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="home-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.div
            className="profile-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <img 
              src="/profile.jpg" 
              alt="John Doe"
              className="profile-image"
            />
          </motion.div>
          <motion.div
            className="visual-circle"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="visual-circle-2"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Resume Modal */}
      <Resume isOpen={showResume} onClose={() => setShowResume(false)} />
    </section>
  );
};

export default Home;
