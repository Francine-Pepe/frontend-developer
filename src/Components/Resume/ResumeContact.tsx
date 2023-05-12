import React from "react";
import styles from "./Resume.module.css";
import { ResumeData, Contact } from "../../data";
import ResumeTitles from "./ResumeTitles";

function ResumeContact() {
  return (
    <main className={styles.resume_left_container}>
      <section>
        {ResumeData.map(({ image, name, title, contact }, index: any) => {
          return (
            <div className={styles.resume_contact} key={index}>
              <img src={image} alt="/" className={styles.profile_picture} />
              <div className={styles.profile_square}></div>
              <div className={styles.profile_information}>
                <h2>{name}</h2>
                <h3>{title}</h3>
              </div>
              <div className={styles.profile_data}>
                <ResumeTitles title={contact} />
                {Contact.map(({ id, icon, link, information }) => {
                  return (
                    <div className={styles.profile_data_contact} key={id}>
                      {icon}
                      <a href={link}>
                        <h3 className={styles.information}>{information}</h3>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default ResumeContact;
