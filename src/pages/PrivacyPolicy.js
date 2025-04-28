import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserLock, FaCookie, FaEnvelope } from 'react-icons/fa';
import '../style/PrivacyPolicy.css';

const PrivacyPolicy = () => {
    const lastUpdated = "March 15, 2024";

    const sections = [
        {
            id: 'information-collection',
            title: 'Information Collection',
            icon: FaUserLock,
            content: `We collect information that you provide directly to us, including:
            • Name and contact information
            • Account credentials
            • Payment information
            • Communication preferences
            • Any other information you choose to provide

            We also automatically collect certain information when you use our services, including:
            • Log data
            • Device information
            • Location information
            • Usage information
            • Cookies and similar technologies`
        },
        {
            id: 'information-usage',
            title: 'How We Use Your Information',
            icon: FaShieldAlt,
            content: `We use the information we collect to:
            • Provide and maintain our services
            • Process your transactions
            • Send you technical notices and support messages
            • Communicate with you about products, services, and events
            • Monitor and analyze trends and usage
            • Detect, prevent, and address technical issues
            • Protect against harmful or unlawful activity`
        },
        {
            id: 'cookie-policy',
            title: 'Cookie Policy',
            icon: FaCookie,
            content: `We use cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.

            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.`
        },
        {
            id: 'contact-us',
            title: 'Contact Us',
            icon: FaEnvelope,
            content: `If you have any questions about this Privacy Policy, please contact us:
            • By email: privacy@optimizeddev.com
            • By phone: +1 (234) 567-8900
            • By mail: 123 Privacy Street, Tech City, TC 12345`
        }
    ];

    return (
        <div className="privacy-policy">
            {/* Hero Section */}
            <motion.section
                className="privacy-hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1>Privacy Policy</h1>
                <p>Last updated: {lastUpdated}</p>
            </motion.section>

            {/* Introduction */}
            <section className="privacy-intro">
                <div className="container">
                    <motion.div
                        className="intro-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2>Your Privacy Matters</h2>
                        <p>
                            At OptimizedDev, we take your privacy seriously. This Privacy Policy
                            explains how we collect, use, disclose, and safeguard your information
                            when you visit our website or use our services. Please read this privacy
                            policy carefully. If you do not agree with the terms of this privacy
                            policy, please do not access the site.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Policy Sections */}
            <section className="policy-sections">
                <div className="container">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.id}
                            className="policy-card"
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

            {/* Updates Section */}
            <section className="policy-updates">
                <div className="container">
                    <motion.div
                        className="updates-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>Policy Updates</h2>
                        <p>
                            We may update our Privacy Policy from time to time. We will notify
                            you of any changes by posting the new Privacy Policy on this page
                            and updating the "Last updated" date at the top of this Privacy Policy.
                        </p>
                        <p>
                            You are advised to review this Privacy Policy periodically for any
                            changes. Changes to this Privacy Policy are effective when they are
                            posted on this page.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="privacy-cta">
                <div className="container">
                    <motion.div
                        className="cta-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>Have Questions?</h2>
                        <p>
                            If you have any questions about our Privacy Policy, please don't
                            hesitate to contact us.
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

export default PrivacyPolicy;