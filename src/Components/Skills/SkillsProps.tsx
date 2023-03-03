import React from "react";
import styles from "./Skills.module.css";

function SkillsProps(props: any) {
  const { title, image, name } = props;

  return (
    <>
      <div className={styles.skillsProps_container}>
        <h2>{title}</h2>
        <div>{image}</div>
        <div className={styles.hidden}>
          <h5 className={styles.skills_name}>{name}</h5>
        </div>
      </div>
    </>
  );
}

export default SkillsProps;
