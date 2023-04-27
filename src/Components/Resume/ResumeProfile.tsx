import React from "react";
import styles from "./Resume.module.css";
import { ResumeData, Profile } from "../../data";
import ResumeTitles from "./ResumeTitles";

function ResumeProfile() {
  return (
    <main className={styles.resume_right_container}>
      <section className={styles.profile_data}>
        {ResumeData.map(({ profile }, index: any) => {
          return (
            <div key={index}>
              <ResumeTitles title={profile} />
              {Profile.map(({ description }, index: any) => {
                return (
                  <div key={index}>
                    <p>{description}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default ResumeProfile;
