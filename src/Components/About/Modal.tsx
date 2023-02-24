import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import ImageViewer from "react-simple-image-viewer";
import { carouselImages, ModalImages } from "../../data";
import styles from "./About.module.css";

function Modal() {
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
    <div className={styles.image_container}>
      {carouselImages.map((data, index) => (
        <img
          src={data.image}
          onClick={() => openImageViewer(index)}
          // width="300"
          key={index}
          // style={{ margin: "2px" }}
          alt=""
          className={styles.image}
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
}

export default Modal;
