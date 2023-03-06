import styles from "./Skills.module.css";
import { skillsFrontend } from "../../data";
import ProgressBar from "../ProgressBar/ProgressBar";
import SkillsProps from "./SkillsProps";

function SkillsFrontend() {
  return (
    <>
      <main className={styles.skills_main}>
        <div className={styles.skills}>
          <h3>Frontend development</h3>
          {skillsFrontend.map((data) => {
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

export default SkillsFrontend;
