import React from "react";
import styles from "./Footer.module.css";
import Linkedin from "../Icons/Linkedin";
import Github from "../Icons/Github";
import Behance from "../Icons/Behance";
import Instagram from "../Icons/Instagram";
import Resumé from "../Icons/Resumé";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  
  return (
    <footer className={styles.footer_main_container}>
      <section className={styles.footer_social_icons_container}>
        <Linkedin />
        <Github />
        <Behance />
        <Instagram />
        <Resumé />
      </section>
      <section>
        <small>&copy; Copyright {getCurrentYear()} - Francine Pêpe</small>
      </section>
    </footer>
  );
}

export default Footer;
