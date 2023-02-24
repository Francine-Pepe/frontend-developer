import React from "react";
import { Icon } from "@iconify/react";
import styles from './Icons.module.css'


function Resumé() {
  const onButtonClick = () => {
    fetch("Francine_Pêpe_CV.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Francine_Pêpe_CV.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className={styles.resume}>
      <a
        href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:c4e972e9-8e9f-35bb-b9de-1bef646f3c91"
        target="_blank"
        rel="noreferrer noopener"
        download
        onClick={onButtonClick}
      >
        <Icon icon="carbon:document" color="#060047" width="30" height="30" />
      </a>
    </div>
  );
}

export default Resumé;
