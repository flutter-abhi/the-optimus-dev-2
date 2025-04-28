import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaSearch, FaCalendar, FaUser, FaTags, FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import '../style/Blog.css';

const Blog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const blogPosts = [
        {
            id: 1,
            title: "The Future of Web Development in 2024",
            excerpt: "Explore the latest trends and technologies shaping the future of web development.",
            image: "/blog/web-dev-2024.jpg",
            category: "Web Development",
            author: "John Smith",
            date: "March 15, 2024",
            tags: ["React", "Web Development", "Technology"]
        },
        {
            id: 2,
            title: "Ultimate Guide to UI/UX Design Principles",
            excerpt: "Learn the fundamental principles of creating user-friendly interfaces.",
            image: "/blog/ui-ux-guide.jpg",
            category: "Design",
            author: "Sarah Johnson",
            date: "March 12, 2024",
            tags: ["UI/UX", "Design", "User Experience"]
        },
        {
            id: 3,
            title: "Mobile App Development Best Practices",
            excerpt: "Essential practices for building successful mobile applications.",
            image: "/blog/mobile-dev.jpg",
            category: "Mobile",
            author: "Michael Chen",
            date: "March 10, 2024",
            tags: ["Mobile", "Development", "iOS", "Android"]
        }
    ];

    const categories = [
        "All",
        "Web Development",
        "Design",
        "Mobile",
        "Technology",
        "Business"
    ];

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory.toLowerCase() === 'all' ||
            post.category.toLowerCase() === selectedCategory.toLowerCase();
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="blog-page">
            {/* Hero Section */}
            <motion.section
                className="blog-hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1>Our Blog</h1>
                <p>Insights, thoughts, and stories about web development and design</p>
            </motion.section>

            {/* Search and Filter Section */}
            <section className="blog-filters">
                <div className="container">
                    <div className="search-bar">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
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

            {/* Blog Posts Grid */}
            <section className="blog-posts">
                <div className="container">
                    <div className="posts-grid">
                        {filteredPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                className="blog-card"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                whileHover={{ y: -10 }}
                            >
                                <div className="card-image">
                                    <img src={post.image} alt={post.title} />
                                    <span className="category-tag">{post.category}</span>
                                </div>
                                <div className="card-content">
                                    <div className="post-meta">
                                        <span><FaCalendar /> {post.date}</span>
                                        <span><FaUser /> {post.author}</span>
                                    </div>
                                    <h2>{post.title}</h2>
                                    <p>{post.excerpt}</p>
                                    <div className="tags">
                                        <FaTags />
                                        {post.tags.map((tag, idx) => (
                                            <span key={idx} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                    <motion.button
                                        className="read-more"
                                        whileHover={{ x: 5 }}
                                    >
                                        Read More <FaArrowRight />
                                    </motion.button>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="newsletter" data-aos="fade-up">
                <div className="container">
                    <h2>Subscribe to Our Newsletter</h2>
                    <p>Get the latest articles and insights delivered straight to your inbox</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Enter your email" />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Subscribe
                        </motion.button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Blog;