import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef, Suspense } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AOS from 'aos';
import {
    FaCode, FaMobile, FaPalette, FaCloud, FaRocket, FaChartLine,
    FaCheckCircle, FaUsers, FaAward, FaLightbulb, FaNewspaper,
    FaLaptopCode, FaMobileAlt, FaBuilding, FaUserTie, FaBriefcase,
    FaRegLightbulb, FaRegComments, FaTrophy, FaRegNewspaper, FaArrowRight,
    FaShieldAlt, FaServer, FaHeadset
} from 'react-icons/fa';
import 'aos/dist/aos.css';
// import backgroundImage from '../../Images/BackGound_HomePage.jpg'//Update path as needed
import { useInView } from 'react-intersection-observer';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Spline from '@splinetool/react-spline';
import LocomotiveScroll from 'locomotive-scroll';
import './Home.css'
// 3D Scene Components
function Box({ scale = 1, position = [0, 0, 0] }) {
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto';
    }, [hovered]);

    return (
        <mesh
            ref={meshRef}
            scale={scale}
            position={position}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? "#ff3366" : "#0066ff"} />
        </mesh>
    );
}

function Scene() {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Float
                    speed={4}
                    rotationIntensity={1}
                    floatIntensity={2}
                >
                    <Box position={[-2, 0, 0]} />
                    <Box position={[0, 0, 0]} />
                    <Box position={[2, 0, 0]} />
                </Float>
                <OrbitControls enableZoom={false} />
            </Suspense>
        </Canvas>
    );
}

const Home = () => {
    const [text, setText] = useState("");
    const fullText = "Digital d";
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const heroRef = useRef(null);

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
    }, [location]);

    // Replace the existing useEffect for scrolling with this simpler version
    useEffect(() => {
        // Instant scroll to top
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            multiplier: 1,
            lerp: 0.03
        });

        return () => scroll.destroy();
    }, []);

    // Updated content structure for Home/index.js
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

    // Key achievements with real metrics
    const achievements = [
        { number: "40%", text: "Cost Reduction" },
        { number: "10x", text: "Faster Deployment" },
        { number: "99.9%", text: "Uptime" }
    ];

    // Featured client testimonial
    const featuredTestimonial = {
        quote: "OptimizedDev transformed our entire digital infrastructure in just 3 months. Our systems are now 5x faster.",
        author: "Sarah Chen",
        position: "CTO, TechCorp",
        company: "Fortune 500 Company"
    };

    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

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

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Animate services on scroll
        gsap.from('.service-card', {
            scrollTrigger: {
                trigger: '.services',
                start: 'top center',
                end: 'bottom center',
                scrub: 1
            },
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2
        });

        // Animate stats on scroll
        gsap.from('.stat-card', {
            scrollTrigger: {
                trigger: '.stats-section',
                start: 'top center',
                end: 'bottom center',
                scrub: 1
            },
            scale: 0.8,
            opacity: 0,
            duration: 1,
            stagger: 0.2
        });
    }, []);

    const handleContactClick = () => {
        navigate('/contact');
    };

    const ServiceCard = ({ icon: Icon, title, description }) => {
        return (
            <motion.div
                className="glass-card service-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="service-icon">
                    <Icon size={40} />
                </div>
                <h3 className="animated-border">{title}</h3>
                <p>{description}</p>
                <motion.div
                    className="service-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                >
                    <div className="service-details">
                        <span>Explore</span>
                        <FaArrowRight />
                    </div>
                </motion.div>
            </motion.div>
        );
    };

    return (
        <div className="home" data-scroll-container>
            {/* Hero Section */}
            <section className="hero">
                <motion.div className="hero-content">
                    <div className="hero-text">
                        <h1 className="gradient-text">
                            Building Tomorrow's
                            <span className="highlight"> Digital Solutions</span>
                        </h1>
                        <p className="hero-tagline">
                            Enterprise-grade development for forward-thinking businesses
                        </p>
                        <motion.button
                            className="cta-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleContactClick}
                        >
                            Start Your Project
                            <FaArrowRight className="button-icon" />
                        </motion.button>
                    </div>
                    <div className="hero-visual">
                        <Scene />
                    </div>
                </motion.div>
            </section>

            {/* Problem Solution Section */}
            <section className="solutions">
                <div className="container">
                    {coreServices.map((service, index) => (
                        <motion.div
                            key={index}
                            className="solution-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <service.icon className="service-icon" />
                            <h3>{service.title}</h3>
                            <p className="problem">{service.problem}</p>
                            <p className="solution">{service.solution}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Impact Section */}
            <section className="impact">
                <div className="container">
                    <div className="impact-grid">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                className="achievement-card"
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3>{achievement.number}</h3>
                                <p>{achievement.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Testimonial */}
            <section className="testimonial">
                <div className="container">
                    <motion.div
                        className="testimonial-card"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <p className="quote">{featuredTestimonial.quote}</p>
                        <div className="author-info">
                            <h4>{featuredTestimonial.author}</h4>
                            <p>{featuredTestimonial.position}</p>
                            <p className="company">{featuredTestimonial.company}</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="container">
                    <h2>Ready to Transform Your Business?</h2>
                    <motion.button
                        className="cta-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleContactClick}
                    >
                        Let's Talk
                        <FaArrowRight className="button-icon" />
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

export default Home;
