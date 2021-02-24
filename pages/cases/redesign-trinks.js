import Image from "next/image";
import ConfigHead from "./../../components/Config/ConfigHead";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import PageContent from "./../../components/PageContent";
import ImageCard from "./../../components/ImageCard";
import { motion } from "framer-motion";
import { variants } from "../../components/Config/Motion";

export default function RedesignTrinks() {
  return (
    <div className="container">
      <ConfigHead
        title="UX/UI for Trinks app and website"
        description="Redesign of digital channels, website and app, to encourage navigation and scheduling of available services."
      />
      <Header />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <PageContent context="--trinks" contrast="light">
            <header>
              <h1 className="title-cases">
                <span>Find and book</span> beauty services with Trinks
              </h1>
            </header>
            <section className="case-content">
              <Image
                src="/images/cases/redesign-trinks/case-cover.png"
                alt="Trinks"
                width={1200}
                height={450}
                className="showcase"
                quality="70"
                priority
              />
              <h2 className="subtitle">
                Redesign of digital channels, website and app, to encourage
                navigation and scheduling of available services.
              </h2>
            </section>
            <section className="case-textblock">
              <h3>Overview</h3>
              <div className="text">
                <p>
                  To help Trinks in its goal of becoming the most used beauty
                  services app in Brazil, we have recreated the portal and
                  mobile app with an experience totally dedicated to scheduling
                  services.
                </p>
              </div>
            </section>
            <section className="case-textblock">
              <h3>Challenge</h3>
              <div className="text">
                <p>UX</p>
              </div>
            </section>
            <section className="case-textblock">
              <h3>Process</h3>
              <div className="text">
                <p>
                  Applying a design thinking approach I started the way it
                  always should be: Talking to people.
                </p>
              </div>
            </section>
            <section className="case-textblock">
              <h3>Results</h3>
              <div className="text">
                <p>
                  High positive impact on Stores feeback. Increase in positive
                  users experience feedback.
                </p>
                <ul>
                  <li>High positive impact on Stores feeback.</li>
                  <li>Increase in positive users experience feedback.</li>
                  <li>
                    Acquired investment by the brazilian Unicorn Stone in 2019.
                  </li>
                </ul>
              </div>
            </section>
          </PageContent>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}
