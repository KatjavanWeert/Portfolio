import styles from "./Gallery.module.css";

export default function Gallery() {
  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.column}>
          <img src="\virtuallyUnwrapped.jpg"></img>
          <img src="\CulturalProbe.png"></img>
          <img src="\virtuallyUnwrapped.jpg"></img>
          <img src="\virtuallyUnwrapped.jpg"></img>
          <img src="\virtuallyUnwrapped.jpg"></img>
        </div>
        <div className={styles.column}>
          <img src="\virtuallyUnwrapped.jpg"></img>
          <img src="\virtuallyUnwrapped.jpg"></img>
          <img src="\virtuallyUnwrapped.jpg"></img>
          <img src="\virtuallyUnwrapped.jpg"></img>
        </div>
        <div className={styles.column}>
          <img src="\CulturalProbe.png"></img>
          <img src="\virtuallyUnwrapped.jpg"></img>
          <img src="\virtuallyUnwrapped.jpg"></img>
          <img src="\CulturalProbe.png"></img>
          <img src="\virtuallyUnwrapped.jpg"></img>
        </div>
      </div>
    </>
  );
}
