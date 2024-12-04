import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LogoNav from './LogoNav';
import ThemeToggle from './ThemeToggle';
import theme from '../data/theme.json';
import { getThemeClasses } from '../utils/theme';
import { useTheme } from '../context/ThemeContext';

type ThemeKey = keyof typeof theme.themes;

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const { currentTheme, setCurrentTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme as ThemeKey);
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      if (scrollPosition < 100) {
        setActiveSection('accueil');
        return;
      }

      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projets' },
    { name: 'Contact', href: '#contact' },
  ];

  const themeClasses = getThemeClasses(currentTheme);

  return (
    <nav className={`fixed top-0 z-50 w-full bg-opacity-80 backdrop-blur-lg ${themeClasses.background.navbar}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`flex items-center justify-center h-${theme.navigation.height}`}>
          <LogoNav />
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <motion.div
                  key={item.name}
                  className="relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className={`nav-link px-4 py-2 text-sm font-medium ${
                      isActive ? 'active' : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.href === '#accueil') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        document.querySelector(item.href)?.scrollIntoView({
                          behavior: 'smooth'
                        });
                      }
                    }}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r transform
                      ${currentTheme === 'purple' ? 'from-purple-500 via-purple-400 to-pink-400' : 
                        currentTheme === 'blue' ? 'from-blue-500 via-cyan-400 to-teal-400' :
                        currentTheme === 'orange' ? 'from-orange-500 via-amber-400 to-yellow-400' :
                        'from-green-500 via-emerald-400 to-lime-400'} 
                      scale-x-0 transition-transform duration-300 origin-left
                      ${isActive ? 'scale-x-100' : 'group-hover:scale-x-100'}`}
                    />
                  </a>
                </motion.div>
              );
            })}
          </div>
          <div className="ml-12 flex items-center space-x-4">
            <ThemeToggle 
              currentTheme={currentTheme} 
              onThemeChange={handleThemeChange} 
            />
          </div>
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              className="nav-link px-4 py-2 text-sm font-medium"
              onClick={toggleMobileMenu}
            >
              Menu
            </button>
          </div>
          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg p-4">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.div
                    key={item.name}
                    className="relative"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className={`nav-link block py-2 text-sm font-medium ${
                        isActive ? 'active' : ''
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        closeMobileMenu();
                        if (item.href === '#accueil') {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          document.querySelector(item.href)?.scrollIntoView({
                            behavior: 'smooth'
                          });
                        }
                      }}
                    >
                      {item.name}
                    </a>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
