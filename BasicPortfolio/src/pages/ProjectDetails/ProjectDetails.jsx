import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { projects } from "../../data/projects";
import styles from "./ProjectDetails.module.css";

export const ProjectDetails = () => {
  const { projectId } = useParams();
  const projectIndex = projects.findIndex((p) => p.id === projectId);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <section className={styles.container}>
        <h1 className={styles.title}>Project Not Found</h1>
      </section>
    );
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <section className={styles.container}>
      <Link to="/projects" className={styles.backLink}>
        &larr; Back to Projects
      </Link>
      <h1 className={styles.title}>{project.title}</h1>
      <img src={project.imageSrc} alt={project.title} className={styles.image} />
      <div className={styles.content}>
        <ReactMarkdown>{project.details}</ReactMarkdown>
      </div>
      <div className={styles.links}>
        <a href={project.demo} className={styles.link} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
      </div>

      <div className={styles.navigation}>
        {prevProject && (
            <Link to={`/projects/${prevProject.id}`} className={styles.navLink}>
                &larr; Previous Project
            </Link>
        )}
        {nextProject && (
            <Link to={`/projects/${nextProject.id}`} className={styles.navLink} style={{marginLeft: "auto"}}>
                Next Project &rarr;
            </Link>
        )}
      </div>
    </section>
  );
};
