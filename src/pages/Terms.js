import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle, FaShieldAlt, FaBalanceScale } from 'react-icons/fa';
import '../style/Terms.css';

const Terms = () => {
    const lastUpdated = "March 15, 2024";

    const sections = [
        {
            title: "Acceptance of Terms",
            icon: FaCheckCircle,
            content: `By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
        },
        {
            title: "Use License",
            icon: FaBalanceScale,
            content: `Permission is granted to temporarily download one copy of the materials (information or software) on OptimizedDev's website for personal, non-commercial transitory viewing only.

            This is the grant of a license, not a transfer of title, and under this license you may not:
            • Modify or copy the materials
            • Use the materials for any commercial purpose
            • Attempt to decompile or reverse engineer any software
            • Remove any copyright or other proprietary notations
            • Transfer the materials to another person`
        },
        {
            title: "Disclaimer",
            icon: FaShieldAlt,
            content: `The materials on OptimizedDev's website are provided on an 'as is' basis. OptimizedDev makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.`
        },
        {
            title: "Limitations",
            icon: FaTimesCircle,
            content: `In no event shall OptimizedDev or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on OptimizedDev's website, even if OptimizedDev or an authorized representative has been notified orally or in writing of the possibility of such damage.`
        }
    ];

    return (
        <div className="terms-page">
            <motion.section
                className="terms-hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1>Terms of Service</h1>
                <p>Last updated: {lastUpdated}</p>
            </motion.section>

            <section className="terms-intro">
                <div className="container">
                    <motion.div
                        className="intro-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2>Welcome to OptimizedDev</h2>
                        <p>
                            These terms and conditions outline the rules and regulations for the use
                            of OptimizedDev's website and services. By accessing this website, we
                            assume you accept these terms and conditions in full.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="terms-sections">
                <div className="container">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            className="terms-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div className="card-header">
                                <section.icon className="section-icon" />
                                <h3>{section.title}</h3>
                            </div>
                            <div className="card-content">
                                {section.content.split('\n').map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="terms-footer">
                <div className="container">
                    <motion.div
                        className="footer-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>Questions About Our Terms?</h2>
                        <p>
                            If you have any questions about these Terms of Service, please contact us.
                        </p>
                        <motion.button
                            className="contact-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Us
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Terms;