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
          <h2>Can I help you or your organization in some way?</h2>
          <p>
            Just send me a whatsapp message, e-mail, or give me a call and we
            can discuss the option over a cup of coffee!
          </p>
          <h3>E-mail</h3>
          <a href="mailto:katjavanweert@gmail.com">katjavanweert@gmail.com</a>
          <h3>Phone</h3>
          <a href="tel:+31610335753">+31 6 10 33 57 53</a>
          <h3>Social Media</h3>
          <a href="https://www.linkedin.com/in/katja-van-weert-374114b1/">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/katjavanweert/">Instagram</a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
