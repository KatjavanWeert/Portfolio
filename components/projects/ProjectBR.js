import Project from "@components/Project";
export default function ProjectBR() {
  return (
    <Project
      title="The Ballroom"
      subtitle="Dancing with Light"
      mainphoto="/ballroom/ballroom.jpeg"
      videosrc="https://www.youtube.com/embed/ED3vfTUI9Cc?start=05"
      videomediumIsVimeo={false}
      date="Finished in November 2021"
      timespan="Team project (15 people) of 1 year"
      description={
        <>
          <p>
            The social cohesion between individuals within public spaces has
            decreased significantly due to the COVID-19 pandemic. In
            collaboration with Philip Ross, Team IGNITE, a student team of
            InnovationSpace at the TU/e, created "The Ballroom". With this
            installation we hope to restore the connections between the
            individual visitors of GLOW2021.
          </p>
          <p>
            In “The Ballroom” it was possible to dance with each other as well
            with one of the 12 sparkling dance partners. These dance partners,
            in the form of beams of light, were gracefully looking for a dance
            partner who wanted to take a dance with them on the music performed
            and recorded by ESMG Quadrivium.
          </p>
          <p>
            The visitors were detected using infrared sensors from the Crowdflow
            Research Group of the TU/e. The result is a modern ballroom
            festively filled with color, music and dance. See here the
            aftermovie of GLOW2021 and enjoy “The Ballroom” once again!
          </p>
          <p>
            This installation won the <b>Crowe Talent Award 2021</b> at GLOW,
            which is decided by receiving the most votes of the GLOW audience.
          </p>
        </>
      }
      description2={
        <>
          <p>
            In this project I was mostly involved in the conceptual stage of the
            design process. I managed the structure of the ideation process and
            prepared brainstorm sessions for large groups. I also gave design
            workshops to the engineers in the team, so that they could also
            participate in the early stages of ideation.
          </p>
          <p>
            In the realization process I was involved in exploring the details
            of the user interaction with the behaviour of the light beams in
            color, motion and intensity. I was also involved in exploring the
            aesthetics of the atmosphere that is created through the interaction
            between music and light properties.
          </p>
        </>
      }
      images={[
        "/ballroom/br1.jpg",
        "/ballroom/br4.jpg",
        "/ballroom/br3.jpg",
        "/ballroom/br5.jpg",
        "/ballroom/br2.jpg",
        "/ballroom/br6.jpg",
      ]}
      expertises={[
        { title: "User Test", logo: "/usertest.png" },
        { title: "UX/UI", logo: "/ux.png" },
        { title: "Literature", logo: "/literature.png" },
        { title: "Graphics", logo: "/graphics.png" },
        { title: "Gameplay", logo: "/gameplay.png" },
      ]}
    />
  );
}
