import Project from "@components/Project";
export default function ProjectCC() {
  return (
    <Project
      title="Collecting Compassion"
      subtitle="Draw a Heart to support Peers affected by War"
      mainphoto="/virtuallyunwrapped/virtuallyUnwrapped.jpg"
      videosrc="https://player.vimeo.com/video/401268352?h=cf01ba0d86"
      date="Finished in April 2022"
      timespan="Three-people project of 2 weeks"
      description={
        <>
          <p>
            Against all good hope, war is part of our daily life. The tensions
            of war infiltrate the TU/e community and especially those with
            family, friends or colleagues in a war situation are strongly
            affected by this. We feel a shared pressure and burden around us,
            something that we carry with us on campus every day and that burdens
            us all emotionally. No one is alone in this situation - and everyone
            is involved.
          </p>
          <p>
            Together we could spread this more. We need a way to show our
            involvement to people in war zones, and to each other. With
            openness, compassion and solidarity we can create a sense of hoop.
            As a TU/e community, we can collaborate to create this sense of
            hope.
          </p>
          <p>
            The visitors enter through the main entrance of the Matrix campus
            building. A special place has been created at the top of the yellow
            stairs. Here we collected all the compassion of the TU/e community.
            This is done in the form of an interactive light art object. The
            visitors could draw a compassionate heart here that becomes part of
            the light artwork, which everyone is working on together. When
            enough staff, students and guests share their sympathy here by
            drawing a digital heart, this space is filled with authentic
            personal hearts of light. During the eight weeks that the
            installation was up, the space is filled completely.
          </p>
          <p>
            This project has been shown during the Bonnefanten First Friday at
            the Bonnefantenmuseum in Maastricht. During this evening, almost 100
            museum visitors drew a heart at the installation.
          </p>
        </>
      }
      description2={
        <>
          <p>
            In this voluntary project for the Innovation Space I collaborated in
            a multidisciplinary team of one software engineer and one conceptual
            designer/project manager. My role included the full responsibility
            of the UX design and interaction design. Using clear representations
            of the intended aesthetics I had to communicate the user journey to
            the software engineer. To the project manager I had to make clear
            which materials we needed at what time, and which design elements
            would need approval from the innovation space.
          </p>
          <p>
            The elements of the design I created myself were the brush design,
            graphic design of all interfaces and window stickers, the animated
            drawing overlay and the laser cut polycarbonate frame for the tablet
            (which unfortunately was not hufterproof).{" "}
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
