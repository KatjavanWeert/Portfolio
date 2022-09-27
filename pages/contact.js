import Head from "next/head";
import Footer from "@components/Footer";
import NavigationBar from "@components/NavigationBar";

export default function Contact() {
  return (
    <div className="container">
      <Head>
        <title>Katja's Portfolio - Contact</title>
        <link rel="icon" href="/fish.svg" />
      </Head>
      <NavigationBar></NavigationBar>
      <main>
        <div className="text-container">
          <h1>Contact</h1>
          <div>
            <img
              src="/process2.jpg"
              style={{ width: "20rem", clipPath: "circle()" }}
            ></img>
          </div>
          <h2>Can I help you or your organization in some way?</h2>
          <p>
            Just send me a whatsapp message, e-mail, or give me a call and we
            can discuss the possibilities over a cup of coffee!
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "4rem",
              textAlign: "center",
              width: "80%",
            }}
          >
            <div style={{ flex: "33%" }}>
              <h5>E-mail</h5>
              <a href="mailto:katjavanweert@gmail.com">
                katjavanweert@gmail.com
              </a>
            </div>
            <div style={{ flex: "33%" }}>
              <h5>Phone</h5>
              <a href="tel:+31610335753">+31 6 10 33 57 53</a>
            </div>
            <div style={{ flex: "33%" }}>
              <h5>Social Media</h5>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/katja-van-weert-374114b1/"
              >
                LinkedIn
              </a>
              <br />
              <a
                target="_blank"
                href="https://www.instagram.com/katjavanweert/"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
