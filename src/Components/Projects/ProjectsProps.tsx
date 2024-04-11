import React from "react";
import styles from "./Projects.module.css";

function ProjectsProps(props: {
  id: number;
  image: any;
  name: string;
  visit: string;
  repo: string;
  description: string;
}) {
  const { id, image, name, visit, repo, description } = props;
  return (
    <main>
      <section className={styles.projects_props}>
        <h3>{name}</h3>
        <a href={visit} target="_blank" rel="noreferrer">
          <img src={image} alt={name} key={id} />
          <p>{description}</p>
        </a>
        <div className={styles.buttons_container}>
          <a href={visit} target="_blank" rel="noreferrer">
            <button>Live demo</button>
          </a>
          <a href={repo} target="_blank" rel="noreferrer">
            <button>Repo</button>
          </a>
        </div>
        {/* <hr /> */}
      </section>
    </main>
  );
}

export default ProjectsProps;
