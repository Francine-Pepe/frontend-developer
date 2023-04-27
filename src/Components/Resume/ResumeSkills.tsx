import React from "react";
import styles from "./Resume.module.css";
import ResumeSkillsProps from "./ResumeSkillsProps";
import { ResumeData, TechSkills } from "../../data";
import ResumeProgressBar from "../ProgressBar/ResumeProgressBar";
import ResumeTitles from "./ResumeTitles";

function ResumeSkills() {
  return (
    <main>
      <section className={styles.resume_left_container}>
        {ResumeData.map(({ tech }, index) => {
          return (
            <div className={styles.profile_data} key={index}>
              <ResumeTitles title={tech} />
              {TechSkills.map(({ id, name, level }) => {
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

export default ResumeSkills;
