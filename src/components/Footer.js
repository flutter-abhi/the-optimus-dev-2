import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaHeart
} from 'react-icons/fa';
import '../style/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Animation variants for staggered animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    // Updated footerLinks with correct paths
    const footerLinks = {
        company: [
            { name: 'About', path: '/about' },           // Updated path
            { name: 'Services', path: '/services' },     // Updated path
            { name: 'Portfolio', path: '/portfolio' },   // Updated path
            { name: 'Contact', path: '/contact' }        // Updated path
        ],
        services: [
            { name: 'Web Development', path: '/services' },          // Simplified path
            { name: 'Mobile Apps', path: '/services' },             // Simplified path
            { name: 'UI/UX Design', path: '/services' },            // Simplified path
            { name: 'Cloud Solutions', path: '/services' }          // Simplified path
        ],
        legal: [
            { name: 'Privacy Policy', path: '/privacy-policy' },
            { name: 'Terms of Service', path: '/terms' },
            // { name: 'Cookie Policy', path: '/cookie-policy' }
        ]
    };

    const socialLinks = [
        {
            icon: FaFacebookF,
            url: 'https://facebook.com',
            label: 'Facebook',
            color: '#1877f2' // Facebook blue
        },
        {
            icon: FaTwitter,
            url: 'https://twitter.com',
            label: 'Twitter',
            color: '#1da1f2' // Twitter blue
        },
        {
            icon: FaLinkedinIn,
            url: 'https://linkedin.com',
            label: 'LinkedIn',
            color: '#0a66c2' // LinkedIn blue
        },
        {
            icon: FaInstagram,
            url: 'https://instagram.com',
            label: 'Instagram',
            color: '#e4405f' // Instagram pink
        }
    ];

    return (
        <footer className="footer">
            <div className="footer-top">
                <motion.div
                    className="footer-content container"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Company Info Section */}
                    <motion.div className="footer-section" variants={itemVariants}>
                        <Link to="/" className="footer-logo">
                            <img src="/optimizedDev.png" alt="OptimizedDev Logo" />
                        </Link>
                        <p className="company-description">
                            Building digital excellence through innovative web solutions
                            and cutting-edge technology for businesses worldwide.
                        </p>
                        <div className="social-links">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    whileHover={{
                                        y: -5,
                                        scale: 1.1,
                                        backgroundColor: social.color
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <social.icon />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links Section */}
                    <motion.div className="footer-section" variants={itemVariants}>
                        <h3>Company</h3>
                        <ul>
                            {footerLinks.company.map((link, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => window.scrollTo(0, 0)} // Add scroll to top
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services Section */}
                    <motion.div className="footer-section" variants={itemVariants}>
                        <h3>Services</h3>
                        <ul>
                            {footerLinks.services.map((link, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => window.scrollTo(0, 0)} // Add scroll to top
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Section */}
                    <motion.div className="footer-section contact-section" variants={itemVariants}>
                        <h3>Contact Us</h3>
                        <div className="contact-info">
                            <motion.div
                                className="contact-item"
                                whileHover={{ x: 5 }}
                            >
                                <FaMapMarkerAlt />
                                <p>Kothrud, Pune, Maharashtra 411038</p>
                            </motion.div>
                            <motion.div
                                className="contact-item"
                                whileHover={{ x: 5 }}
                            >
                                <FaPhoneAlt />
                                <p>+91 7263840533</p>
                            </motion.div>
                            <motion.div
                                className="contact-item"
                                whileHover={{ x: 5 }}
                            >
                                <FaEnvelope />
                                <p>contact@optimizeddev.com</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Footer Bottom */}
            <motion.div
                className="footer-bottom"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
            >
                <div className="container">
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            © {currentYear} OptimizedDev. All rights reserved.
                        </p>
                        <div className="legal-links">
                            {footerLinks.legal.map((link, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Link to={link.path}>{link.name}</Link>
                                </motion.div>
                            ))}
                        </div>
                        <p className="made-with">
                            Made with <FaHeart className="heart-icon" /> by OptimizedDev
                        </p>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;