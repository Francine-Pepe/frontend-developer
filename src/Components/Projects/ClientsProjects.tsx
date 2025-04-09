import ProjectsProps from "./ProjectsProps";
import { clientsProjects } from "../../data";
import styles from "./Projects.module.css";

function ClientsProjects() {
  return (
    <main className={styles.project_main_container}>
      <div className={styles.client_project_title}>
        <h1>
          On this page you will find my latest work as a Freelancer. Everything
          was done from scratch: design, code and deployment.
        </h1>
        <hr />
      </div>
      <section className={styles.projects_container}>
        {clientsProjects.map(
          ({ id, image, name, visit, repo, description }, index) => {
            return (
              <div key={index} className={styles.project_image_container_left}>
                <ProjectsProps
                  id={id}
                  image={image}
                  name={name}
                  visit={visit}
                  repo={repo}
                  description={description}
                />
              </div>
            );
          }
        )}
      </section>
    </main>
  );
}

export default ClientsProjects;
