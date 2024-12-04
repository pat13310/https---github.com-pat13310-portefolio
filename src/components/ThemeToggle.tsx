import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllThemes, getThemeClasses } from '../utils/theme';

interface ThemeToggleProps {
  onThemeChange: (theme: string) => void;
  currentTheme: string;
}

const ThemeToggle = ({ onThemeChange, currentTheme }: ThemeToggleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const themes = getAllThemes();
  const classes = getThemeClasses(currentTheme);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeSelect = (themeKey: string) => {
    onThemeChange(themeKey);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={toggleDropdown}
        className={`p-2 rounded-lg transition-colors duration-300 ${
          currentTheme === 'purple' ? 'hover:bg-purple-500/20' :
          currentTheme === 'blue' ? 'hover:bg-blue-500/20' :
          currentTheme === 'orange' ? 'hover:bg-orange-500/20' :
          'hover:bg-green-500/20'
        } ${classes.background.button}`}
      >
        <svg
          className="w-5 h-5 text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`absolute right-0 mt-2 w-56 rounded-xl bg-gray-900 backdrop-blur-sm shadow-xl z-[100] overflow-hidden border ${
              currentTheme === 'purple' ? 'border-purple-500/40' :
              currentTheme === 'blue' ? 'border-blue-500/40' :
              currentTheme === 'orange' ? 'border-orange-500/40' :
              'border-green-500/40'
            }`}
          >
            <div className="py-2">
              {themes.map(({ key, name }) => (
                <motion.button
                  key={key}
                  onClick={() => handleThemeSelect(key)}
                  className={`
                    relative block w-full text-left px-4 py-3 text-sm
                    ${key === currentTheme ? 
                      key === 'purple' ? 'bg-purple-500/10' :
                      key === 'blue' ? 'bg-blue-500/10' :
                      key === 'orange' ? 'bg-orange-500/10' :
                      'bg-green-500/10'
                    : 'bg-transparent'}
                    ${key === currentTheme ? 
                      key === 'purple' ? 'hover:bg-purple-500/20' :
                      key === 'blue' ? 'hover:bg-blue-500/20' :
                      key === 'orange' ? 'hover:bg-orange-500/20' :
                      'hover:bg-green-500/20'
                    : 'hover:bg-[#1c1e22]'}
                    ${key === currentTheme ? 'text-white' : 'text-[#a1a1a1]'}
                    transition-colors duration-150
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${
                      key === 'purple' ? 'bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400' :
                      key === 'blue' ? 'bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400' :
                      key === 'orange' ? 'bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400' :
                      'bg-gradient-to-r from-green-500 via-emerald-400 to-lime-400'
                    }`} />
                    <span className="font-medium">{name}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;
