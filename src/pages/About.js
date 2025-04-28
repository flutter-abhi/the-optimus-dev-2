import { motion } from 'framer-motion';
import { FaLinkedinIn, FaTwitter, FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa';
import AOS from 'aos';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../style/About.css';

const About = () => {
    const router = useRouter();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [router.pathname]);

    const teamMembers = [
        {
            name: "John Smith",
            role: "CEO & Founder",
            image: "/team/john-smith.jpg",
            social: {
                linkedin: "https://linkedin.com/in/johnsmith",
                twitter: "https://twitter.com/johnsmith"
            }
        },
        {
            name: "Sarah Johnson",
            role: "Lead Developer",
            image: "/team/sarah-johnson.jpg",
            social: {
                linkedin: "https://linkedin.com/in/sarahjohnson",
                twitter: "https://twitter.com/sarahjohnson"
            }
        },
        {
            name: "Michael Chen",
            role: "Design Director",
            image: "/team/michael-chen.jpg",
            social: {
                linkedin: "https://linkedin.com/in/michaelchen",
                twitter: "https://twitter.com/michaelchen"
            }
        }
    ];

    const values = [
        {
            icon: FaUsers,
            title: "Client-Focused",
            description: "We put our clients first, ensuring their success is our priority."
        },
        {
            icon: FaLightbulb,
            title: "Innovation",
            description: "Constantly pushing boundaries with cutting-edge solutions."
        },
        {
            icon: FaHandshake,
            title: "Integrity",
            description: "Building trust through transparency and honest relationships."
        }
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <motion.section
                className="about-hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1>About OptimizedDev</h1>
                <p>Building the future of digital solutions since 2015</p>
            </motion.section>

            {/* Story Section */}
            <section className="story-section">
                <div className="container">
                    <div className="story-content" data-aos="fade-up">
                        <h2>Our Story</h2>
                        <p>Founded in 2015, OptimizedDev has been at the forefront of digital innovation,
                            helping businesses transform their digital presence. What started as a small team
                            of passionate developers has grown into a full-service digital agency.</p>
                        <p>Today, we're proud to have served over 200+ clients worldwide, delivering
                            cutting-edge solutions that drive business growth and innovation.</p>
                    </div>
                    <motion.img
                        src="/about/office-image.jpg"
                        alt="OptimizedDev Office"
                        className="story-image"
                        data-aos="fade-left"
                    />
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="container">
                    <h2 data-aos="fade-up">Our Values</h2>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="value-card"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                whileHover={{ y: -10 }}
                            >
                                <value.icon className="value-icon" />
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="container">
                    <h2 data-aos="fade-up">Meet Our Team</h2>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                className="team-card"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                whileHover={{ y: -10 }}
                            >
                                <div className="member-image">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                                <div className="social-links">
                                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedinIn />
                                    </a>
                                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                                        <FaTwitter />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta" data-aos="fade-up">
                <div className="container">
                    <h2>Ready to Work Together?</h2>
                    <p>Let's create something amazing for your business</p>
                    <motion.button
                        className="cta-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get In Touch
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

export default About;