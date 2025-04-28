import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaPalette, FaCloud, FaRocket, FaChartLine, FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'aos/dist/aos.css';
import './Services.css';

const Services = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const handleContactClick = () => {
        navigate('/contact');
    };

    const services = [
        {
            icon: FaCode,
            title: "Web Development",
            description: "Custom websites and web applications built with cutting-edge technologies.",
            features: [
                "Responsive Web Design",
                "E-commerce Solutions",
                "Custom Web Applications",
                "CMS Development"
            ]
        },
        {
            icon: FaMobile,
            title: "Mobile Development",
            description: "Native and cross-platform mobile apps for iOS and Android.",
            features: [
                "iOS Development",
                "Android Development",
                "Cross-platform Solutions",
                "App Maintenance"
            ]
        },
        {
            icon: FaPalette,
            title: "UI/UX Design",
            description: "User-centered design solutions that enhance user experience.",
            features: [
                "User Interface Design",
                "User Experience Design",
                "Wireframing & Prototyping",
                "Design Systems"
            ]
        },
        {
            icon: FaCloud,
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure and deployment solutions.",
            features: [
                "Cloud Migration",
                "AWS Services",
                "Azure Solutions",
                "Cloud Security"
            ]
        },
        {
            icon: FaRocket,
            title: "Digital Innovation",
            description: "Innovative digital solutions to transform your business.",
            features: [
                "Digital Transformation",
                "Process Automation",
                "Innovation Consulting",
                "Technology Strategy"
            ]
        },
        {
            icon: FaChartLine,
            title: "Digital Marketing",
            description: "Strategic marketing solutions to grow your online presence.",
            features: [
                "SEO Optimization",
                "Content Marketing",
                "Social Media Strategy",
                "Analytics & Reporting"
            ]
        }
    ];

    return (
        <div className="services-page">
            {/* Hero Section */}
            <motion.section
                className="services-hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1>Our Services</h1>
                <p>Comprehensive digital solutions tailored to your business needs</p>
            </motion.section>

            {/* Services Grid */}
            <section className="services-grid">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="service-card"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        whileHover={{ y: -10 }}
                    >
                        <div className="service-icon">
                            <service.icon />
                        </div>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                        <ul className="features-list">
                            {service.features.map((feature, idx) => (
                                <li key={idx}>
                                    <FaArrowRight className="arrow-icon" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </section>

            {/* CTA Section */}
            <section className="services-cta" data-aos="fade-up">
                <h2>Ready to Start Your Project?</h2>
                <p>Let's discuss how we can help you achieve your digital goals</p>
                <motion.button
                    className="cta-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleContactClick}
                >
                    Contact Us Now
                </motion.button>
            </section>
        </div>
    );
};

export default Services;
