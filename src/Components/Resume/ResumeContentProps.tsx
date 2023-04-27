import React from "react";
import styles from "./Resume.module.css";

function ResumeContentProps(props: any) {
  const { id, icon, title, companyName, link, period, description } = props;

  return (
    <main className={styles.right_main_container} key={id}>
      <section className={styles.resume_sections}>
        <div className={styles.experience_container}>
          {icon} 
          <h3> {title} </h3>
        </div>

        <a href={link} target="_blank" rel="noreferrer">
          <h4>{companyName} </h4>
        </a>
        <h4>Period: {period}</h4>
        <p>{description}</p>
        <br />
      </section>
    </main>
  );
}

export default ResumeContentProps;
