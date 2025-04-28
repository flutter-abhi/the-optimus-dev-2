import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import {
    FaCode, FaMobile, FaPalette, FaCloud, FaRocket, FaChartLine,
    FaCheckCircle, FaUsers, FaAward, FaLightbulb, FaNewspaper,
    FaLaptopCode, FaMobileAlt, FaBuilding, FaUserTie, FaBriefcase,
    FaRegLightbulb, FaRegComments, FaTrophy, FaRegNewspaper, FaArrowRight,
    FaShieldAlt, FaServer, FaHeadset
} from 'react-icons/fa';
import 'aos/dist/aos.css';
import './Home.css'

const Home = () => {
    const [text, setText] = useState("");
    const fullText = "Digital d";
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(intervalId);
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        setIsVisible(true);
        window.scrollTo(0, 0);
    }, [router.pathname]);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const coreServices = [
        {
            icon: FaRocket,
            title: "Digital Transformation",
            problem: "Legacy systems holding you back?",
            solution: "Modernize your business with cutting-edge tech solutions"
        },
        {
            icon: FaShieldAlt,
            title: "Enterprise Security",
            problem: "Concerned about cyber threats?",
            solution: "Bank-grade security with 24/7 threat monitoring"
        },
        {
            icon: FaChartLine,
            title: "Growth Solutions",
            problem: "Need scalable infrastructure?",
            solution: "Cloud-native solutions that grow with you"
        }
    ];

    const achievements = [
        { number: "40%", text: "Cost Reduction" },
        { number: "10x", text: "Faster Deployment" },
        { number: "99.9%", text: "Uptime" }
    ];

    const featuredTestimonial = {
        quote: "OptimizedDev transformed our entire digital infrastructure in just 3 months. Our systems are now 5x faster.",
        author: "Sarah Chen",
        position: "CTO, TechCorp",
        company: "Fortune 500 Company"
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const features = [
        { icon: FaRocket, text: "Fast & Reliable Development" },
        { icon: FaCode, text: "Clean & Modern Code" },
        { icon: FaCloud, text: "Scalable Solutions" }
    ];

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.3
            }
        }
    };

    const handleContactClick = () => {
        router.push('/contact');
    };

    const ServiceCard = ({ icon: Icon, title, description }) => {
        return (
            <motion.div
                className="glass-card service-card"
                variants={itemVariants}
            >
                <Icon className="service-icon" />
                <h3>{title}</h3>
                <p>{description}</p>
            </motion.div>
        );
    };

    return (
        <div className="home-page">
            {/* Hero Section */}
            <motion.section
                className="hero-section"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1 variants={titleVariants}>
                    {text}
                </motion.h1>
                <motion.p variants={textVariants}>
                    Transform your business with cutting-edge technology solutions
                </motion.p>
                <motion.button
                    className="cta-button"
                    onClick={handleContactClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get Started
                </motion.button>
            </motion.section>

            {/* Services Section */}
            <section className="services">
                <h2>Our Core Services</h2>
                <div className="services-grid">
                    {coreServices.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.solution}
                        />
                    ))}
                </div>
            </section>

            {/* Achievements Section */}
            <section className="achievements">
                <div className="achievements-grid">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            className="achievement-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <h3>{achievement.number}</h3>
                            <p>{achievement.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="testimonial">
                <motion.div
                    className="testimonial-card"
                    data-aos="fade-up"
                >
                    <p className="quote">"{featuredTestimonial.quote}"</p>
                    <div className="author">
                        <strong>{featuredTestimonial.author}</strong>
                        <p>{featuredTestimonial.position}, {featuredTestimonial.company}</p>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
