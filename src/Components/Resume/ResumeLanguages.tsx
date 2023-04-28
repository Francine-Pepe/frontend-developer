import React from "react";
import styles from "./Resume.module.css";
import ResumeSkillsProps from "./ResumeSkillsProps";
import { ResumeData, Languages } from "../../data";
import ResumeProgressBar from "../ProgressBar/ResumeProgressBar";
import ResumeTitles from "./ResumeTitles";

function ResumeLanguages() {
  return (
    <main>
      <section className={styles.resume_left_container}>
        {ResumeData.map(({ languages }, index: any) => {
          return (
            <div className={styles.profile_data} key={index}>
              <ResumeTitles title={languages} />
              {Languages.map(({ id, name, level }) => {
                return (
                  <div className={styles.skills_resume_left_container} key={id}>
                    <ResumeSkillsProps name={name} />
                    <ResumeProgressBar completed={level} />
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

export default ResumeLanguages;
