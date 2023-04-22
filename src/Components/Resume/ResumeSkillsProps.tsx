import React from "react";
import styles from "./Resume.module.css";

function ResumeSkillsProps(props: any) {
  const { title, name } = props;

  return (
    <main>
      <section>
        <div className={styles.resume_skills_container}>
          <h3>{title}</h3>
          <h3>{name}</h3>
        </div>
      </section>
    </main>
  );
}

export default ResumeSkillsProps;
