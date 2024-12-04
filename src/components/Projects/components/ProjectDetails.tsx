import { useTheme } from '../../../context/ThemeContext';
import { getThemeClasses } from '../../../utils/theme';
import { ProjectDetailsProps } from '../types';
import ProjectTechnology from './ProjectTechnology';
import ProjectLinks from './ProjectLinks';

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const { currentTheme } = useTheme();
  const themeClasses = getThemeClasses(currentTheme);

  return (
    <div className="space-y-6 flex flex-col justify-center">
      <h3 className={`text-2xl font-semibold ${themeClasses.text.primary}`}>
        {project.title}
      </h3>
      <p className={themeClasses.text.secondary}>
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <ProjectTechnology key={tech} name={tech} />
        ))}
      </div>
      <ProjectLinks link={project.link} github={project.github} />
    </div>
  );
};

export default ProjectDetails;
