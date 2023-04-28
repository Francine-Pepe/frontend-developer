import { Component } from "react";
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
import ReactToPrint from "react-to-print";
import { Icon } from "@iconify/react";

export class Resume extends Component {
  componentRef: any;
  render() {
    return (
      <>
        <div>
          <ReactToPrint
            trigger={() => {
              return (
                <button className={styles.print}>
                  <span className={styles.print_text}>
                    <Icon icon="fxemoji:printericon" width="20" height="20" />
                    Print or Save this Resumé
                  </span>
                </button>
              );
            }}
            content={() => this.componentRef}
            documentTitle="Francine Pêpe - CV"
          />
        </div>
        <main
          className={styles.main_resume}
          ref={(el) => (this.componentRef = el)}
        >
          <div className={styles.resume_left_container}>
            <ResumeContact />
            <Links />
            <ResumeSkills />
            <ResumeDesign />
            <ResumeLanguages />
            <ResumeHobby />
          </div>
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
}

export default Resume;
