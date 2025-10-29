import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Slushes from './pages/products/Slushes';
import Concentrated from './pages/products/Concentrated';
import ReadyToUse from './pages/products/ReadyToUse';
import IceCream from './pages/products/IceCream';
import './i18n/config';

function App() {
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/slushes" element={<Slushes />} />
            <Route path="/products/concentrated" element={<Concentrated />} />
            <Route path="/products/ready-to-use" element={<ReadyToUse />} />
            <Route path="/products/ice-cream" element={<IceCream />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
