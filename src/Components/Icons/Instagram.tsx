import React from "react";
import { Icon } from "@iconify/react";
import styles from './Icons.module.css'


function Instagram() {
  return (
    <div className={styles.instagram}>
      <a
        href="https://www.instagram.com/fran.e.a.canon.do.pai/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon icon="mdi:instagram" color="#060047" width="30" height="30" />
      </a>
    </div>
  );
}

export default Instagram;
