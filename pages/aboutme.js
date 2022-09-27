import Head from "next/head";
import Footer from "@components/Footer";
import NavigationBar from "@components/NavigationBar";

export default function AboutMe() {
  return (
    <div className="container">
      <Head>
        <title>Katja's Portfolio - About Me</title>
        <link rel="icon" href="/fish.svg" />
      </Head>
      <NavigationBar></NavigationBar>
      <main>
        <div className="text-container">
          <h1>About Me</h1>
          <h3>Katja van Weert</h3>
          <h4>
            <i>Playful Interaction Designer </i>|
            <i> Blended Reality Specialist </i>|<i> Creative Allrounder</i>
          </h4>
          <div className="row">
            <div className="column-image">
              <img src="/process1.jpg"></img>
            </div>
            <div className="column-text">
              <h2>Professional Motivations</h2>
              <p>
                In a professional context, my main motivations are expressing
                creativity, working towards results and a good team atmosphere.
                Similar to many designers, I draw energy out of the freedom of
                creativity and the flexibility to quickly switch between
                concepts if evaluation indicates that change is needed, and the
                generation of knowledge itself is interesting to me.
              </p>
              <p>
                I get very enthusiastic about presenting my results to an
                audience, and therefore I put great effort in creating a
                convincing story through interesting videos, good communicative
                visuals and presenting. I’m result oriented, and in that sense
                quite optimistic and ambitious in my projects.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="column-text">
              <h2>Rational Hedonism</h2>
              <p>
                I am a hedonist by heart, and this translates into my designs
                and my working philosophy. I try to maximize fun, while taking
                the consequences of actions in mind. In my designs I try to
                maximize fun for my users, but at the same time I try to keep it
                functional. I therefore like creating games or thinking of
                playful solutions to problems.
              </p>
              <p>
                I have worked on various projects in the entertainment industry,
                and therefore have a lot of experience in the context of leisure
                activities and making users enjoy their actions.
              </p>
            </div>
            <div className="column-image">
              <img src="/photo4.jpg"></img>
            </div>
          </div>
          <div className="row">
            <div className="column-image">
              <img src="/process3.jpg"></img>
            </div>
            <div className="column-text">
              <h2>Blending Realities</h2>
              <p>
                I have always had a fascination with how the physical world and
                digital world are merging in modern day society. As people get
                more used to this virtual world, they will accept these virtual
                elements easier and develop skill in dealing with virtual
                information. At the same time, many of the ‘real’ and physical
                parts of life now find place in an online space, through a
                square window of computing.{" "}
              </p>{" "}
              <p>
                As I have worked on various projects that consider these blended
                realities, I am up-to-date with the literature in this context.
                My skills are also developed to create connected experiences in
                both physical and virtual reality. I have worked with
                interactive projections, understand how to interpret and connect
                sensor data (mostly accelerometers and gyroscopes), and have the
                programming skills in HTML, CSS and JavaScript to create
                accessible interactive webapps. My 3D rendering skills in
                Blender and Cinema 4D allow me to create high-quality visuals
                for these virtual experiences.
              </p>
              {/* <p>
                The rapid prototyping skills in laser cutting and 3D printing
                allow me to create a physical anchor for blended reality, and
                with my experience in microcontrollers, actuators and sensors I
                can connect physical inputs to virtual outputs and virtual
                inputs to physical outputs.
              </p> */}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
