import Image from "next/image";
import ConfigHead from "./../../components/Config/ConfigHead";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import PageContent from "./../../components/PageContent";
import CaseNav from "./../../components/CaseNav";
import { motion } from "framer-motion";
import { variants } from "../../components/Config/Motion";

export default function Riobike() {
  return (
    <div className="container">
      <ConfigHead
        title="UX, UI and Frontend for VidaClass webapp."
        description="In search of perfecting its newly created brand, highlighting its services and improving its communication plan to talk to the public and partners, VidaClass had as its main needs to shield itself from the competition and publicize its products to final consumers."
      />
      <Header />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <PageContent context="--riobike" contrast="light">
            <header>
              <h1 className="title-cases">
                Your order <span>on time </span>
              </h1>
            </header>
            <section className="case-content">
              <Image
                src="/images/cases/riobike/case-cover.png"
                alt="Riobike"
                width={1200}
                height={450}
                className="showcase"
                quality="70"
                priority
              />
              <h2 className="subtitle">
                {" "}
                Brand and website for sustainable deliveries made by cyclists
              </h2>
            </section>
            <section className="case-textblock">
              <h3>Overview</h3>
              <div className="text">
                <p>
                  Riobike Courier is a startup focused on sustaibale deliveries
                  made by cyclists. They needed a brand and website in order to
                  launch the project.
                </p>

                <h4>Role</h4>
                <p>
                  I designed the brand, website and lead the website
                  development.
                </p>
              </div>
            </section>
            <section className="case-textblock">
              <h3>Challenge</h3>
              <div className="text">
                <p>
                  The challenge was to create a brand and website that would
                  stand out from the competition and attract bikers willing to
                  work.
                </p>
              </div>
            </section>
            <section className="case-textblock">
              <h3>Process</h3>
              <div className="text">
                <p>
                  The entire project demanded research and exploration. I was
                  looking for simple ways to communicate Riobike's value
                  proposition that would maintain a pleasant aesthetic.
                </p>

                <h4>Brand</h4>
                <p>
                  I started by exploring some references about cycling and
                  sustainability in order to create a clear brand, simple to
                  identify and easy to remember.
                </p>
                <section className="image-full">
                  <Image
                    src="/images/cases/riobike/brand-process1.png"
                    alt="Brand references"
                    width={1200}
                    height={574}
                    quality="70"
                  />
                </section>
                <p>
                  After some studies and color definitions I created the final
                  brand you can see below.
                </p>
              </div>
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/riobike/brand-process2.png"
                alt="Grid"
                width={1200}
                height={574}
                quality="70"
              />
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/riobike/papers.png"
                alt="Brand Riobike"
                width={1200}
                height={574}
                quality="70"
              />
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/riobike/materials.png"
                alt="Brand Riobike"
                width={1200}
                height={574}
                quality="70"
              />
            </section>
            <section className="case-textblock">
              <div className="text">
                <h4>Website Navigation</h4>
                <p>
                  A simple navigation was designed to provide easy access to all
                  information about the company and their services.
                </p>
              </div>
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/riobike/sitemap.png"
                alt="Riobike sitemap"
                width={1200}
                height={574}
                quality="70"
              />
            </section>
            <section className="case-textblock">
              <div className="text">
                <h4>Website Visual Design</h4>
                <p>
                  Using the new created brand I designed the website focusing on
                  making a clear brand statement: The company is sustainable,
                  cost-saving and efficient.
                </p>
              </div>
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/riobike/final-visual.png"
                alt="Clusters"
                width={1200}
                height={574}
                quality="70"
              />
            </section>
            <section className="case-textblock">
              <h3>Results</h3>
              <div className="text">
                <p>
                  <a
                    href="http://www.riobikecourier.com.br/"
                    target="_blank"
                    rel="noopener nofollow"
                  >
                    See website.
                  </a>
                </p>
              </div>
            </section>
          </PageContent>

          <CaseNav id={1} />
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}
