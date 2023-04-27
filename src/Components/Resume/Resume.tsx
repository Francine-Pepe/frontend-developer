import React from "react";
import styles from "./Resume.module.css";
import ResumeContact from "./ResumeContact";
import Links from "./Links";
import ResumeSkills from "./ResumeSkills";
import ResumeDesign from "./ResumeDesign";
import ResumeLanguages from "./ResumeLanguages";
import ResumeHobby from "./ResumeHobby";
import ResumeProfile from "./ResumeProfile";
import ResumeExperience from "./ResumeExperience";
import ResumeEducation from "./ResumeEducation";
import ResumeCertificatedCourses from "./ResumeCertificatedCourses";

function Resume() {

  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const currentMonth = new Date(today).getMonth();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <main className={styles.main_resume}>
        <section className={styles.resume_left_container}>
          <ResumeContact />
          <Links />
          <ResumeSkills />
          <ResumeDesign />
          <ResumeLanguages />
          <ResumeHobby />
          <section>
            Germany, {currentMonth} {currentYear}
          </section>
        </section>
        <section className={styles.resume_right_container}>
          <ResumeProfile />
          <ResumeExperience />
          <ResumeEducation />
          <ResumeCertificatedCourses />
        </section>
      </main>
      <main className={styles.main_resume_mobile}>
        <section className={styles.resume_right_container}>
          <ResumeContact />
          <ResumeProfile />
          <ResumeExperience />
          <ResumeEducation />
          <ResumeCertificatedCourses />
          <section>
            Germany, {currentMonth} {currentYear}
          </section>
        </section>
        <section className={styles.resume_left_container}>
          <Links />
          <ResumeSkills />
          <ResumeDesign />
          <ResumeLanguages />
          <ResumeHobby />
        </section>
      </main>
    </>
  );
}

export default Resume;
