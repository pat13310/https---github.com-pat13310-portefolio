import { motion } from 'framer-motion';
import { useTheme } from '../../../context/ThemeContext';
import { getThemeClasses } from '../../../utils/theme';
import { ProjectHeaderProps } from '../types';

const ProjectHeader = ({ title }: ProjectHeaderProps) => {
  const { currentTheme, getGradientByTheme } = useTheme();
  const gradientClasses = getGradientByTheme(currentTheme);
  const themeClasses = getThemeClasses(currentTheme);

  return (
    <div className="text-center">
      <motion.h2 
        className={`text-3xl font-bold ${themeClasses.text.primary} mb-8 relative inline-block pb-2`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
        <div className={`absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r ${gradientClasses}`} />
      </motion.h2>
    </div>
  );
};

export default ProjectHeader;
