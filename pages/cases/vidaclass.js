import Image from "next/image";
import ConfigHead from "./../../components/Config/ConfigHead";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import PageContent from "./../../components/PageContent";
import ImageCard from "./../../components/ImageCard";
import { motion } from "framer-motion";
import { variants } from "../../components/Config/Motion";

export default function Vidaclass() {
  return (
    <div className="container">
      <ConfigHead
        title="UX, UI and Frontend for VidaClass webapp."
        description="In search of perfecting its newly created brand, highlighting its services and improving its communication plan to talk to the public and partners, VidaClass had as its main needs to shield itself from the competition and publicize its products to final consumers."
      />
      <Header />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <PageContent context="--vidaclass" contrast="light">
            <header>
              <h1 className="title-cases">
                A new way of <br />
                <span>taking care of health </span>
              </h1>
            </header>
            <section className="case-content">
              <Image
                src="/images/cases/vidaclass/case-cover.png"
                alt="Vidaclass"
                width={1200}
                height={450}
                className="showcase"
                quality="70"
                priority
              />
              <h2 className="subtitle">
                UX, UI and Frontend for VidaClass web app.
              </h2>
            </section>
            <section className="case-textblock">
              <h3>Overview</h3>
              <div className="text">
                <p>
                  In search of perfecting its newly created brand, highlighting
                  its services and improving its communication plan to talk to
                  the public and partners, VidaClass had as its main needs to
                  shield itself from the competition and publicize its products
                  to final consumers.
                </p>
              </div>
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/vidaclass/overview.png"
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
                  In search of perfecting its newly created brand, highlighting
                  its services and improving its communication plan to talk to
                  the public and partners, VidaClass had as its main needs to
                  shield itself from the competition and publicize its products
                  to final consumers.
                </p>
              </div>
            </section>

            <section className="case-textblock">
              <h3>Results</h3>
              <div className="text">
                <p>
                  More than 5,000 qualified leads and a consistent increase in
                  traffic without an increase in funds.
                </p>
              </div>
            </section>
          </PageContent>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}
