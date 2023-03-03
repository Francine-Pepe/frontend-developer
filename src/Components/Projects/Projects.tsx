import styles from "./Projects.module.css";
import { ProjectsDataLeft, ProjectsDataRight } from "../../data";
import ProjectAnimation from "../Animations/ProjectAnimation";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  height: "25rem",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Projects() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <main className={styles.project_main_container}>
        <section className={styles.project_transition_box}>
          <div className={styles.project_title}>
            <ProjectAnimation />
          </div>
        </section>
        <section className={styles.projects_container}>
          <div className={styles.projects_left}>
            {ProjectsDataLeft.map((data, index) => {
              return (
                <div
                  className={styles.project_image_container_left}
                  key={index}
                >
                  <h3>{data.name}</h3>
                  <button onClick={handleOpen}>
                    <img
                      src={data.image}
                      alt={data.name}
                      key={data.id}
                      className={styles.image}
                    />
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          {data.description}
                        </Typography>
                      </Box>
                    </Modal>
                  </button>
                  <div className={styles.buttons_container}>
                    <a href={data.visit} target="_blank" rel="noreferrer">
                      <button>Live demo</button>
                    </a>
                    <a href={data.repo} target="_blank" rel="noreferrer">
                      <button>Repo</button>
                    </a>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
          <div className={styles.projects_right}>
            {ProjectsDataRight.map((data, index) => {
              return (
                <div className={styles.project_image_container_right}>
                  <h3>{data.name}</h3>
                  <button onClick={handleOpen}>
                    <img src={data.image} alt={data.name} key={data.id} />
                  </button>
                  <div className={styles.buttons_container}>
                    <a href={data.visit} target="_blank" rel="noreferrer">
                      <button>Live demo</button>
                    </a>
                    <a href={data.repo} target="_blank" rel="noreferrer">
                      <button>Repo</button>
                    </a>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default Projects;
