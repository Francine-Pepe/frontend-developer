import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { NavLink } from "react-router-dom";
import { nav } from "../../data";
import styles from "./Navbar.module.css";
import Hambuger from "../Icons/Hambuger";
import CloseButton from "../Icons/CloseButton";

const ITEM_HEIGHT = 80;

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
        {open ? <CloseButton /> : <Hambuger /> }
      </IconButton>
      <Menu
      className={styles.mui_menu}
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
          disablePadding: true
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <div className={styles.navbar_mobile}>
          <ul className={styles.list}>
            {nav.map((data, index) => {
              return (
                <>
                  <NavLink to={data.link} key={index}>
                    <li>{data.name}</li>
                    {/* <Divider className={styles.divider} /> */}
                  </NavLink>
                </>
              );
            })}
          </ul>
        </div>
      </Menu>
    </div>
  );
}
