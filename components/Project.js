import Gallery from "./Gallery";
import styles from "./Project.module.css";
import { AnimatePresence, motion } from "framer-motion";
import ExpertiseBar from "./ExpertiseBar";

export default function Project({
  title,
  videosrc,
  videomediumIsVimeo = true,
  subtitle,
  date,
  timespan,
  description,
  mainphoto,
  description2,
  images,
  expertises,
}) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
        >
          <div className="container">
            <div className={styles.projectHeader}>
              <div>
                <img src={mainphoto}></img>
              </div>
              <div className={styles.infoBanner}>
                <div className={styles.projectTitle}>{title}</div>
                <p className={styles.projectSubtitle}>{subtitle}</p>
              </div>
            </div>
            <div className={styles.projectDetails}>
              <div>{date}</div>
              <div>{timespan}</div>
            </div>
            {expertises != null && <ExpertiseBar expertises={expertises} />}
            <div className={styles.projectContainer}>
              <div className="container">
                <div className={styles.projectDescription}>{description}</div>
                <div className={styles.iframeContainer}>
                  <iframe
                    width="560"
                    height="315"
                    src={
                      videomediumIsVimeo
                        ? videosrc +
                          "&amp;autoplay=1&amp;loop=1&amp;autopause=1&amp;muted=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;dnt=1"
                        : videosrc + "&autohide=1&controls=0&rel=0&loop=1"
                    }
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </div>
                <div className={styles.projectDescription}>{description2}</div>
                <Gallery images={images}></Gallery>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

{
  /* <video
        src={videosrc}
        width="1920"
        height="1080"
        controls
        autoPlay
        loop
        muted
        style={{
          width: "60%",
          height: "auto",
          objectFit: "contain",
        }}
      ></video> */
}
