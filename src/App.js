import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import pages
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />

          {/* Legal Routes */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />

          {/* 404 Page */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
