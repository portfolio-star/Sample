import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { jsPDF } from 'jspdf';
import './Resume.css';

const Resume = ({ isOpen, onClose }) => {
  const handleDownload = () => {
    const doc = new jsPDF();
    
    // Set font sizes
    doc.setFontSize(24);
    doc.text('JOHN DOE', 105, 20, { align: 'center' });
    
    doc.setFontSize(14);
    doc.text('Full Stack Web Developer', 105, 30, { align: 'center' });
    
    // Contact Info
    doc.setFontSize(10);
    doc.text('john.doe@example.com | (123) 456-7890 | johndoe.com', 105, 40, { align: 'center' });
    
    // Professional Summary
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('PROFESSIONAL SUMMARY', 20, 55);
    doc.setFont(undefined, 'normal');
    doc.setFontSize(10);
    const summary = 'Passionate Full Stack Web Developer with 3+ years of experience in designing, developing, and implementing web applications. Proficient in modern web technologies including React, Node.js, and various databases.';
    const splitSummary = doc.splitTextToSize(summary, 170);
    doc.text(splitSummary, 20, 63);
    
    // Technical Skills
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('TECHNICAL SKILLS', 20, 85);
    doc.setFont(undefined, 'normal');
    doc.setFontSize(10);
    doc.text('Frontend: React, JavaScript, HTML5, CSS3, SASS, Redux, TypeScript', 20, 93);
    doc.text('Backend: Node.js, Express.js, RESTful APIs, GraphQL', 20, 100);
    doc.text('Database: MongoDB, PostgreSQL, MySQL, Firebase', 20, 107);
    doc.text('Tools: Git, Docker, VS Code, Webpack, Agile/Scrum', 20, 114);
    
    // Work Experience
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('WORK EXPERIENCE', 20, 130);
    
    doc.setFontSize(11);
    doc.text('Senior Web Developer', 20, 140);
    doc.setFontSize(10);
    doc.setFont(undefined, 'italic');
    doc.text('Tech Innovations Inc. | Jan 2023 - Present', 20, 147);
    doc.setFont(undefined, 'normal');
    doc.text('• Led development of customer-facing web applications serving 100K+ users', 20, 154);
    doc.text('• Implemented responsive designs, improving load times by 40%', 20, 161);
    doc.text('• Collaborated with cross-functional teams using Agile methodologies', 20, 168);
    
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text('Web Developer', 20, 180);
    doc.setFontSize(10);
    doc.setFont(undefined, 'italic');
    doc.text('Digital Solutions Agency | Jun 2021 - Dec 2022', 20, 187);
    doc.setFont(undefined, 'normal');
    doc.text('• Developed and maintained multiple client websites', 20, 194);
    doc.text('• Built custom WordPress themes and React applications', 20, 201);
    doc.text('• Integrated third-party APIs and payment systems', 20, 208);
    
    // Education
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('EDUCATION', 20, 225);
    doc.setFontSize(11);
    doc.text('Bachelor of Science in Computer Science', 20, 235);
    doc.setFontSize(10);
    doc.setFont(undefined, 'italic');
    doc.text('University Name | 2017 - 2021 | GPA: 3.8/4.0', 20, 242);
    
    // Projects
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('NOTABLE PROJECTS', 20, 258);
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.text('E-Commerce Platform - Full-stack solution with React, Node.js, MongoDB', 20, 266);
    doc.text('Task Management App - Real-time collaboration tool with Socket.io', 20, 273);
    
    // Save PDF
    doc.save('John_Doe_Resume.pdf');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="resume-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="resume-modal"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              className="resume-close-btn"
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>

            {/* Resume Content */}
            <div className="resume-content">
              {/* Header */}
              <motion.div
                className="resume-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="resume-name">John Doe</h1>
                <p className="resume-title">Full Stack Web Developer</p>
                <div className="resume-contact-info">
                  <span>📧 your.email@example.com</span>
                  <span>📱 (123) 456-7890</span>
                  <span>🌐 yourwebsite.com</span>
                  <span>💼 LinkedIn</span>
                </div>
              </motion.div>

              {/* Summary */}
              <motion.section
                className="resume-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="section-title">Professional Summary</h2>
                <p className="section-content">
                  Passionate and dedicated Full Stack Web Developer with 3+ years of experience
                  in designing, developing, and implementing web applications. Proficient in modern
                  web technologies including React, Node.js, and various databases. Strong
                  problem-solving skills with a commitment to writing clean, maintainable code.
                </p>
              </motion.section>

              {/* Skills */}
              <motion.section
                className="resume-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                  <div className="skill-category">
                    <strong>Frontend:</strong> React, JavaScript, HTML5, CSS3, SASS, Redux, TypeScript
                  </div>
                  <div className="skill-category">
                    <strong>Backend:</strong> Node.js, Express.js, RESTful APIs, GraphQL
                  </div>
                  <div className="skill-category">
                    <strong>Database:</strong> MongoDB, PostgreSQL, MySQL, Firebase
                  </div>
                  <div className="skill-category">
                    <strong>Tools & Others:</strong> Git, Docker, VS Code, Webpack, Agile/Scrum
                  </div>
                </div>
              </motion.section>

              {/* Experience */}
              <motion.section
                className="resume-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="section-title">Work Experience</h2>
                
                <div className="experience-item">
                  <div className="experience-header">
                    <div>
                      <h3>Senior Web Developer</h3>
                      <p className="company-name">Tech Innovations Inc.</p>
                    </div>
                    <span className="date-range">Jan 2023 - Present</span>
                  </div>
                  <ul className="experience-list">
                    <li>Led development of customer-facing web applications serving 100K+ users</li>
                    <li>Implemented responsive designs and optimized performance, improving load times by 40%</li>
                    <li>Collaborated with cross-functional teams using Agile methodologies</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                  </ul>
                </div>

                <div className="experience-item">
                  <div className="experience-header">
                    <div>
                      <h3>Web Developer</h3>
                      <p className="company-name">Digital Solutions Agency</p>
                    </div>
                    <span className="date-range">Jun 2021 - Dec 2022</span>
                  </div>
                  <ul className="experience-list">
                    <li>Developed and maintained multiple client websites and web applications</li>
                    <li>Built custom WordPress themes and React-based single-page applications</li>
                    <li>Integrated third-party APIs and payment processing systems</li>
                    <li>Provided technical support and training to clients</li>
                  </ul>
                </div>
              </motion.section>

              {/* Education */}
              <motion.section
                className="resume-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="section-title">Education</h2>
                <div className="education-item">
                  <div className="experience-header">
                    <div>
                      <h3>Bachelor of Science in Computer Science</h3>
                      <p className="company-name">University Name</p>
                    </div>
                    <span className="date-range">2017 - 2021</span>
                  </div>
                  <p className="education-details">GPA: 3.8/4.0 • Dean's List</p>
                </div>
              </motion.section>

              {/* Projects */}
              <motion.section
                className="resume-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h2 className="section-title">Notable Projects</h2>
                
                <div className="project-item">
                  <h3>E-Commerce Platform</h3>
                  <p>Full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.</p>
                </div>

                <div className="project-item">
                  <h3>Task Management Application</h3>
                  <p>Collaborative task management tool with real-time updates using Socket.io. Built with React and Express.js.</p>
                </div>

                <div className="project-item">
                  <h3>Portfolio Website Builder</h3>
                  <p>SaaS platform allowing users to create custom portfolio websites with drag-and-drop functionality.</p>
                </div>
              </motion.section>

              {/* Download Button */}
              <motion.div
                className="resume-download"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  onClick={handleDownload}
                  className="download-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📥 Download Resume
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Resume;
