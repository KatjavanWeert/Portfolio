import Project from "@components/Project";
export default function ProjectPQ() {
  return (
    <Project
      title="Pubquiz@Home"
      subtitle="The experience of a local pubquiz on your own couch"
      mainphoto="/virtuallyunwrapped/virtuallyUnwrapped.jpg"
      videosrc="https://player.vimeo.com/video/401268352?h=cf01ba0d86"
      date="August 2020"
      timespan="Individual project of 15 weeks"
      description={
        <>
          <p>
            Due to the quarantine measures regarding the COVID-19 outbreak, bars
            are experiencing large financial difficulties. This project explores
            the possibilities for bars to generate additional income, while
            simultaneously bringing the participants in contact again with their
            outer social circle.
          </p>
          <p>
            By entering the received password into the website
            www.pubquizathome.azurewebsites.net (try 'jacks') the participants
            could join the live quiz. The quizmasters presented live from the
            bar in a livestream, and the scores were visualized in the form of
            an authentic Tilburgse Kermis camel race! The reactions to the quiz
            were unanimously positive.
          </p>
          <p>
            "This is by far the best digital connection during a quiz in recent
            time"
          </p>
          <p>"We were yelling to move our camel forward" </p>
        </>
      }
      description2={
        <>
          <p>
            In this project I designed and developed an interactive online pub
            quiz platform for my client cafe Jack's in Tilburg. For the quiz i
            built an animated camel race, a chatbox, an answer grading system, a
            'funny answer' highlighting system and a synchronized radio that
            could all be controlled live by the presenters of the quiz. The
            programming languages I used in this project were HTML, CSS &
            JavaScript and C# (.NET).
          </p>
        </>
      }
      images={[
        "/virtuallyunwrapped/vu1.png",
        "/virtuallyunwrapped/vu4.png",
        "/virtuallyunwrapped/vu2.png",
        "/virtuallyunwrapped/vu6.png",
        "/virtuallyunwrapped/vu3.png",
        "/virtuallyunwrapped/vu5.png",
      ]}
    />
  );
}
