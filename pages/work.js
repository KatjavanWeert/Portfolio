import Head from "next/head";
import Footer from "@components/Footer";
import ProjectCarousel from "@components/ProjectCarousel";
import NavigationBar from "@components/NavigationBar";

export default function Work() {
  return (
    <div className="container">
      <Head>
        <title>Katja's Portfolio - Work</title>
        <link rel="icon" href="/fish.svg" />
      </Head>
      <NavigationBar></NavigationBar>
      <main>
        <ProjectCarousel />
      </main>

      <Footer />
    </div>
  );
}
