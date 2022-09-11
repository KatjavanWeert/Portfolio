import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Katja's Portfolio - Home</title>
        <link rel="icon" href="/fish.svg" />
      </Head>

      <main></main>

      <Footer />
    </div>
  );
}
