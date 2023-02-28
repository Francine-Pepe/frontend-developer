import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import styles from "./About.module.css";
import { useState, useCallback } from "react";
import { render } from "react-dom";
import ImageViewer from "react-simple-image-viewer";
import { carouselImages, ModalImages } from "../../data";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  // padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  
}));

export default function GridImages() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const images = ModalImages;

  const openImageViewer = useCallback((index: React.SetStateAction<number>) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        className={styles.grid_image_container}
        justifyContent="center"
      >
        {carouselImages.map((data, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Item className={styles.image_container}>
              <img
                srcSet={data.image}
                alt={data.name}
                loading="lazy"
                className={styles.image}
                onClick={() => openImageViewer(index)}
              />
              <div className={styles.middle}>
                <div className={styles.text}>
                  <p>{data.about}</p>
                </div>
              </div>
            </Item>
          </Grid>
        ))}
        {isViewerOpen && (
          <>
            <ImageViewer
              src={images}
              currentIndex={currentImage}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
            />
            {/* <h5>{caption}</h5> */}
          </>
        )}
      </Grid>
    </Box>
  );
}
