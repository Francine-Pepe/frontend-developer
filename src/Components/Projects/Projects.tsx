import styles from "./Projects.module.css";
import { ProjectsDataLeft, ProjectsDataRight } from "../../data";

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
                <div
                  className={styles.project_image_container_left}
                  key={index}
                >
                  <h3>{data.name}</h3>
                  <button>
                    <img
                      src={data.image}
                      alt={data.name}
                      key={data.id}
                      className={styles.image}
                    />
                  </button>

                  <div className={styles.buttons_container}>
                    <a href={data.visit} target="_blank" rel="noreferrer">
                      <button>Live demo</button>
                    </a>
                    <a href={data.repo} target="_blank" rel="noreferrer">
                      <button>Repo</button>
                    </a>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
          <div className={styles.projects_right}>
            {ProjectsDataRight.map((data, index) => {
              return (
                <div className={styles.project_image_container_right}>
                  <h3>{data.name}</h3>
                  <button>
                    <img src={data.image} alt={data.name} key={data.id} />
                  </button>
                  <div className={styles.buttons_container}>
                    <a href={data.visit} target="_blank" rel="noreferrer">
                      <button>Live demo</button>
                    </a>
                    <a href={data.repo} target="_blank" rel="noreferrer">
                      <button>Repo</button>
                    </a>
                  </div>
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
