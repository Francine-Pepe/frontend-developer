import React, { useState } from "react";
import styles from "./ProgressBar.module.css";

function ResumeProgressBar(props: any) {
  const { completed } = props;

  const [visible, setVisible] = useState(false);

  

  const filled = {
    width: `${completed}%`,
    // display: `${completed === 0}%` ? "none" : "block",
    transition: "width 1s ease-in-out",
  };

  return (
    <div className={styles.resume_progressBar_container}>
      <div className={styles.resume_filled_container} style={filled}>
        <span > </span>
      </div>
    </div>
  );
}

export default ResumeProgressBar;
function className(arg0: string) {
  throw new Error("Function not implemented.");
}
