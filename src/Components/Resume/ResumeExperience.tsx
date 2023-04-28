import React from "react";
import styles from "./Resume.module.css";
import ResumeContentProps from "./ResumeContentProps";
import { ResumeData, Experience } from "../../data";
import ResumeTitles from "./ResumeTitles";

function ResumeExperience() {
  return (
    <main className={styles.resume_right_container}>
      <section className={styles.profile_data}>
        {ResumeData.map(({ experience }, index: any) => {
          return (
            <div key={index}>
              <ResumeTitles title={experience} />
              {Experience.map(
                ({ id, icon, title, companyName, link, period, description }) => {
                  return (
                    <div key={id}>
                      <ResumeContentProps
                        icon={icon}
                        title={title}
                        companyName={companyName}
                        link={link}
                        period={period}
                        description={description}
                      />
                    </div>
                  );
                }
              )}
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default ResumeExperience;
