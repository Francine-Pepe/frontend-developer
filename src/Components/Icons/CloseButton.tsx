import React from "react";
import { Icon } from "@iconify/react";
import styles from './Icons.module.css'

function CloseButton() {
  return (
    <div>
      <button className={styles.button}>
        <Icon icon="jam:close" color="#4d4d4d" width="24" height="24" />
      </button>
    </div>
  );
}

export default CloseButton;
