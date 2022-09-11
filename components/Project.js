export default function Project({
  title,
  videosrc,
  subtitle,
  date,
  timespan,
  description,
  mainphoto,
}) {
  return (
    <>
      <h1 className="projectTitle">{title}</h1>
      <video
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
      ></video>
      <p className="projectSubtitle">{subtitle}</p>
      <p className="projectDate">{date}</p>
      <p className="projectTimespan">{timespan}</p>
      <p style={{ width: "60%" }}>{description}</p>
      <img src={mainphoto} style={{ width: "60%" }}></img>
    </>
  );
}
