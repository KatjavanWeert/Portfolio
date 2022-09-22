import Project from "@components/Project";
export default function ProjectUD() {
  return (
    <Project
      title="(Un_Defined)"
      subtitle="Defining experience through affective interaction"
      mainphoto="/virtuallyunwrapped/virtuallyUnwrapped.jpg"
      videosrc="https://player.vimeo.com/video/401268352?h=cf01ba0d86"
      date="Finished on February 2021"
      timespan="Two-person project of 15 weeks"
      description={
        <>
          <p>
            When looking at MRI experiences, it is necessary to understand the
            mental state of the patients in the waiting room, which could be
            used to improve the MRI examination experience.
          </p>
          <p>
            The current approaches are mainly through questionnaires or
            sometimes physiological measurements, but is that actually the best
            solution? If you are asked how you feel, would you actually be able
            to answer correctly? What if instead of using checkboxes we could
            measure with natural interactions?
          </p>
          <p>
            With data-enabled design and research through design, we explored
            the suitability of several sensors for differentiate mental states
            such as relaxed or stress. Based on the collected data and
            experience of participants in the user tests we iterate the sensing
            functions as well as aesthetics of interaction.
          </p>
          <p>
            (UN_DEFINED) is a sensing design object that elegantly measures the
            emotions of the patient through manipulation and functional
            interaction.
          </p>
          <p>
            This project was created in collaboration with Philips Design and
            featured on the Health By Tech conference of June 10-11 2021 at the
            University of Twente.
          </p>
        </>
      }
      description2={
        <>
          <p>
            In the project (UN_DEFINED) I collaborated with a fellow student
            Tianyi Chen. I was in charge of the technical aspects of the
            prototype including the sensors, the serial connection to the PC and
            the lights output, while Tianyi was in charge of the production of
            the prototype (e.g. 3D printing, sanding, assembly).
          </p>
          <p>
            We collaborated on exploring the aesthetics with various methods
            that included a 100 sketches challenge, exploratory prototypes and
            an interaction relabeling exercise. Additionally, I was in charge of
            the data analysis of the accelerometer and stretch sensor data. With
            Python I created graphs and used a Fast Fourier Transformation to
            analyze the frequencies in the signal.
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
