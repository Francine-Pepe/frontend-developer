import React, { useState, useEffect } from "react";
import styles from "./Skills.module.css";
import { skillsDevelopment } from "../../data";
import ProgressBar from "../ProgressBar/ProgressBar";
import SkillsProps from "./SkillsProps";

function SkillsDevelopment() {
  return (
    <>
      <main className={styles.skills_main}>
        <div className={styles.skills}>
          <h3>Development Tools</h3>
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

export default SkillsDevelopment;
