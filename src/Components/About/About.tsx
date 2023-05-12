import React from "react";
import styles from "./About.module.css";
import { aboutText } from "../../data";
import GridImages from "./GridImages";
import TextRevealProps from "../Animations/TextRevealProps";

function About() {
  return (
    <>
      <main className={styles.about_container}>
        <section className={styles.caroussel_box}>
          <GridImages />
        </section>
        <section className={styles.about_text_box}>
          {aboutText.map((data, index) => {
            return (
              <div key={index}>
                <TextRevealProps title={data.title} />
                <p>{data.text}</p>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default About;
