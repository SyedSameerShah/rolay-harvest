import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    {
      name: t('nav.products'),
      subMenu: [
        { name: t('nav.slushes'), path: '/products/slushes' },
        { name: t('nav.concentrated'), path: '/products/concentrated' },
        { name: t('nav.readyToUse'), path: '/products/ready-to-use' },
        { name: t('nav.iceCream'), path: '/products/ice-cream' },
      ],
    },
    { name: t('nav.about'), path: '/#about' },
    { name: t('nav.contact'), path: '/#contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.img
              src="/logo.png"
              alt="Rolay Harvest"
              className={`transition-all duration-300 ${
                isScrolled ? 'h-12' : 'h-16'
              }`}
              whileHover={{ scale: 1.05 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.subMenu ? (
                  <>
                    <button
                      className={`font-medium transition-colors ${
                        isScrolled ? 'text-navy' : 'text-white'
                      } hover:text-gold`}
                    >
                      {link.name}
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="py-2">
                        {link.subMenu.map((subLink) => (
                          <Link
                            key={subLink.path}
                            to={subLink.path}
                            className="block px-6 py-3 text-navy hover:bg-cream hover:text-gold transition-colors"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : link.path.startsWith('/#') ? (
                  <button
                    onClick={() => {
                      if (location.pathname !== '/') {
                        window.location.href = link.path;
                      } else {
                        scrollToSection(link.path.substring(2));
                      }
                    }}
                    className={`font-medium transition-colors ${
                      isScrolled ? 'text-navy' : 'text-white'
                    } hover:text-gold`}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`font-medium transition-colors ${
                      isScrolled ? 'text-navy' : 'text-white'
                    } hover:text-gold`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden flex flex-col gap-1.5 ${
                isScrolled ? 'text-navy' : 'text-white'
              }`}
            >
              <motion.span
                className="w-6 h-0.5 bg-current"
                animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-current"
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-current"
                animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0 }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.subMenu ? (
                      <>
                        <div className="font-medium text-navy py-2">{link.name}</div>
                        <div className="pl-4 flex flex-col gap-2">
                          {link.subMenu.map((subLink) => (
                            <Link
                              key={subLink.path}
                              to={subLink.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-gray-600 hover:text-gold py-2"
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : link.path.startsWith('/#') ? (
                      <button
                        onClick={() => {
                          if (location.pathname !== '/') {
                            window.location.href = link.path;
                          } else {
                            scrollToSection(link.path.substring(2));
                          }
                        }}
                        className="font-medium text-navy hover:text-gold py-2 text-left w-full"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="font-medium text-navy hover:text-gold py-2 block"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

