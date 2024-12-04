import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { getThemeClasses } from '../../utils/theme';
import projectsData from '../../data/projects.json';
import SlideCardCtrl from '../SlideCardCtrl';
import ProjectHeader from './components/ProjectHeader';
import ProjectCard from './components/ProjectCard';
import { Project } from './types';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const { currentTheme } = useTheme();
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
        <ProjectHeader title="Mes Projets" />

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <ProjectCard 
              key={currentIndex}
              project={projects[currentIndex]}
              isVisible={true}
            />
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
