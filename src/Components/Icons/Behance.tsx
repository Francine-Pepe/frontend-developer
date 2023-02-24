import React from "react";
import { Icon } from "@iconify/react";
import styles from './Icons.module.css'


function Behance() {
  return (
    <div className={styles.behance}>
      <a
        href="https://www.behance.net/francinepepe"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon icon="bxl:behance" color="#060047" width="30" height="30" />
      </a>
    </div>
  );
}

export default Behance;
