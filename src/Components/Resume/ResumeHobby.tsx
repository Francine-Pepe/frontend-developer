import React from "react";
import styles from "./Resume.module.css";
import ResumeSkillsProps from "./ResumeSkillsProps";
import { ResumeData, Hobby } from "../../data";

function ResumeHobby() {
  return (
    <main>
      <section className={styles.resume_left_container}>
        {ResumeData.map((data, index) => {
          return (
            <>
              <div className={styles.profile_data}>
                <h3>{data.hobby}</h3>
                <hr />
                {Hobby.map(({ name }) => {
                  return (
                    <>
                      <div className={styles.resume_left_container}>
                        <div className={styles.skills_resume_left_container}>
                          <ResumeSkillsProps name={name} />
                        </div>
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

export default ResumeHobby;
