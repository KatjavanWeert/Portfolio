import Head from "next/head";
import Footer from "@components/Footer";
import ProjectVU from "@components/projects/ProjectVU";

export default function Work() {
  return (
    <div className="container">
      <Head>
        <title>Katja's Portfolio - Work</title>
        <link rel="icon" href="/fish.svg" />
      </Head>

      <main>
        <h1>Work</h1>
        <ProjectVU></ProjectVU>
      </main>

      <Footer />
    </div>
  );
}
