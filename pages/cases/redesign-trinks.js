import Image from "next/image";
import ConfigHead from "./../../components/Config/ConfigHead";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import PageContent from "./../../components/PageContent";
import NextCase from "./../../components/NextCase";
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
                  services app in Brazil, the portal and mobile app were rebuilt
                  from the ground with an experience totally dedicated to
                  scheduling services.
                </p>
                <h4>Role</h4>
                <p>I was hired as a senior ux/ui designer for this project.</p>
              </div>
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/redesign-trinks/overview.png"
                alt="Clusters"
                width={1200}
                height={574}
                quality="70"
              />
            </section>
            <section className="case-textblock">
              <h3>Challenge</h3>
              <div className="text">
                <p>
                  The goal was to renew the entire app and website, in order to
                  make it more intuitive for the user, providing the best user
                  experience in the market. Trinks were running an MVP for
                  almost 2 years and many other players were getting into the
                  market.
                </p>
                <p>
                  Another concern was SEO. Getting better results on SERPs would
                  have a huge impact on achieving both B2B and B2C users.
                </p>
              </div>
            </section>
            <section className="case-textblock">
              <h3>Process</h3>
              <div className="text">
                <p>
                  Beauty services were not something that I was very familiar to
                  (even my own hair I used to cut at home, but lack of previous
                  experience is never an excuse for a good design work 🙂).
                </p>
                <p>
                  I started by capturing information from all stakeholders. Many
                  (many) meetings with founders, team and users. It helped me
                  better understand the business and user cases.
                </p>
                <h4>Design principles</h4>
                <p>
                  After this initial immersion process I defined 4 principles to
                  guide the design project:
                </p>
                <ol>
                  <li>Clear value proposition for B2B and B2C users.</li>
                  <li>
                    Aesthetics and minimalist design. (
                    <a
                      href="https://www.nngroup.com/"
                      rel="nofollow"
                      target="_blank"
                    >
                      Nielsen
                    </a>{" "}
                    would be proud)
                  </li>
                  <li>Provide simple experience for new users.</li>
                  <li>Provide appealing experience for recurrent users.</li>
                </ol>
                <p>
                  With these principles in hand and their MVP as a starting
                  point I started a 3 steps process to ideation:
                </p>
                <h4>1. Understanding user needs</h4>
                <p>
                  This is core to the process. Asking what users want is not
                  always enough. In this step I was aware of what triggered
                  behaviors.
                </p>
                <p>
                  One thing that came up in this process was that users are
                  often very loyal to their favorite beauty stores. With this
                  info I realized shortcuts (to book repeated services on the
                  favorite place is an example) would be very important to the
                  UX. Other ideas came up in the same process as well.
                </p>
              </div>
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/redesign-trinks/userflows.png"
                alt="Clusters"
                width={1200}
                height={574}
                quality="70"
              />
            </section>
            <section className="case-textblock">
              <div className="text">
                <h4>2. Finding deficiencies in the current product</h4>
                <p>
                  Comparing findings on step one to the current product,
                  heuristics and benchmarking were key to define what we should
                  build.
                </p>
              </div>
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/redesign-trinks/benchmarking.png"
                alt="Clusters"
                width={1200}
                height={574}
                quality="70"
              />
            </section>
            <section className="case-textblock">
              <div className="text">
                <h4>3. Suggesting improvements and new features</h4>
                <p>
                  Finally solutions. Several ideas came up in the process. I
                  prototyped some of them and the most valuable ones (validated
                  with stakeholders) were introduced in the final experience.
                  (See{" "}
                  <a
                    href="https://xd.adobe.com/view/e8ce34aa-00fe-44c7-4d60-aa59b0ba82ae/screen/artboard7"
                    target="_blank"
                    rel="nofollow"
                  >
                    low fidelity prototype
                  </a>
                  .)
                </p>
              </div>
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/redesign-trinks/prototypes.png"
                alt="Clusters"
                width={1200}
                height={574}
                quality="70"
              />
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/redesign-trinks/ipad.png"
                alt="Clusters"
                width={1200}
                height={574}
                quality="70"
              />
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/redesign-trinks/white-label.png"
                alt="Clusters"
                width={1200}
                height={574}
              />
            </section>
            <section className="case-textblock">
              <h3>Results</h3>
              <div className="text">
                <p>
                  At the moment Trinks is the biggest marketplace of beauty
                  services in Brazil with more than 700k B2C users and 50k B2B
                  users. Since 2019 part of Stone Group, a payment processing
                  services unicorn.
                </p>
                <h4>Achievements:</h4>
                <ul>
                  <li>
                    High positive impact on Stores feeback. From 3 to 4.9 stars
                    on Apple store.
                  </li>
                  <li>
                    Increase in positive users experience feedback: "It's much
                    easier and more practical, you don't have to keep calling!".
                  </li>
                  <li>
                    Acquired investment by the brazilian Unicorn Stone in 2019.
                  </li>
                  <li>More than 700.000 monthly visits.</li>
                  <li>More than a million monthly appointments.</li>
                </ul>
              </div>
            </section>
          </PageContent>

          <NextCase id={3} />
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}
