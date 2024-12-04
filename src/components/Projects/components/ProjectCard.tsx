import { motion } from 'framer-motion';
import { useTheme } from '../../../context/ThemeContext';
import { getThemeClasses } from '../../../utils/theme';
import { ProjectCardProps } from '../types';
import ProjectImage from './ProjectImage';
import ProjectDetails from './ProjectDetails';

const ProjectCard = ({ project, isVisible }: ProjectCardProps) => {
  const { currentTheme } = useTheme();
  const themeClasses = getThemeClasses(currentTheme);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`${themeClasses.background.dropdown} backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-800`}
    >
      <div className="grid md:grid-cols-2 gap-8 p-8">
        <ProjectImage project={project} />
        <ProjectDetails project={project} />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
