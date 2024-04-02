import ProjectsProps from "./ProjectsProps";
import { clientsProjects } from "../../data";
import styles from "./Projects.module.css";

function ClientsProjects() {
  return (
    <div>
      <div className={styles.client_project_title}>
        <h1>
          On this page you will find my latest work as a Freelancer. Everything
          was done from scratch: design, code and deployment.
        </h1>
      </div>
      {clientsProjects.map(
        ({ id, image, name, visit, repo, description }, index) => {
          return (
            <div key={index}>
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
    </div>
  );
}

export default ClientsProjects;
