import ProjectCard from '../components/ProjectCard';
import { getMLProjects } from './api/ml-projects';
import { getBotsProjects } from './api/bots-projects';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ ml_projects, bots_projects, pypi_projects, misc_projects }) => {
  return (
    <>
      <h3>Open Source Projects</h3>
      <br/>
      <center><h4>Machine Learning - Automation</h4></center>
      <hr/>
      <div className={styles.container}>
        {ml_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <br/>
      <center><h4>Bots</h4></center>
      <hr/>
      <div className={styles.container}>
        {bots_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const ml_projects = getMLProjects();
  const bots_projects = getBotsProjects();

  return {
    props: { title: 'Projects', ml_projects, bots_projects},
  };
}

export default ProjectsPage;
