import React from "react";
import styles from "./Resume.module.css";
import ResumeContentProps from "./ResumeContentProps";
import { ResumeData, CertificatedCourses } from "../../data";
import ResumeTitles from "./ResumeTitles";

function ResumeCertificatedCourses() {
  return (
    <main className={styles.resume_right_container}>
      <section className={styles.profile_data}>
        {ResumeData.map(({ certifications }, index: any) => {
          return (
            <div key={index}>
              <ResumeTitles title={certifications} />
              {CertificatedCourses.map(
                ({ id, icon, title, companyName, link, period }) => {
                  return (
                    <div key={id} className={styles.profile_data_courses}>
                      <div className={styles.courses_card}>
                        <ResumeContentProps
                          title={title}
                          icon={icon}
                          companyName={companyName}
                          link={link}
                          period={period}
                        />
                      </div>
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

export default ResumeCertificatedCourses;
