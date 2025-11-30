import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const skills = [
    { name: 'React', icon: '⚛️', level: 90 },
    { name: 'JavaScript', icon: '🟨', level: 95 },
    { name: 'CSS/SCSS', icon: '🎨', level: 90 },
    { name: 'Node.js', icon: '🟩', level: 85 },
    { name: 'HTML5', icon: '🌐', level: 95 },
    { name: 'Git', icon: '📚', level: 80 }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="about-image"
              whileHover={{ 
                scale: 1.05,
                rotate: 2
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="image-placeholder"
                whileHover={{
                  boxShadow: '0 20px 60px rgba(102, 126, 234, 0.4)'
                }}
              >
                <span className="image-icon">👨‍💻</span>
              </motion.div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div
              className="decoration-circle"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="about-subtitle">Passionate Developer & Problem Solver</h3>
            <p className="about-description">
              I'm a dedicated web developer with a passion for creating beautiful, 
              functional, and user-friendly websites. With expertise in modern web 
              technologies, I transform ideas into engaging digital experiences.
            </p>
            <p className="about-description">
              My journey in web development started with a curiosity about how things 
              work on the internet. Since then, I've been constantly learning and 
              improving my skills to stay current with the latest technologies and 
              best practices.
            </p>
            <p className="about-description">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community.
            </p>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.2)'
                  }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="about-stats"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="stat-item">
                <motion.h4
                  className="stat-number"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  50+
                </motion.h4>
                <p className="stat-label">Projects Completed</p>
              </div>
              <div className="stat-item">
                <motion.h4
                  className="stat-number"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                >
                  3+
                </motion.h4>
                <p className="stat-label">Years Experience</p>
              </div>
              <div className="stat-item">
                <motion.h4
                  className="stat-number"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                >
                  100%
                </motion.h4>
                <p className="stat-label">Client Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
