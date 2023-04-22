import React from "react";
import { ProjectPage } from "../../data";
import styles from './Project.module.css';

function Project() {

  return (
    <div>
      {ProjectPage.map((data: { image: string | undefined }, index: any) => {
        return (
          <>
            <section className={styles.single_project_container} key={index}>
              <img src={data.image} alt={""} />
            </section>
          </>
        );
      })}
    </div>
  );
}

export default Project;
