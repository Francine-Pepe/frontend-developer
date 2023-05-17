import styles from "./Skills.module.css";
import { skillsDesign } from "../../data";
import ProgressBar from "../ProgressBar/ProgressBar";
import SkillsProps from "./SkillsProps";

function SkillsDesign() {
  return (
    <>
      <main className={styles.skills_main_box}>
        <div className={styles.skills}>
          <h2>Design and Development Tools</h2>
          {skillsDesign.map((data) => {
            return (
              <section className={styles.skills_container} key={data.id}>
                <div className={styles.skills_image}>
                  <SkillsProps image={data.image} name={data.name} />
                </div>
                <div className={styles.skills_progressBar}>
                  <ProgressBar completed={data.level} />
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default SkillsDesign;
