import React from "react";
import styles from "./Resume.module.css";
import ResumeContentProps from "./ResumeContentProps";
import { ResumeData, Education } from "../../data";
import ResumeTitles from "./ResumeTitles";

function ResumeEducation() {
  return (
    <main className={styles.resume_right_container}>
      <section className={styles.profile_data}>
        {ResumeData.map(({ education }, index: any) => {
          return (
            <div key={index}>
              <ResumeTitles title={education} />
              {Education.map(
                ({
                  id,
                  icon,
                  title,
                  companyName,
                  link,
                  period,
                  description,
                }) => {
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

export default ResumeEducation;
