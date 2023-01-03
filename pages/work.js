import Head from "next/head";
import Footer from "@components/Footer";
import ProjectCarousel from "@components/ProjectCarousel";
import NavigationBar from "@components/NavigationBar";
import Separator from "@components/Separator";

export default function Work() {
  return (
    <div className="container">
      <Head>
        <title>Katja's Portfolio - Work</title>
        <link rel="icon" href="/fish.svg" />
      </Head>
      <NavigationBar></NavigationBar>
      <Separator />
      <main>
        <ProjectCarousel />
      </main>

      <Footer />
    </div>
  );
}
