import Gallery from "./Gallery";
import styles from "./Project.module.css";

export default function Project({
  title,
  videosrc,
  subtitle,
  date,
  timespan,
  description,
  mainphoto,
  description2,
  images,
}) {
  return (
    <>
      <div className={styles.projectContainer}>
        <div className={styles.projectTitle}>{title}</div>
        <p className={styles.projectSubtitle}>{subtitle}</p>
        <div className={styles.projectDate}>{date}</div>
        <div className={styles.projectTimespan}>{timespan}</div>
        <img
          style={{ maxWidth: "100%", maxHeight: "80vh" }}
          src={mainphoto}
        ></img>

        <div className={styles.projectDescription}>{description}</div>
        <div
          style={{
            width: "100%",
            height: "0",
            position: "relative",
            paddingTop: "56.25%",
          }}
        >
          <iframe
            width="560"
            height="315"
            src={
              videosrc +
              "&amp;autoplay=1&amp;loop=1&amp;autopause=1&amp;muted=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;dnt=1"
            }
            // src={videosrc + "?autoplay=1&autohide=1&controls=0&rel=0&loop=1"}
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
        {description2}
        <Gallery images={images}></Gallery>
      </div>
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
