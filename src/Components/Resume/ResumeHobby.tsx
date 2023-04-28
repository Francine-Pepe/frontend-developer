import React from "react";
import styles from "./Resume.module.css";
import ResumeSkillsProps from "./ResumeSkillsProps";
import { ResumeData, Hobby } from "../../data";
import ResumeTitles from "./ResumeTitles";

function ResumeHobby() {
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  const currentYear = new Date().getFullYear();

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
              <section className={styles.resume_date}>
                <h4>
                  Germany, {month} {currentYear}
                </h4>
              </section>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default ResumeHobby;
