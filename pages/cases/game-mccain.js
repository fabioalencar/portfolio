import Image from "next/image";
import ConfigHead from "./../../components/Config/ConfigHead";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import PageContent from "./../../components/PageContent";
import CaseNav from "./../../components/CaseNav";
import { motion } from "framer-motion";
import { variants } from "../../components/Config/Motion";

export default function McCain() {
  return (
    <div className="container">
      <ConfigHead
        title="UX, UI and Frontend for VidaClass webapp."
        description="In search of perfecting its newly created brand, highlighting its services and improving its communication plan to talk to the public and partners, VidaClass had as its main needs to shield itself from the competition and publicize its products to final consumers."
      />
      <Header />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <PageContent context="--mccain">
            <header>
              <h1 className="title-cases">
                <span>Awarded</span> interactive experience
              </h1>
            </header>
            <section className="case-content">
              <Image
                src="/images/cases/game-mccain/case-cover.png"
                alt="Vidaclass"
                width={1200}
                height={450}
                className="showcase"
                quality="70"
                priority
              />
              <h2 className="subtitle">
                Game McCain - APAS 2019 - UI and Development
              </h2>
            </section>
            <section className="case-textblock">
              <h3>Overview</h3>
              <div className="text">
                <p>
                  For this awarded project, we created a personalized game to
                  the launch of SureCrisp from McCain, a global leader in the
                  frozen pre-fried potato industry, in partnership with Rappi,
                  since the product was developed to last longer crunchy, with a
                  focus on delivery.
                </p>
                <h4>Role</h4>
                <p>
                  This project was lead by{" "}
                  <a
                    href="https://confettiagencia.com.br/"
                    target="_blank"
                    rel="nofollow"
                  >
                    Confetti Agency
                  </a>{" "}
                  and my role was to create the UI and develop the game based on
                  Key Visuals received from the agency.
                </p>
              </div>
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/game-mccain/key-visual.png"
                alt="Phases"
                width={1200}
                height={574}
              />
            </section>
            <section className="case-textblock">
              <h3>Process</h3>
              <div className="text">
                <p>
                  I started a concept of the game planning it to be played on
                  horizontal view (as you can see below). Initially it was a
                  suggestion from the lead agency.
                </p>
              </div>
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/game-mccain/horizontal-concept.png"
                alt="Horizontal concept of the game"
                width={1200}
                height={574}
              />
            </section>
            <section className="case-textblock">
              <div className="text">
                <p>
                  After some tests and considerations it was clear it would't be
                  the best option because of the limited view of the scenery. It
                  would be harder to build a balanced game considering fun and
                  challenge to the users.
                </p>
                <p>
                  Back to references I looked for some inspiration from classic
                  games:
                </p>
              </div>
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/game-mccain/references.png"
                alt="References of classics games"
                width={1200}
                height={574}
              />
            </section>
            <section className="case-textblock">
              <div className="sideImage">
                <h4>Proof of concept for the top view of the game</h4>
                <Image
                  src="/images/cases/game-mccain/poc.gif"
                  alt="Proof of concept"
                  width={300}
                  height={534}
                  layout="fixed"
                />
              </div>
              <div className="text">
                <p>
                  I decided for a view from top (the same as Sonic wings). Would
                  be harder to work in a "3D like" perspective with the deadline
                  we had and the top view provides a good visibility from the
                  scenary.
                </p>
                <h4>Development</h4>
                <p>
                  The game was built in two weeks with the javascript framework{" "}
                  <a href="https://phaser.io/" target="_blank" rel="nofollow">
                    Phaser
                  </a>
                  .
                </p>
                <iframe
                  width="780"
                  height="415"
                  src="https://www.youtube.com/embed/mR1Gq9YoQQI"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>
                  <small>
                    Unfortunately the installation was too low for high people.
                    😓
                  </small>
                </p>
              </div>
            </section>
            <section className="case-textblock">
              <h3>Results</h3>
              <div className="text">
                <p>
                  Awarded as First Place at STAND SHOW APAS – POPAI 2019 |
                  Category: Best Promotional Action - Medium Size - 2019
                </p>
              </div>
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/game-mccain/apas-2019.png"
                alt="APAS 2019"
                width={1200}
                height={574}
              />
            </section>
          </PageContent>

          <CaseNav id={4} />
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}
