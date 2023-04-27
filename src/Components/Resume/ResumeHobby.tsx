import React from "react";
import styles from "./Resume.module.css";
import ResumeSkillsProps from "./ResumeSkillsProps";
import { ResumeData, Hobby } from "../../data";
import ResumeTitles from "./ResumeTitles";

function ResumeHobby() {
  return (
    <main>
      <section className={styles.resume_left_container}>
        {ResumeData.map(({ hobby }, index: any) => {
          return (
            <div className={styles.profile_data} key={index}>
              <ResumeTitles title={hobby} />
              {Hobby.map(({ name }, index: any) => {
                return (
                  <div
                    className={styles.skills_resume_left_container}
                    key={index}
                  >
                    <ResumeSkillsProps name={name} />
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

export default ResumeHobby;
