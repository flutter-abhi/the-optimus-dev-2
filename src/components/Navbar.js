import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSearch, FaUser } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.2
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    const searchableContent = {
        services: [
            { title: 'Web Development', path: '/services#web-development', type: 'service' },
            { title: 'Mobile Development', path: '/services#mobile-development', type: 'service' },
            { title: 'UI/UX Design', path: '/services#ui-ux-design', type: 'service' },
            // Add more services
        ],
        portfolio: [
            { title: 'E-Commerce Platform', path: '/portfolio/e-commerce', type: 'project' },
            { title: 'Mobile App', path: '/portfolio/mobile-app', type: 'project' },
            { title: 'Web Design', path: '/portfolio/web-design', type: 'project' },
            // Add more portfolio items
        ],
        pages: [
            { title: 'Home', path: '/', type: 'page' },
            { title: 'Services', path: '/services', type: 'page' },
            { title: 'Portfolio', path: '/portfolio', type: 'page' },
            { title: 'About', path: '/about', type: 'page' },
            { title: 'Contact', path: '/contact', type: 'page' },
        ]
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query.length < 2) {
            setSearchResults([]);
            return;
        }

        const results = [];
        const searchTerm = query.toLowerCase();

        // Search through all content types
        Object.entries(searchableContent).forEach(([category, items]) => {
            items.forEach(item => {
                if (item.title.toLowerCase().includes(searchTerm)) {
                    results.push({
                        ...item,
                        category
                    });
                }
            });
        });

        setSearchResults(results);
    };

    const handleResultClick = (result) => {
        setIsSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
        navigate(result.path);
    };

    return (
        <motion.nav
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="nav-content">
                <Link to="/">
                    <motion.div
                        className="logo"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img src="/optimizedDev.png" alt="OptimizedDev Logo" />
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <div className="desktop-nav">
                    {navItems.map((item) => (
                        <Link to={item.path} key={item.name}>
                            <motion.span
                                className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.name}
                            </motion.span>
                        </Link>
                    ))}
                </div>

                {/* Right Side Icons */}
                <div className="nav-icons">
                    <motion.div
                        className="search-icon"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                    >
                        <FaSearch />
                    </motion.div>
                    <motion.div
                        className="mobile-menu-icon"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </motion.div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className="mobile-nav"
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            {navItems.map((item) => (
                                <Link to={item.path} key={item.name}>
                                    <motion.div
                                        className={`mobile-nav-item ${location.pathname === item.path ? 'active' : ''}`}
                                        whileHover={{ x: 10 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </motion.div>
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Enhanced Search Overlay */}
                <AnimatePresence>
                    {isSearchOpen && (
                        <motion.div
                            className="search-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="search-container">
                                <div className="search-input-wrapper">
                                    <FaSearch className="search-input-icon" />
                                    <input
                                        type="text"
                                        placeholder="Search for services, projects, or pages..."
                                        value={searchQuery}
                                        onChange={(e) => handleSearch(e.target.value)}
                                        autoFocus
                                    />
                                    <motion.div
                                        className="close-search"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            setIsSearchOpen(false);
                                            setSearchQuery('');
                                            setSearchResults([]);
                                        }}
                                    >
                                        <FaTimes />
                                    </motion.div>
                                </div>

                                {searchResults.length > 0 && (
                                    <motion.div
                                        className="search-results"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        {Object.entries(
                                            searchResults.reduce((acc, result) => {
                                                if (!acc[result.category]) {
                                                    acc[result.category] = [];
                                                }
                                                acc[result.category].push(result);
                                                return acc;
                                            }, {})
                                        ).map(([category, items]) => (
                                            <div key={category} className="result-category">
                                                <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                                                {items.map((result, index) => (
                                                    <motion.div
                                                        key={index}
                                                        className="search-result-item"
                                                        whileHover={{ x: 10 }}
                                                        onClick={() => handleResultClick(result)}
                                                    >
                                                        <span className="result-title">{result.title}</span>
                                                        <span className="result-type">{result.type}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        ))}
                                    </motion.div>
                                )}

                                {searchQuery.length >= 2 && searchResults.length === 0 && (
                                    <div className="no-results">
                                        No results found for "{searchQuery}"
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;