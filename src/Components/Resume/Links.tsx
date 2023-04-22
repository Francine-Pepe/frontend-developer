import React from "react";
import styles from "./Resume.module.css";
import { ResumeData, ResumeLinks } from "../../data";

function Links() {
  return (
    <main>
      <section className={styles.resume_left_container}>
        {ResumeData.map((data, index) => {
          return (
            <>
              <div className={styles.profile_data}>
                <h3>{data.links}</h3>
                <hr />
                {ResumeLinks.map((data, index) => {
                  return (
                    <>
                      <div className={styles.profile_data_contact} key={index}>
                        {data.icon}
                        <a href={data.link} target="_blank" rel="noreferrer">
                          <h3 className={styles.information}>{data.name}</h3>
                        </a>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </section>
    </main>
  );
}

export default Links;
