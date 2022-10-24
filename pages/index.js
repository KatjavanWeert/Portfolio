import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Katja's Portfolio - Home</title>
        <link rel="icon" href="/fish.svg" />
      </Head>

      <div className="video-background">
        <iframe
          width="1920"
          height="1080"
          src="https://player.vimeo.com/video/752857720?h=1b0da887aa&amp;autoplay=1&amp;loop=1&amp;autopause=1&amp;muted=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;dnt=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <div className="overlay">
        <img
          src="/Handtekening-wit.png"
          style={{
            maxWidth: "50vw",
            maxHeight: "55vh",
            paddingTop: "5vh",
            paddingBottom: "14vh",
          }}
        ></img>
        <Link href="/work">
          <button className="explore-button">
            <span>[</span>Explore my Portfolio<span>]</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
