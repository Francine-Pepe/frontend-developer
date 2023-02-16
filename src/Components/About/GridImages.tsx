import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";
import styles from "./About.module.css";
import { carouselImages } from "../../data";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function GridImages() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        className={styles.image_container}
        justifyContent= "center"
      >
        {carouselImages.map((data, index) => (
          <Grid xs={2} sm={3} md={4} key={index}>
            <Button className={styles.about_button}>
              <Item className={styles.image_container}>
                <img
                  src={data.image}
                  srcSet={data.image}
                  alt={data.name}
                  loading="lazy"
                  className={styles.image}
                />
                <div className={styles.middle}>
                  <div className={styles.text}>
                    <p>{data.about}</p>
                  </div>
                </div>
              </Item>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
