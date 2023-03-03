import React from "react";
import styles from "./ProgressBar.module.css";

function ProgressBar(props: any) {
  const { completed } = props;

  const filled = {
    width: `${completed}%`,
    transition: "width 1s ease-in-out",
  };

  return (
    <div className={styles.progressBar_container}>
      <div className={styles.filled_container} style={filled}>
        <span> </span>
      </div>
    </div>
  );
}

export default ProgressBar;
