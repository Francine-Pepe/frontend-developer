import styles from "./Skills.module.css";
import SkillsTabs from "./SkillsTabs";

declare module "*.svg" {
  const value: string;
}

function Skills() {
  return (
    <>
      <main className={styles.skills_main}>
        <SkillsTabs />
      </main>
    </>
  );
}

export default Skills;
