import { NavLink } from "react-router-dom";
import { nav } from "../../data";
import styles from "./Navbar.module.css";
import Logo from "../../Assets/FrancinePêpe_logo.png";
import NavbarMobile from "./NavbarMobile";

function Navbar() {
  return (
    <section className={styles.nav}>
      <nav className={styles.navbar_container}>
        <NavLink to={"/"} className={styles.logo_link}>
          <img src={Logo} alt={"Logo"} className={styles.logo} />
        </NavLink>

        <div className={styles.navbar}>
          <ul >
            {nav.map((data) => {
              return (
                <NavLink to={data.link} key={data.index} className={styles.item}>
                  <li className={styles.linktext}>{data.name}</li>
                </NavLink>
              );
            })}
          </ul>
        </div>
        <div className={styles.navbar_mobile_container}>
          <NavbarMobile />
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
