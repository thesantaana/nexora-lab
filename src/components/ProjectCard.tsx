import { projects } from '../data/content';
import { useLanguage } from '../state/language';

type Project = typeof projects[number];
export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const { language } = useLanguage();
  return <article className={`project-card ${large ? 'large' : ''}`}>
    <div className="project-image"><img src={project.images[0]} alt={`${project.title} ${language === 'zh' ? project.zh : project.en}`} loading="lazy" /></div>
    <div className="project-meta">
      <span>{project.id}</span>
      <div><h3>{project.title}</h3><p>{language === 'zh' ? project.zh : project.en}</p></div>
      <span className="arrow">↗</span>
    </div>
  </article>;
}
