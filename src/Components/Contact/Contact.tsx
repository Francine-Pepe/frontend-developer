import React from "react";
import styles from "./Contact.module.css";
import { ContactPage } from "../../data";
import Envelope from "../Animations/Envelope";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <main className={styles.paper_container}>
      {ContactPage.map((data, index) => {
        return (
          <section className={styles.contact_left_container} key={index}>
            <h1>{data.title}</h1>
            <p>{data.text}</p>
            <div className={styles.contact_animation}>
              <a href={data.link}>
                <Envelope />
              </a>
            </div>
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
