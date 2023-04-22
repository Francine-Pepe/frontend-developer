import React from "react";
import styles from "./Resume.module.css";
import ResumeContact from "./ResumeContact";
import Links from "./Links";
import ResumeSkills from "./ResumeSkills";
import ResumeDesign from "./ResumeDesign";
import ResumeLanguages from "./ResumeLanguages";
import ResumeHobby from "./ResumeHobby";


function Resume() {
  return (
    <main>
      <section>
        <ResumeContact />
        <Links />
        <ResumeSkills />
        <ResumeDesign />
        <ResumeLanguages />
        <ResumeHobby />
      </section>
    </main>
  );
}

export default Resume;
