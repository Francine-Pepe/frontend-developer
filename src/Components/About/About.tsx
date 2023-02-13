import React from "react";
import styles from "./About.module.css";
import { aboutText } from "../../data";
function About() {
  return (
    <>
      <main className={styles.about_container}>
        <section className={styles.caroussel_box}>
          <h1>Caroussel</h1>
        </section>
        <section className={styles.about_text_box}>
          {aboutText.map((data, index) => {
            return (
              <>
                <h1 key={index}>{data.title}</h1>
              </>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default About;
