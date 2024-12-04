import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from '../data/projects.json';
import { useTheme } from '../context/ThemeContext';
import { getThemeClasses } from '../utils/theme';
import SlideCardCtrl from './SlideCardCtrl';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github: string;
}

const ProjectImage = ({ project }: { project: Project }) => {
  const { currentTheme, getGradientByTheme } = useTheme();
  const gradientClasses = getGradientByTheme(currentTheme);

  return (
    <div className="relative h-72 md:h-96 rounded-xl overflow-hidden">
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
    </div>
  );
};

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const { currentTheme, getGradientByTheme } = useTheme();
  const gradientClasses = getGradientByTheme(currentTheme);
  const themeClasses = getThemeClasses(currentTheme);

  const projects: Project[] = projectsData.projects;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, projects.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="projets" className={`min-h-screen ${themeClasses.background.navbar} py-20 relative overflow-hidden`}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.h2 
            className={`text-3xl font-bold ${themeClasses.text.primary} mb-8 relative inline-block pb-2`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Mes Projets
            <div className={`absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r ${gradientClasses}`} />
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`${themeClasses.background.dropdown} backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-800`}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <ProjectImage project={projects[currentIndex]} />
                <div className="space-y-6 flex flex-col justify-center">
                  <h3 className={`text-2xl font-semibold ${themeClasses.text.primary}`}>{projects[currentIndex].title}</h3>
                  <p className={themeClasses.text.secondary}>{projects[currentIndex].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentIndex].technologies.map((tech) => (
                      <span 
                        key={tech}
                        className={`px-4 py-1.5 ${themeClasses.background.button} ${themeClasses.text.secondary} rounded-lg text-sm border border-gray-700/50`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 pt-4">
                    <a
                      href={projects[currentIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 py-2.5 ${themeClasses.background.button} ${themeClasses.text.primary} rounded-lg transition-colors duration-300 backdrop-blur-sm`}
                    >
                      Voir le projet
                    </a>
                    <a
                      href={projects[currentIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 py-2.5 ${themeClasses.background.button} ${themeClasses.text.secondary} rounded-lg transition-colors duration-300 backdrop-blur-sm border border-gray-800`}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <SlideCardCtrl
            currentIndex={currentIndex}
            totalSlides={projects.length}
            onPrevious={handlePrev}
            onNext={handleNext}
            onDotClick={handleDotClick}
            isAutoPlay={isAutoPlay}
            onAutoPlayToggle={() => setIsAutoPlay(!isAutoPlay)}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
