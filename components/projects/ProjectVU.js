import Project from "@components/Project";
export default function ProjectVU() {
  return (
    <Project
      title="Virtually Unwrapped"
      subtitle="Redesigning the Gifting Experience of the 21st Century"
      mainphoto="/virtuallyunwrapped/virtuallyUnwrapped.jpg"
      videosrc="https://player.vimeo.com/video/752524696?h=38df1cebe5"
      date="Finished in August 2022"
      timespan="Individual project of 15 weeks"
      description={
        <>
          <p>
            In this era of digitalization, a new phenomenon has surfaced:
            Digital gifting. As more digital products are consumed and created,
            gifting digital media becomes more popular. With the rise of
            streaming services, the growing consumption of digital games and the
            shift to selling experiences rather than objects, the assortment of
            digital gifting options is expanding greatly.
          </p>
          <p>
            Currently, there is no method of giving digital gifts that fits
            within our cultural rituals of gift-giving. A clear need arises for
            smart gift wrappings that facilitate the shift from material gifts
            to digital gifts, without adding unnecessary objects to everyone's
            life. As gifting is a crucial element in sustaining interpersonal
            relationships, it is important that the effort and intended message
            from the giver are noticed by the receiver. My mission is therefore
            to empower consumers to strengthen their connection to peers through
            gifting, by designing a novel 21st century gifting process that
            allows for digital gifting in a sustainable manner.
          </p>
          <p>
            Virtually Unwrapped is a circular gift wrapping that connects the
            digital gift to a physical wrapper. The physical QR is a gateway to
            a webinterface, that can be personalized with photos, GIFs, songs
            and other media. After the gift exchange, the wrapper can simply be
            reprogrammed and passed on to the next receiver. The past journey of
            a wrapper adds to its value, while at the same time its circularity
            minimizes waste.
          </p>
        </>
      }
      description2={
        <>
          <p>
            Various rapid prototyping techniques (laser cutting, two-filament 3D
            printing) are used to explore physical shapes, while the 3D models
            created for the prints are used to create high-quality renders for
            the virtual aesthetics with Blender. A functional front-end is
            created, using TailwindCSS to be able to quickly iterate on the
            style of the website.
          </p>
          <p>
            The functional website is used for user evaluation and
            proof-of-concept with 20 users. A cultural probe was conducted in
            which users actually used the product in-context. In this probe, a
            novel method of emotional journey mapping was explored, with emojis
            as an indication of emotions.
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
