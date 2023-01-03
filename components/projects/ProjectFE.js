import Project from "@components/Project";
export default function ProjectFE() {
  return (
    <Project
      title="Virtual Festival Experiences"
      subtitle="An analysis investigating the business potential of creative online festival experience alternatives"
      mainphoto="/virtualfestivalexperiences/virtualfestivalexperiences.jpg"
      videosrc="https://player.vimeo.com/video/757623710?h=5157897614"
      date="Finished in February 2022"
      timespan="Individual project of 15 weeks"
      description={
        <>
          <p>
            During the COVID-19 pandemic, many festivals turned to a virtual
            format to sustain their revenue. This online format has endless
            monetization possibilities due to unlimited capacity, low entry
            threshold and location independence.
          </p>
          <p>
            The current solutions that these festivals use are still rather
            arbitrary, not taking into account the aesthetical journey into the
            virtual dimension. The execution is often mainly focused on simple
            concepts such as Twitch streaming, with some exceptional events
            providing a festival-at-home package or an AR overlay.
          </p>
          <p>
            As 250K is a company that is focused on delivering shows and
            designing high-quality 3D stages using innovative technologies, they
            can adapt and tap into a new virtual market.
          </p>
          <p>
            Using various business tools such as the DFV framework, SWOT
            analysis, value proposition, competitor analyses and more, a
            business case is investigated for 250K that is substantiated by
            literature research, interviews, surveys and co-design sessions.
          </p>
        </>
      }
      description2={
        <>
          <p></p>
        </>
      }
      images={[
        "/virtualfestivalexperiences/fe1.jpg",
        "/virtualfestivalexperiences/fe4.png",
        "/virtualfestivalexperiences/fe2.jpg",
        "/virtualfestivalexperiences/fe5.png",
        "/virtualfestivalexperiences/fe3.jpg",
        "/virtualfestivalexperiences/fe6.png",
      ]}
      expertises={[
        { title: "Video", logo: "/video.png" },
        { title: "User Test", logo: "/usertest.png" },
        { title: "Graphics", logo: "/graphics.png" },
        { title: "Literature", logo: "/literature.png" },
      ]}
    />
  );
}
