import { motion } from 'framer-motion';
import { useTheme } from '../../../context/ThemeContext';
import { getThemeClasses } from '../../../utils/theme';
import { ProjectLinksProps } from '../types';

const ProjectLinks = ({ link, github }: ProjectLinksProps) => {
  const { currentTheme } = useTheme();
  const themeClasses = getThemeClasses(currentTheme);

  return (
    <div className="flex space-x-4 pt-4">
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-6 py-2.5 ${themeClasses.background.button} ${themeClasses.text.primary} rounded-lg transition-colors duration-300 backdrop-blur-sm`}
      >
        Voir le projet
      </motion.a>
      <motion.a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-6 py-2.5 ${themeClasses.background.button} ${themeClasses.text.secondary} rounded-lg transition-colors duration-300 backdrop-blur-sm border border-gray-800`}
      >
        GitHub
      </motion.a>
    </div>
  );
};

export default ProjectLinks;
