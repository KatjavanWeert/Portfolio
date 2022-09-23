import Project from "@components/Project";
export default function ProjectRP() {
  return (
    <Project
      title="Project RedPill"
      subtitle="Simulation or Reality?"
      mainphoto="/projectredpill/projectredpill.jpg"
      videosrc="https://player.vimeo.com/video/752870310?h=fbd0954b12"
      date="Finished in February 2021"
      timespan="Individual project of 15 weeks"
      description={
        <>
          <p>
            In this exploratory study a thought-provoking projected augmented
            reality game was created to examine the relation between the
            'virtual space' and 'reality space'. Through interaction with a
            tangible controller, the benefits and obstacles that tangible
            interaction has on the presence that the players experience are
            analyzed.
          </p>
          <p>
            The narrative of the game revolves around the thought experiment
            that argues that everyone lives in a simulation without knowing it.
            During the game, the players are hacking into this simulation
            through physical interaction. In the experiment the participant
            needed to play the game two times: once with active interaction, and
            once in a passive way. Afterwards they did an elaboration exercise
            and answered interview questions.
          </p>
          <p>
            The main results of the study are three theories that attempt to
            explain the relations between the reality and real spaces and
            hypotheses on which elements can make players feel more present in
            the context of projected AR.
          </p>
        </>
      }
      description2={
        <>
          <p>
            In project Redpill I combined my professional skills in qualitative
            academic research and aesthetical vision to create a conceptual
            model of people's perception of reality in a blended reality
            setting. During this project I developed the main theme of my
            vision: merging the physical and virtual realities. It has therefore
            had a strong impact on all projects that followed.
          </p>
          <p>
            A physical prototype was created in combination with a projected
            virtual animation to effectively spark the imagination of the
            research participants, attempting to make them feel and engage in
            the blended reality.
          </p>
        </>
      }
      images={[
        "/projectredpill/rp2.jpg",
        "/projectredpill/rp1.jpg",
        "/projectredpill/rp3.jpg",
      ]}
    />
  );
}
