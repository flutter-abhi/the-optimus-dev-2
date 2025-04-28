import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaDollarSign, FaLaptop, FaUsers, FaGraduationCap, FaHeart, FaPlane } from 'react-icons/fa';
import AOS from 'aos';
import '../style/Career.css';

const Careers = () => {
    const [selectedDepartment, setSelectedDepartment] = useState('all');
    const [showApplicationForm, setShowApplicationForm] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const jobs = [
        {
            id: 1,
            title: "Senior Frontend Developer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            salary: "$90,000 - $120,000",
            description: "We're looking for an experienced Frontend Developer to join our team...",
            requirements: [
                "5+ years of experience with React",
                "Strong understanding of modern JavaScript",
                "Experience with state management (Redux, Context API)",
                "Knowledge of responsive design and CSS preprocessors"
            ]
        },
        {
            id: 2,
            title: "UX/UI Designer",
            department: "Design",
            location: "Hybrid",
            type: "Full-time",
            salary: "$70,000 - $90,000",
            description: "Join our design team to create beautiful and intuitive interfaces...",
            requirements: [
                "3+ years of UX/UI design experience",
                "Proficiency in Figma and Adobe Creative Suite",
                "Strong portfolio demonstrating user-centered design",
                "Experience with design systems"
            ]
        },
        {
            id: 3,
            title: "DevOps Engineer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            salary: "$100,000 - $130,000",
            description: "Help us build and maintain our cloud infrastructure...",
            requirements: [
                "Experience with AWS/Azure",
                "Knowledge of CI/CD pipelines",
                "Container orchestration (Kubernetes)",
                "Infrastructure as Code (Terraform)"
            ]
        }
    ];

    const benefits = [
        {
            icon: FaLaptop,
            title: "Remote Work",
            description: "Flexibility to work from anywhere"
        },
        {
            icon: FaUsers,
            title: "Great Team",
            description: "Collaborative and supportive environment"
        },
        {
            icon: FaGraduationCap,
            title: "Learning Budget",
            description: "Annual budget for courses and conferences"
        },
        {
            icon: FaHeart,
            title: "Health Insurance",
            description: "Comprehensive health coverage"
        },
        {
            icon: FaPlane,
            title: "Paid Time Off",
            description: "Generous vacation policy"
        }
    ];

    const handleApply = (job) => {
        setSelectedJob(job);
        setShowApplicationForm(true);
    };

    const filteredJobs = jobs.filter(job =>
        selectedDepartment === 'all' || job.department.toLowerCase() === selectedDepartment
    );

    return (
        <div className="careers-page">
            {/* Hero Section */}
            <motion.section
                className="careers-hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1>Join Our Team</h1>
                <p>Build the future of digital solutions with us</p>
            </motion.section>

            {/* Benefits Section */}
            <section className="benefits-section">
                <div className="container">
                    <h2 data-aos="fade-up">Why Work With Us?</h2>
                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="benefit-card"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                whileHover={{ y: -10 }}
                            >
                                <benefit.icon className="benefit-icon" />
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Jobs Section */}
            <section className="jobs-section">
                <div className="container">
                    <h2 data-aos="fade-up">Open Positions</h2>
                    <div className="department-filter">
                        {['All', 'Engineering', 'Design', 'Marketing'].map((dept, index) => (
                            <motion.button
                                key={index}
                                className={`filter-btn ${selectedDepartment === dept.toLowerCase() ? 'active' : ''}`}
                                onClick={() => setSelectedDepartment(dept.toLowerCase())}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {dept}
                            </motion.button>
                        ))}
                    </div>
                    <div className="jobs-grid">
                        {filteredJobs.map((job, index) => (
                            <motion.div
                                key={job.id}
                                className="job-card"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="job-header">
                                    <h3>{job.title}</h3>
                                    <span className="department">{job.department}</span>
                                </div>
                                <div className="job-details">
                                    <span><FaMapMarkerAlt /> {job.location}</span>
                                    <span><FaClock /> {job.type}</span>
                                    <span><FaDollarSign /> {job.salary}</span>
                                </div>
                                <p>{job.description}</p>
                                <ul className="requirements">
                                    {job.requirements.map((req, idx) => (
                                        <li key={idx}>{req}</li>
                                    ))}
                                </ul>
                                <motion.button
                                    className="apply-btn"
                                    onClick={() => handleApply(job)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Apply Now
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form Modal */}
            {showApplicationForm && (
                <div className="modal-overlay">
                    <motion.div
                        className="application-modal"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                    >
                        <h2>Apply for {selectedJob.title}</h2>
                        <form className="application-form">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" required />
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="tel" required />
                            </div>
                            <div className="form-group">
                                <label>Resume/CV</label>
                                <input type="file" accept=".pdf,.doc,.docx" required />
                            </div>
                            <div className="form-group">
                                <label>Cover Letter</label>
                                <textarea rows="4" required></textarea>
                            </div>
                            <div className="form-buttons">
                                <motion.button
                                    type="submit"
                                    className="submit-btn"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Submit Application
                                </motion.button>
                                <motion.button
                                    type="button"
                                    className="cancel-btn"
                                    onClick={() => setShowApplicationForm(false)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Cancel
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Careers;