import React from "react";
import styles from "./Resume.module.css";

function ResumeTitles(props: any) {
  const { title } = props;
  return (
    <div className={styles.profile_data}>
      <h2>{title}</h2>
      <hr />
    </div>
  );
}

export default ResumeTitles;
