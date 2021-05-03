import Image from "next/image";
import ConfigHead from "./../../components/Config/ConfigHead";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import PageContent from "./../../components/PageContent";
import CaseNav from "./../../components/CaseNav";
import { motion } from "framer-motion";
import { variants } from "../../components/Config/Motion";

export default function Easybaby() {
  return (
    <div className="container">
      <ConfigHead
        title="Brand, UX, UI and Frontend for Easy Baby MVP."
        description="To help pregnant women find the perfect maternity and ideal services for their pregnancy, Easy Baby has created a simple way to digitize maternity services."
      />
      <Header />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <PageContent context="--easy-baby" contrast="light">
            <header>
              <h1 className="title-cases">
                Find the <span>ideal maternity</span>
              </h1>
            </header>
            <section className="case-content">
              <Image
                src="/images/cases/easy-baby/thumb.jpg"
                alt="easy-baby"
                width={1600}
                height={1200}
                className="showcase"
                quality="70"
                priority
              />
              <h2 className="subtitle">
                Brand, UX, UI and Frontend for Easy Baby MVP.
              </h2>
            </section>
            <section className="case-textblock">
              <h3>Overview</h3>
              <div className="text">
                <p>
                  To help pregnant women find the perfect maternity and ideal
                  services for their pregnancy, Easy Baby has created a simple
                  way to digitize maternity services.
                </p>

                <h4>Role</h4>
                <p>
                  I was part of the team that Ideate Easy Baby and built the
                  MVP.
                </p>
              </div>
            </section>
            <section className="case-textblock">
              <h3>Challenge</h3>
              <div className="text">
                <p>
                  The goal was to create feasible features to serve maternities
                  on their digital transformation while serving pregant woman on
                  their journey to find a maternity and other services for their
                  pregnancy.
                </p>
              </div>
            </section>
            <section className="case-textblock">
              <h3>Process</h3>
              <div className="text">
                <ol>
                  <li>Empathize (researching with interviews and surveys)</li>
                  <li>
                    Define (point of view based on findings made on previous
                    step and analysis of competitors)
                  </li>
                  <li>
                    Ideate (feasible ideas for a MVP with short time to build)
                  </li>
                  <li>Prototype (using Figma as tool)</li>
                  <li>Test (with users closely to the personas defined)</li>
                  <li>MVP development (built with NextJs + Strapi)</li>
                </ol>
              </div>
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/easy-baby/userflows.jpg"
                alt="Clusters"
                width={1600}
                height={1200}
                quality="70"
              />
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/easy-baby/personas1.jpg"
                alt="Clusters"
                width={1600}
                height={1200}
                quality="70"
              />
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/easy-baby/personas2.jpg"
                alt="Clusters"
                width={1600}
                height={1200}
                quality="70"
              />
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/easy-baby/pitchdeck.jpg"
                alt="Clusters"
                width={1600}
                height={1200}
                quality="70"
              />
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/easy-baby/screens.jpg"
                alt="Clusters"
                width={1600}
                height={1200}
                quality="70"
              />
            </section>

            <section className="case-textblock">
              <h3>Results</h3>
              <div className="text">
                <p>
                  Easy Baby is competing in a startup program with more than 300
                  projects with Deadline in July/21. The MVP was built within 3
                  months. I also created the storytelling for the pitch.
                </p>
              </div>
            </section>
          </PageContent>

          <CaseNav id={3} />
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}
