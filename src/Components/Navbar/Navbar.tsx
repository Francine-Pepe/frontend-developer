import React from "react";
import { NavLink } from "react-router-dom";
import { nav } from "../../data";
import styles from "./Navbar.module.css";
import Logo from "../../Assets/Logo_FrancinePepe.png";

function Navbar() {
  return (
    <div className={styles.navbar_container}>
        <img src={Logo} alt={"Logo"} className={styles.logo} />
      <ul className={styles.navbar_parent}>
        {nav.map((data) => {
          return (
            <>
              <NavLink to={data.link} key={data.id} className={styles.navbar}>
                <li >{data.name}</li>
              </NavLink>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
