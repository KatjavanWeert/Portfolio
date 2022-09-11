import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Project from "@components/Project";

export default function Work() {
  return (
    <div className="container">
      <Head>
        <title>Katja's Portfolio - Work</title>
        <link rel="icon" href="/fish.svg" />
      </Head>

      <main>
        <h1>Work</h1>
        <Project
          title="Virtually Unwrapped"
          subtitle="Redesigning the Gifting Experience of the 21st Century"
          videosrc="/virtuallyUnwrapped.mp4"
          date="August 2022"
          timespan="Individual project of 15 weeks"
          description="In this era of digitalization, a new phenomenon has surfaced: Digital gifting. As more digital products are consumed and created, gifting digital media becomes more popular. With the rise of streaming services, the growing consumption of digital games and the shift to selling experiences rather than objects, the assortment of digital gifting options is expanding greatly. 
          Currently, there is no method of giving digital gifts that fits within our cultural rituals of gift-giving. A clear need arises for smart gift wrappings that facilitate the shift from material gifts to digital gifts, without adding unnecessary objects to everyone's life. As gifting is a crucial element in sustaining interpersonal relationships, it is important that the effort and intended message from the giver are noticed by the receiver. My mission is therefore to empower consumers to strengthen their connection to peers through gifting, by designing a novel 21st century gifting process that allows for digital gifting in a sustainable manner. 
          Virtually Unwrapped is a circular gift wrapping that connects the digital gift to a physical wrapper. The physical QR is a gateway to a webinterface, that can be personalized with photos, GIFs, songs and other media. After the gift exchange, the wrapper can simply be reprogrammed and passed on to the next receiver. The past journey of a wrapper adds to its value, while at the same time its circularity minimizes waste."
          mainphoto="/virtuallyUnwrapped.jpg"
        />
      </main>

      <Footer />
    </div>
  );
}
