import styles from "./Gallery.module.css";
import React, { useEffect, useState } from "react";

export default function Gallery({ images }) {
  const [showModal, setShowModal] = useState(false);
  const [modalSrc, setModalSrc] = useState(null);

  function openModal(imgSrc) {
    setShowModal(true);
    setModalSrc(imgSrc);
  }

  function divisionCriterium(images, columnNr) {
    const threePartIndex = Math.floor(images.length / 3);
    return threePartIndex * columnNr;
  }

  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.column}>
          {images.map((image, index) => {
            if (index >= 0 && index < divisionCriterium(images, 1)) {
              return (
                <img
                  key={index}
                  onClick={(e) => openModal(e.target.src)}
                  src={image}
                ></img>
              );
            }
          })}
        </div>
        <div className={styles.column}>
          {images.map((image, index) => {
            if (
              index >= divisionCriterium(images, 1) &&
              index < divisionCriterium(images, 2)
            ) {
              return (
                <img
                  key={index}
                  onClick={(e) => openModal(e.target.src)}
                  src={image}
                ></img>
              );
            }
          })}
        </div>
        <div className={styles.column}>
          {images.map((image, index) => {
            if (index >= divisionCriterium(images, 2)) {
              return (
                <img
                  key={index}
                  onClick={(e) => openModal(e.target.src)}
                  src={image}
                ></img>
              );
            }
          })}
        </div>
      </div>

      {/* Lightbox */}
      {showModal == true && (
        <div className={styles.modal} onClick={() => setShowModal(false)}>
          <span className={styles.close} onClick={() => setShowModal(false)}>
            &times;
          </span>
          <img src={modalSrc} />
        </div>
      )}
    </>
  );
}
