import Gallery from "./Gallery";

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
      <div className="container" style={{ width: "60%" }}>
        <h1 className="projectTitle">{title}</h1>
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
            src={videosrc + "?autoplay=1&autohide=1&controls=0&rel=0&loop=1"}
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

        {/* <video
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
      ></video> */}
        <p className="projectSubtitle">{subtitle}</p>
        <p className="projectDate">{date}</p>
        <p className="projectTimespan">{timespan}</p>
        <p>{description}</p>
        <img style={{ width: "100%" }} src={mainphoto}></img>
        <p>{description2}</p>
        <Gallery images={images}></Gallery>
      </div>
    </>
  );
}
