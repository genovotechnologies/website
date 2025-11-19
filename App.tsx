import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import RAD from './pages/RAD';
import Team from './pages/Team';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

// Global Scroll Reset on Route Change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#F5F5F5]">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
               <Route path="/" element={<PageTransition><Home /></PageTransition>} />
               <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
               <Route path="/products/:id" element={<PageTransition><ProductDetail /></PageTransition>} />
               <Route path="/rad" element={<PageTransition><RAD /></PageTransition>} />
               <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
               <Route path="/about" element={<PageTransition><About /></PageTransition>} />
               <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
               <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
               <Route path="/privacy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
               <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
               {/* Catch-all for 404 */}
               <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;