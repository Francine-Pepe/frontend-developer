import React from "react";
import styles from "./Animations.module.css";

function ProjectAnimation(props: any) {
  const { text, image } = props;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.typing_demo}>{text}</div>
        <div>{image}</div>
      </div>
      
    </>
  );
}

export default ProjectAnimation;
