import React from "react";
import styles from "./Resume.module.css";
import { ResumeData, Contact } from "../../data";

function ResumeContact() {
  return (
    <main className={styles.resume_container}>
      <section className={styles.resume}>
        {ResumeData.map((data, index: any) => {
          return (
            <>
              <div className={styles.resume_left_container} key={index}>
                <img
                  src={data.image}
                  alt=""
                  className={styles.profile_picture}
                />
                <div className={styles.profile_square}></div>
                <div className={styles.profile_information}>
                  <h2>{data.name}</h2>
                  <h3>{data.title}</h3>
                </div>
                <div className={styles.profile_data}>
                  <h3>{data.contact}</h3>
                  <hr />
                  {Contact.map((data, index) => {
                    return (
                      <>
                        <div
                          className={styles.profile_data_contact}
                          key={index}
                        >
                          {data.icon}
                          <a href={data.link}>
                            <h3 className={styles.information}>
                              {data.information}
                            </h3>
                          </a>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className={styles.resume_right_container}></div>
            </>
          );
        })}
      </section>
    </main>
  );
}

export default ResumeContact;
