import React from "react";
import { Link } from "react-router-dom";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils/getImageUrl.js";

export const ProjectCard = ({
  project: { id, title, imageSrc, description, skills },
}) => {
  return (
    <Link to={`/projects/${id}`} className={styles.containerLink}>
      <div className={styles.container}>
        <img
          src={imageSrc}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
    </Link>
  );
};
