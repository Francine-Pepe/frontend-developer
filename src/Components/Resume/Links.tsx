import React from "react";
import styles from "./Resume.module.css";
import { ResumeData, ResumeLinks } from "../../data";
import ResumeTitles from "./ResumeTitles";

function Links() {
  return (
    <main>
      <section className={styles.resume_left_container}>
        {ResumeData.map(({ links }, index) => {
          return (
            <div className={styles.profile_data} key={index}>
              <ResumeTitles title={links} />
              {ResumeLinks.map(({ id, icon, link, name }) => {
                return (
                  <div className={styles.profile_data_contact} key={id}>
                    {icon}
                    <a href={link} target="_blank" rel="noreferrer">
                      <h3 className={styles.information}>{name}</h3>
                    </a>
                  </div>
                );
              })}
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Links;
