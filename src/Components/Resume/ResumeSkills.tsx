import React from "react";
import styles from "./Resume.module.css";
import ResumeSkillsProps from "./ResumeSkillsProps";
import { ResumeData, TechSkills } from "../../data";
import ResumeProgressBar from "../ProgressBar/ResumeProgressBar";

function ResumeSkills() {
  return (
    <main>
      <section className={styles.resume_left_container}>
        {ResumeData.map((data, index) => {
          return (
            <>
              <div className={styles.profile_data}>
                <h3>{data.tech}</h3>
                <hr />
                {TechSkills.map(({ name, level }) => {
                  return (
                    <>
                      <div className={styles.resume_left_container}>
                        <div className={styles.skills_resume_left_container}>
                          <ResumeSkillsProps name={name} />
                          <ResumeProgressBar completed={level} />
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

export default ResumeSkills;
