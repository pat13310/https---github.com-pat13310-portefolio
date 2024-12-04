export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github: string;
}

export interface ProjectHeaderProps {
  title: string;
}

export interface ProjectCardProps {
  project: Project;
  isVisible: boolean;
}

export interface ProjectDetailsProps {
  project: Project;
}

export interface ProjectTechnologyProps {
  name: string;
}

export interface ProjectLinksProps {
  link: string;
  github: string;
}
