import React from "react";
import styles from "./Contact.module.css";
import { ContactPage } from "../../data";
import ContactForm from "./ContactForm";
import TextReveal from "../Animations/TextRevealProps";

function Contact() {
  return (
    <main className={styles.paper_container}>
      {ContactPage.map((data, index) => {
        return (
          <section className={styles.contact_left_container} key={index}>
            <TextReveal title={data.title} />
            <p>{data.text}</p>
            <picture>
              <img src={data.image} alt="/" />
            </picture>
          </section>
        );
      })}
      <section className={styles.contact_right_container}>
        <div className={styles.contact_form}>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

export default Contact;
