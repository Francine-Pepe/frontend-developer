import React, { ReactNode } from "react";
import styles from "./Projects.module.css";
import { ProjectsDataLeft, ProjectsDataRight } from "../../data";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

interface ProjectsTypes {
  id: number;
  image: string;
  name: string;
  visit: string;
  repo: string;
}

function Projects() {
  return (
    <>
      <main className={styles.project_main_container}>
        <section className={styles.project_transition_box}>
          <div className={styles.project_title}>
            <h1>Projects</h1>
          </div>
        </section>
        <section className={styles.projects_container}>
          <div className={styles.projects_left}>
            {ProjectsDataLeft.map((data, index) => {
              return (
                <div className={styles.project_image_container_left}>
                  <h4>{data.name}</h4>
                  <NavLink to={data.route}>
                    <img src={data.image} alt={data.name} key={data.id} />
                  </NavLink>
                  <a href={data.visit} target="_blank" rel="noreferrer">
                    <button>Visit</button>
                  </a>
                  <hr />
                </div>
              );
            })}
          </div>
          <div className={styles.projects_right}>
            {ProjectsDataRight.map((data, index) => {
              return (
                <div className={styles.project_image_container_right}>
                  <h4>{data.name}</h4>
                  <NavLink to={data.route}>
                    <img src={data.image} alt={data.name} key={data.id} />
                  </NavLink>
                  <a href={data.visit} target="_blank" rel="noreferrer">
                    <button>Visit</button>
                  </a>

                  <hr />
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default Projects;
