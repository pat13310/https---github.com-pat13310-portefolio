import { motion } from 'framer-motion';
import { useTheme } from '../../../context/ThemeContext';
import { getThemeClasses } from '../../../utils/theme';
import { ProjectTechnologyProps } from '../types';

const ProjectTechnology = ({ name }: ProjectTechnologyProps) => {
  const { currentTheme } = useTheme();
  const themeClasses = getThemeClasses(currentTheme);

  return (
    <motion.span 
      whileHover={{ scale: 1.05 }}
      className={`px-4 py-1.5 ${themeClasses.background.button} ${themeClasses.text.secondary} rounded-lg text-sm border border-gray-700/50`}
    >
      {name}
    </motion.span>
  );
};

export default ProjectTechnology;
