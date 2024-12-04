import { motion } from 'framer-motion';
import { useTheme } from '../../../context/ThemeContext';
import { Project } from '../types';

const ProjectImage = ({ project }: { project: Project }) => {
  const { currentTheme, getGradientByTheme } = useTheme();
  const gradientClasses = getGradientByTheme(currentTheme);

  return (
    <motion.div 
      className="relative h-72 md:h-96 rounded-xl overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {project.image === '/projects/placeholder.svg' ? (
        <div className={`w-full h-full bg-gradient-to-br ${gradientClasses} flex items-center justify-center`}>
          <span className="text-4xl font-bold text-white">
            {project.title.split(' ').map(word => word[0]).join('').toUpperCase()}
          </span>
        </div>
      ) : (
        <img 
          src={project.image} 
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </motion.div>
  );
};

export default ProjectImage;
