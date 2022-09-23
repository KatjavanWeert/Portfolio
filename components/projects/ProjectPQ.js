import Project from "@components/Project";
export default function ProjectPQ() {
  return (
    <Project
      title="Pubquiz@Home"
      subtitle="The experience of a local pubquiz on your own couch"
      mainphoto="/pubquizathome/pubquizathome.png"
      videosrc="https://player.vimeo.com/video/752888907?h=5794c5f161"
      date="Finished in August 2020"
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
        "/pubquizathome/pq4.jpeg",
        "/pubquizathome/pq1.jpeg",
        "/pubquizathome/pq5.jpeg",
        "/pubquizathome/pq2.jpeg",
        "/pubquizathome/pq3.jpeg",
        "",
      ]}
    />
  );
}
