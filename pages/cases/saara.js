import Image from "next/image";
import ConfigHead from "./../../components/Config/ConfigHead";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import PageContent from "./../../components/PageContent";
import CaseNav from "./../../components/CaseNav";
import { motion } from "framer-motion";
import { variants } from "../../components/Config/Motion";

export default function Saara() {
  return (
    <div className="container">
      <ConfigHead
        title="UX, UI and Frontend for VidaClass webapp."
        description="Easy to use responsive website"
      />
      <Header />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <PageContent context="--saara" contrast="light">
            <header>
              <h1 className="title-cases">
                We make you <br /> <span>go further </span>
              </h1>
            </header>
            <section className="case-content">
              <Image
                src="/images/cases/saara/case-cover.png"
                alt="Rede Saara"
                width={1200}
                height={450}
                className="showcase"
                quality="70"
                priority
              />
              <h2 className="subtitle">Website for gas station franchise</h2>
            </section>
            <section className="case-textblock">
              <h3>Overview</h3>
              <div className="text">
                <p>Responsive website built with the CMS Wordpress.</p>

                <h4>Role</h4>
                <p>
                  I was hired to design and develop the new website of Rede
                  Saara (gas station franchise in Brazil).
                </p>
              </div>
            </section>
            <section className="case-textblock">
              <h3>Challenge</h3>
              <div className="text">
                <p>
                  Rede Saara needed a simple, easy to use responsive website.
                  Their goal was to strengthen their brand in order to keep
                  expanding.
                </p>
              </div>
            </section>
            <section className="case-textblock">
              <h3>Process</h3>
              <div className="text">
                <p>
                  I defined some steps to build a better experience for users
                  while caring about communication in general.
                </p>
                <h4>1. Information architecture and navigation</h4>
                <p>
                  User needs and journey were used to create the basic structure
                  of the website. Wireframes were used early in the development
                  process to establish the basic structure before visual design
                  and content were added.
                </p>
                <p>
                  A new sitemap was built to easily present users with provided
                  services and a easy navigation.
                </p>
              </div>
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/saara/sitemap.png"
                alt="Clusters"
                width={1200}
                height={574}
                quality="70"
              />
            </section>
            <section className="case-textblock">
              <div className="text">
                <h4>2. Content</h4>
                <p>
                  {" "}
                  <a
                    href="https://confettiagencia.com.br/"
                    target="_blank"
                    rel="nofollow"
                  >
                    Confetti Agency
                  </a>{" "}
                  was responsable for the content creation. We defined some
                  constraints about SEO and they created all the copy for the
                  website.
                </p>

                <h4>3. Visual design</h4>
                <p>
                  Elements were selected to show the company's humanized
                  service, in addition to a distinct identity from the
                  competition.
                </p>
              </div>
            </section>{" "}
            <section className="image-full">
              <Image
                src="/images/cases/saara/visuals.png"
                alt="Clusters"
                width={1200}
                height={574}
                quality="70"
              />
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/saara/mockups.png"
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
                  The website was built in just one month.{" "}
                  <a
                    href="https://redesaara.com.br/"
                    target="_blank"
                    rel="noopener nofollow"
                  >
                    See website.
                  </a>
                </p>
              </div>
            </section>
          </PageContent>

          <CaseNav id={7} />
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}
