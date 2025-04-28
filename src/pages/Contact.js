import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import AOS from 'aos';
import '../style/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);

    // Updated office location
    const offices = [
        {
            city: "Pune",
            address: "Kothrud, Pune, Maharashtra 411038",
            phone: "+91 8767485746",
            email: "pune@optimizeddev.com",
            hours: "Mon-Fri: 9:00 AM - 6:00 PM"
        }
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        // Scroll to top on initial load
        window.scrollTo(0, 0);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setIsSubmitting(true);

        // Get form data
        const formElement = e.target;
        const formData = new FormData(formElement);

        try {
            // Submit to FormSubmit via fetch API
            const response = await fetch('https://formsubmit.co/abhishekjadhav2303@gmail.com', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            const response2 = await fetch('https://formsubmit.co/vickyautade533@gmail.com', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            // Reset form and show success message
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });

            // Show success message
            setShowThankYou(true);

            // Hide success message after some time
            setTimeout(() => {
                setShowThankYou(false);
            }, 5000);

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error sending your message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <motion.section
                className="contact-hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1>Contact Us</h1>
                <p>Get in touch with our team for any inquiries or support</p>
            </motion.section>

            {/* Main Content */}
            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <motion.div
                            className="contact-form-container"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2>Send Us a Message</h2>
                            <form
                                className="contact-form"
                                onSubmit={handleSubmit}
                            >
                                <input type="hidden" name="_subject" value="New contact form submission" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_next" value="" />
                                <input type="hidden" name="_honey" value="" />
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label>Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Subject *</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Message *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="6"
                                        required
                                    ></textarea>
                                </div>
                                <motion.button
                                    type="submit"
                                    className="submit-btn"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </motion.button>
                            </form>
                            {showThankYou && (
                                <motion.div
                                    className="thank-you-message"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="message-icon">✓</div>
                                    <h3>Thank You!</h3>
                                    <p>We've received your message and will get back to you soon.</p>
                                </motion.div>
                            )}
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            className="contact-info"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="info-card">
                                <h3>Get in Touch</h3>
                                <div className="info-item">
                                    <FaPhone />
                                    <div>
                                        <h4>Phone</h4>
                                        <p>+91 7263840533</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <FaEnvelope />
                                    <div>
                                        <h4>Email</h4>
                                        <p>contact@optimizeddev.com</p>
                                    </div>
                                </div>
                                <div className="social-links">
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin />
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                        <FaTwitter />
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram />
                                    </a>
                                </div>
                            </div>

                            {/* Office Locations */}
                            <div className="offices">
                                <h3>Our Offices</h3>
                                {offices.map((office, index) => (
                                    <div key={index} className="office-card">
                                        <h4>{office.city}</h4>
                                        <div className="office-details">
                                            <div className="info-item">
                                                <FaMapMarkerAlt />
                                                <p>{office.address}</p>
                                            </div>
                                            <div className="info-item">
                                                <FaPhone />
                                                <p>{office.phone}</p>
                                            </div>
                                            <div className="info-item">
                                                <FaEnvelope />
                                                <p>{office.email}</p>
                                            </div>
                                            <div className="info-item">
                                                <FaClock />
                                                <p>{office.hours}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.402835073319!2d73.8072443143681!3d18.507673674230957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf8a24dae7ad%3A0xfb5769e4ccfd9c06!2sKothrud%2C%20Pune%2C%20Maharashtra%20411038!5e0!3m2!1sen!2sin!4v1663154335700!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Office Location"
                ></iframe>
            </section>
        </div>
    );
};

export default Contact;