import React, { useState, useEffect } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./Skills.module.css";
import { skillsFrontend, skillsDesign, skillsDevelopment } from "../../data";
import SkillsProps from "./SkillsProps";

declare module "*.svg" {
  const value: string;
}

function Skills() {
  const [complete, setComplete] = useState(0);

  useEffect(() => {
    setInterval(() => setComplete(Math.floor(Math.random() * 100) + 1), 2000);
  });
  return (
    <>
      <main className={styles.skills_main}>
        <div className={styles.skills}>
          <h2>Frontend development</h2>
          {skillsFrontend.map((data) => {
            return (
              <>
                <section className={styles.skills_container} key={data.id}>
                  <div className={styles.skills_image}>
                    <SkillsProps image={data.image} name={data.name} />
                  </div>
                  <div className={styles.skills_progressBar}>
                    <ProgressBar completed={data.level} complete={complete} />
                  </div>
                </section>
              </>
            );
          })}
        </div>
        <div className={styles.skills}>
          <h2>Design and Agile</h2>
          {skillsDesign.map((data) => {
            return (
              <>
                <section className={styles.skills_container} key={data.id}>
                  <div className={styles.skills_image}>
                    <SkillsProps image={data.image} name={data.name} />
                  </div>
                  <div className={styles.skills_progressBar}>
                    <ProgressBar completed={data.level} />
                  </div>
                </section>
              </>
            );
          })}
        </div>
        <div className={styles.skills}>
          <h2>Development Tools</h2>
          {skillsDevelopment.map((data) => {
            return (
              <>
                <section className={styles.skills_container} key={data.id}>
                  <div className={styles.skills_image}>
                    <SkillsProps image={data.image} name={data.name} />
                  </div>
                  <div className={styles.skills_progressBar}>
                    <ProgressBar completed={data.level} />
                  </div>
                </section>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Skills;
