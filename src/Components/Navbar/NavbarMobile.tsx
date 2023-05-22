import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { NavLink } from "react-router-dom";
import { nav } from "../../data";
import styles from "./Navbar.module.css";
import Hambuger from "../Icons/Hambuger";
import CloseButton from "../Icons/CloseButton";

const ITEM_HEIGHT = 100;
const ITEM_WIDTH = 100;

export default function NavbarMobile() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {open ? <CloseButton /> : <Hambuger />}
      </IconButton>

      <Menu
        className={styles.mui_menu}
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
          disablePadding: true,
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            minHeight: ITEM_HEIGHT * 4.5,
            minWidth: ITEM_WIDTH,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "0 0 5px 5px",
            background: "#f8f8f8",
          },
        }}
      >
        <div className={styles.navbar_mobile}>
          <section className={styles.nav}>
            <nav>
              <ul className={styles.list}>
                {nav.map((data) => {
                  return (
                    <NavLink
                      to={data.link}
                      key={data.index}
                      className={styles.item}
                    >
                      <li className={styles.linktext}>{data.name}</li>
                    </NavLink>
                  );
                })}
              </ul>
            </nav>
          </section>
        </div>
      </Menu>
    </div>
  );
}
