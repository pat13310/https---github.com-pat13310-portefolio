import { motion } from 'framer-motion';
import { useTheme } from '../../../context/ThemeContext';
import { getThemeClasses } from '../../../utils/theme';
import DotNavigation from '../../DotNavigation';

interface ProjectCtrlProps {
  currentIndex: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
  isAutoPlay: boolean;
  onAutoPlayToggle: () => void;
}

const ProjectCtrl = ({
  currentIndex,
  totalSlides,
  onPrevious,
  onNext,
  onDotClick,
  isAutoPlay,
  onAutoPlayToggle
}: ProjectCtrlProps) => {
  const { currentTheme, getGradientByTheme } = useTheme();
  const themeClasses = getThemeClasses(currentTheme);
  const gradientClasses = getGradientByTheme(currentTheme);

  return (
    <>
      {/* Navigation Controls */}
      <div className="relative w-full h-0">
        <div className="absolute -top-[200px] left-0 right-0 w-full">
          <motion.button
            onClick={onPrevious}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className={`absolute left-4 p-3 bg-gray-950/80 text-gray-300 rounded-full transition-all duration-300 border border-gray-800/50 hover:bg-gray-900/90 group`}
          >
            <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${gradientClasses}`} />
            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            onClick={onNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className={`absolute right-4 p-3 bg-gray-950/80 text-gray-300 rounded-full transition-all duration-300 border border-gray-800/50 hover:bg-gray-900/90 group`}
          >
            <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${gradientClasses}`} />
            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Controls Container */}
      <div className="relative z-10">
        {/* Dots Navigation */}
        <DotNavigation
          totalSlides={totalSlides}
          currentIndex={currentIndex}
          onDotClick={onDotClick}
        />

        {/* AutoPlay Toggle */}
        <div className="flex justify-center mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onAutoPlayToggle}
            className={`group relative px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 overflow-hidden ${
              themeClasses.background.button
            } ${
              isAutoPlay 
                ? themeClasses.text.primary
                : themeClasses.text.secondary
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${gradientClasses} opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
              isAutoPlay ? 'opacity-20' : ''
            }`} />
            <span className="relative z-10 text-sm font-medium">{isAutoPlay ? 'Pause' : 'Lecture auto'}</span>
            <svg 
              className="w-4 h-4 relative z-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isAutoPlay ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default ProjectCtrl;
