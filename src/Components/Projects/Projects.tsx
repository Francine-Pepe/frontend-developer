import styles from "./Projects.module.css";
import { ProjectsDataLeft, ProjectsDataRight } from "../../data";
import Animation from "../Animations/Animation";
import "../../App.css";
import ProjectsProps from "./ProjectsProps";

function Projects() {
  const text = {
    text: "Bellow you can see a bit of my work:",
  };

  return (
    <>
      <main className={styles.project_main_container}>
        <section className={styles.project_transition_box}>
          <div className="animation">
            <Animation text={text.text} />
          </div>
        </section>
        <section className={styles.projects_container}>
          <div className={styles.projects_left}>
            {ProjectsDataLeft.map((data, index) => {
              return (
                <div
                  className={styles.project_image_container_left}
                  key={index}
                >
                  <ProjectsProps
                    id={data.id}
                    image={data.image}
                    name={data.name}
                    visit={data.visit}
                    repo={data.repo}
                    description={data.description}
                  />
                </div>
              );
            })}
          </div>
          <div className={styles.projects_right}>
            {ProjectsDataRight.map((data, index) => {
              return (
                <div
                  className={styles.project_image_container_right}
                  key={index}
                >
                  <ProjectsProps
                    id={data.id}
                    image={data.image}
                    name={data.name}
                    visit={data.visit}
                    repo={data.repo}
                    description={data.description}
                  />
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
