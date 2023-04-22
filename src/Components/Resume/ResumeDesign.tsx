import React from "react";
import styles from "./Resume.module.css";
import ResumeSkillsProps from "./ResumeSkillsProps";
import { ResumeData, DesignSkills } from "../../data";
import ResumeProgressBar from "../ProgressBar/ResumeProgressBar";

function ResumeDesign() {
  return (
    <main>
      <section className={styles.resume_left_container}>
        {ResumeData.map((data, index) => {
          return (
            <>
              <div className={styles.profile_data}>
                <h3>{data.design}</h3>
                <hr />
                {DesignSkills.map(({ name, level }) => {
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

export default ResumeDesign;
