import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { getThemeClasses } from '../utils/theme';

interface DotNavigationProps {
  totalSlides: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
}

const DotNavigation = ({ totalSlides, currentIndex, onDotClick }: DotNavigationProps) => {
  const { currentTheme } = useTheme();
  const themeClasses = getThemeClasses(currentTheme);

  return (
    <div className="flex justify-center space-x-2 mt-12">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <motion.button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 focus:outline-none ${
            index === currentIndex
              ? themeClasses.border.primary
              : 'bg-gray-900/50'
          }`}
        />
      ))}
    </div>
  );
};

export default DotNavigation;
