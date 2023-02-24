import React from "react";
import { Icon } from "@iconify/react";
import styles from './Icons.module.css'


function Github() {
  return (
    <div className={styles.github}>
      <a
        href="https://github.com/Francine-Pepe"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon icon="mdi:github" color="#060047" width="30" height="30" />
      </a>
    </div>
  );
}

export default Github;
