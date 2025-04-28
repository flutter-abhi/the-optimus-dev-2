import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGlobe, FaGithub, FaTags, FaSearch, FaTimes } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import '../style/Portfolio.css';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProject, setSelectedProject] = useState(null);
    const location = useLocation();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const categories = [
        'All',
        'Web Development',
        'Mobile Apps',
        'UI/UX Design',
        'E-Commerce'
    ];

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            category: "E-Commerce",
            image: "/portfolio/ecommerce.jpg",
            description: "A full-featured e-commerce platform built with React and Node.js",
            technologies: ["React", "Node.js", "MongoDB", "Redux"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com",
            details: "Modern e-commerce solution with features including product management, cart functionality, payment integration, and admin dashboard.",
            client: "RetailCo Inc.",
            duration: "4 months",
            year: "2024"
        },
        {
            id: 2,
            title: "Mobile Banking App",
            category: "Mobile Apps",
            image: "/portfolio/banking-app.jpg",
            description: "Secure mobile banking application for iOS and Android",
            technologies: ["React Native", "Firebase", "Redux", "Node.js"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com",
            details: "Feature-rich mobile banking application with secure authentication, transaction history, and real-time notifications.",
            client: "FinTech Solutions",
            duration: "6 months",
            year: "2023"
        },
        {
            id: 3,
            title: "Corporate Website Redesign",
            category: "UI/UX Design",
            image: "/portfolio/corporate-web.jpg",
            description: "Modern website redesign for a corporate client",
            technologies: ["Figma", "React", "SCSS", "Framer Motion"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com",
            details: "Complete website redesign focusing on user experience, modern design principles, and performance optimization.",
            client: "TechCorp Ltd.",
            duration: "3 months",
            year: "2024"
        }
    ];

    const filteredProjects = projects.filter(project => {
        const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="portfolio-page">
            {/* Hero Section */}
            <motion.section
                className="portfolio-hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1>Our Portfolio</h1>
                <p>Showcasing our best work and successful projects</p>
            </motion.section>

            {/* Filter Section */}
            <section className="portfolio-filters">
                <div className="container">
                    <div className="search-bar">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="categories">
                        {categories.map((category, index) => (
                            <motion.button
                                key={index}
                                className={`category-btn ${selectedCategory === category.toLowerCase() ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category.toLowerCase())}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="projects-section">
                <div className="container">
                    <div className="projects-grid">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="project-card"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                onClick={() => setSelectedProject(project)}
                                whileHover={{ y: -10 }}
                            >
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-overlay">
                                        <span>View Project</span>
                                    </div>
                                </div>
                                <div className="project-info">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-tags">
                                        {project.technologies.slice(0, 3).map((tech, idx) => (
                                            <span key={idx} className="tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="project-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="project-modal"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                        >
                            <button
                                className="close-btn"
                                onClick={() => setSelectedProject(null)}
                            >
                                <FaTimes />
                            </button>
                            <div className="modal-content">
                                <div className="modal-image">
                                    <img src={selectedProject.image} alt={selectedProject.title} />
                                </div>
                                <div className="modal-info">
                                    <h2>{selectedProject.title}</h2>
                                    <p className="project-description">{selectedProject.details}</p>

                                    <div className="project-meta">
                                        <div className="meta-item">
                                            <h4>Client</h4>
                                            <p>{selectedProject.client}</p>
                                        </div>
                                        <div className="meta-item">
                                            <h4>Duration</h4>
                                            <p>{selectedProject.duration}</p>
                                        </div>
                                        <div className="meta-item">
                                            <h4>Year</h4>
                                            <p>{selectedProject.year}</p>
                                        </div>
                                    </div>

                                    <div className="technologies">
                                        <h4>Technologies Used</h4>
                                        <div className="tech-tags">
                                            {selectedProject.technologies.map((tech, idx) => (
                                                <span key={idx} className="tag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="project-links">
                                        <a
                                            href={selectedProject.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="live-link"
                                        >
                                            <FaGlobe /> View Live
                                        </a>
                                        <a
                                            href={selectedProject.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="github-link"
                                        >
                                            <FaGithub /> View Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Portfolio;