import React from "react";
import { Icon } from "@iconify/react";
import styles from './Icons.module.css'

function Linkedin() {
  return (
    <div className={styles.linkedin}>
      <a
        href="https://www.linkedin.com/in/francinemelopepe/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon
          icon="basil:linkedin-solid"
          color="#060047"
          width="30"
          height="30"
        />
      </a>
    </div>
  );
}

export default Linkedin;
