import Image from "next/image";
import ConfigHead from "./../../components/Config/ConfigHead";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import PageContent from "./../../components/PageContent";
import CaseNav from "./../../components/CaseNav";
import { motion } from "framer-motion";
import { variants } from "../../components/Config/Motion";

export default function Runplace() {
  return (
    <div className="container">
      <ConfigHead
        title="UX, UI and Frontend for VidaClass webapp."
        description="In search of perfecting its newly created brand, highlighting its services and improving its communication plan to talk to the public and partners, VidaClass had as its main needs to shield itself from the competition and publicize its products to final consumers."
      />
      <Header />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <PageContent context="--musicalismo" contrast="light">
            <header>
              <h1 className="title-cases">
                Achieve <br /> <span>your best</span>
              </h1>
            </header>
            <section className="case-content">
              <Image
                src="/images/cases/runplace/case-cover.png"
                alt="Musicalismo"
                width={1200}
                height={450}
                className="showcase"
                quality="70"
                priority
              />
              <h2 className="subtitle">
                Concept UX and MVP Building for marketplace
              </h2>
            </section>
            <section className="case-textblock">
              <h3>Overview</h3>
              <div className="text">
                <p>
                  An online showcase exclusively dedicated to stimulating the
                  sale, purchase and exchange of new and used musical
                  instruments and equipment, independently.
                </p>

                <h4>Role</h4>
                <p>
                  As part of the founding team I was responsable for research,
                  UX and Product strategie.
                </p>
              </div>
            </section>
            <section className="case-textblock">
              <h3>Challenge</h3>
              <div className="text">
                <p>
                  Our main goal was to connect musicians and professionals in
                  the music industry on a platform that guarantees easy access
                  to the most varied musical equipment, at the best price.
                </p>
              </div>
            </section>
            <section className="case-textblock">
              <h3>Process</h3>
              <div className="text">
                <p>
                  In partnership with{" "}
                  <a
                    href="https://confettiagencia.com.br/"
                    target="_blank"
                    rel="nofollow"
                  >
                    Confetti Agency
                  </a>{" "}
                  we defined some steps to build a better experience for users
                  while caring about communication in general.
                </p>
                <h4>1. Planning</h4>
                <p>
                  We started the planning step creating Personas. It was crucial
                  to understand and define how we should comunicate with users,
                  who would use the product and who would benefit from the
                  service.
                </p>
                <p>
                  You can see a persona below (João) who is not used to digital
                  experiences. It was clear the digital strategie should focus
                  on personas wich could easily understand the value proposition
                  of the service without hesitations.
                </p>
              </div>
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/vidaclass/ana-flavia.png"
                alt="Persona Ana Flávia"
                width={1200}
                height={815}
                quality="70"
              />
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/vidaclass/roberto.png"
                alt="Persona Roberto"
                width={1200}
                height={815}
                quality="70"
              />
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/vidaclass/joao.png"
                alt="Persona João"
                width={1200}
                height={815}
                quality="70"
              />
            </section>
            <section className="case-textblock">
              <div className="text">
                <h4>2. Digital presence</h4>
                <p>
                  We created dedicated content to each persona in order to
                  maximize findability on search engines.
                </p>
                <Image
                  src="/images/cases/vidaclass/ebook-vidaclass.jpg"
                  alt="Persona João"
                  width={300}
                  height={425}
                  quality="70"
                />
                <Image
                  src="/images/cases/vidaclass/ebook-vidasaudavel.jpg"
                  alt="Persona João"
                  width={300}
                  height={425}
                  quality="70"
                />
                <h4>3. UX</h4>
                <p>
                  A new sitemap was built to easily present users with services
                  and favor booking appointments. User testimonials were used as
                  social proof, advantages and tools for calculating services
                  were used to highlight the VidaClass differentials.
                </p>
              </div>
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/vidaclass/sitemap.png"
                alt="Clusters"
                width={1200}
                height={574}
                quality="70"
              />
            </section>{" "}
            <section className="case-textblock">
              <div className="text">
                <p>
                  User needs and journey were used to create the basic structure
                  of the website. Wireframes were used early in the development
                  process to establish the basic structure before visual design
                  and content were added.
                </p>
              </div>
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/vidaclass/wireframing.png"
                alt="Clusters"
                width={1200}
                height={574}
                quality="70"
              />
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/vidaclass/screens.png"
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
                  This was created as a concept and we didn't manage to find
                  enough resources to make it happen.
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
