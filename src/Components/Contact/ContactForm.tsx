import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { ContactFormData } from "../../data";
import swal from "sweetalert";

function ContactForm() {
  const form = useRef(null);

  const sendEmail = (e: {
    target: any | HTMLFormElement;
    preventDefault: () => void;
  }) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2q4mln6",
        "template_c3vunb6",
        e.target,
        "user_YeUwC6WQsK1xiMGVBrKzC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <main className={styles.contactForm_container}>
      <form ref={form} onSubmit={sendEmail}>
        {ContactFormData.map(
          ({ id, title, htmlFor, name, type, placeholder }) => {
            return (
              <div className={styles.contact_inputs} key={id}>
                <label htmlFor={htmlFor}>{title}</label>
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  required
                  min="2"
                />
              </div>
            );
          }
        )}
        <div className={styles.contact_inputs}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required />
        </div>

        <button
          className={styles.contact_button}
          type="submit"
          value="Send"
          onClick={() =>
            swal({
              text: "Thanks for contacting me! I will get back to you soon! 📧",
              icon: "success",
            })
          }
        >
          Send
        </button>
      </form>
    </main>
  );
}

export default ContactForm;
