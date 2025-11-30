import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce website with cart functionality, payment integration, and admin dashboard.',
      image: '🛒',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveDemo: 'https://example.com',
      github: 'https://github.com/yourusername/project1'
    },
    {
      id: 2,
      title: 'Social Media App',
      description: 'A social networking platform with real-time messaging, posts, likes, and comments.',
      image: '📱',
      tech: ['React', 'Firebase', 'Material-UI'],
      liveDemo: 'https://example.com',
      github: 'https://github.com/yourusername/project2'
    },
    {
      id: 3,
      title: 'Task Management Tool',
      description: 'An intuitive task manager with drag-and-drop functionality, team collaboration, and progress tracking.',
      image: '✅',
      tech: ['React', 'TypeScript', 'Redux', 'Tailwind'],
      liveDemo: 'https://example.com',
      github: 'https://github.com/yourusername/project3'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with forecasts, maps, and location-based weather alerts.',
      image: '🌤️',
      tech: ['React', 'Weather API', 'Chart.js'],
      liveDemo: 'https://example.com',
      github: 'https://github.com/yourusername/project4'
    },
    {
      id: 5,
      title: 'Portfolio CMS',
      description: 'A content management system for creating and managing portfolio websites with ease.',
      image: '💼',
      tech: ['React', 'Express', 'PostgreSQL'],
      liveDemo: 'https://example.com',
      github: 'https://github.com/yourusername/project5'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My Projects</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="project-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="project-emoji">{project.image}</span>
                <motion.div
                  className="project-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="project-links">
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>🔗</span> Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>📚</span> GitHub
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.1, backgroundColor: '#667eea', color: '#fff' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="view-more"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="view-more-btn"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
