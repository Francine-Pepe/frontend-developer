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
                <div id={styles.listando_badge}>
                  <a
                    href="https://www.listando.de/hamburg/hamburg/FHPOV50AE6/webdesign/francine-melo-ppe-/tkit1VdHyT"
                    rel="noopener"
                  >
                    <img
                      alt="Webdesigner auf Listando"
                      src="https://listando.s3.eu-central-1.amazonaws.com/logo/badge/listando_topexperte_badge.png"
                      width="130"
                      height="130"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default About;
