export default function ExpertiseBar({ expertises }) {
  const expertiseArr = expertises;
  console.log(expertiseArr);
  return (
    <>
      <div
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          padding: "1rem",
        }}
      >
        {expertiseArr.map((expertise) => {
          return (
            <div
              key={expertise.title}
              style={{
                textAlign: "center",
                fontFamily: "Gloria Hallelujah, cursive",
              }}
            >
              <img src={expertise.logo} width="60"></img>
              <div>{expertise.title}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
