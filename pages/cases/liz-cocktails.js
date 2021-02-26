import Image from "next/image";
import ConfigHead from "./../../components/Config/ConfigHead";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import PageContent from "./../../components/PageContent";
import CaseNav from "./../../components/CaseNav";
import { motion } from "framer-motion";
import { variants } from "../../components/Config/Motion";

export default function LizCocktails() {
  return (
    <div className="container">
      <ConfigHead
        title="Liz Cocktails Website."
        description="Responsive Website built for Liz Cocktails & Co  with CMS Wordpress."
      />
      <Header />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <PageContent context="--mccain">
            <header>
              <h1 className="title-cases">
                Liz Cocktails
                <br /> <span> Responsive Website</span>
              </h1>
            </header>
            <section className="case-content">
              <Image
                src="/images/cases/liz-cocktails/case-cover.png"
                alt="Vidaclass"
                width={1200}
                height={450}
                className="showcase"
                quality="70"
                priority
              />
              <h2 className="subtitle">
                Responsive Website built for Liz Cocktails & Co with CMS
                Wordpress.
              </h2>
            </section>
            <section className="case-textblock">
              <h3>Overview</h3>
              <div className="text">
                <p>
                  I built this responsive website with my friend{" "}
                  <a
                    href="https://www.behance.net/ph2art"
                    target="_blank"
                    rel="nofollow"
                  >
                    Raphael Peres
                  </a>{" "}
                  for the renowned bartender Tai Barbin.
                </p>
                <h4>Role</h4>
                <p>
                  My role was mostly development but I gave him some suggestion
                  to responsiveness.
                </p>
                <p>Developed with:</p>
                <ul>
                  <li>Responsive design</li>
                  <li>Wordpress CMS</li>
                  <li>Elementor</li>
                  <li>Woocommerce</li>
                </ul>{" "}
                <a
                  href="https://www.lizcocktails.com/"
                  target="_blank"
                  rel="nofollow"
                >
                  See website.
                </a>
              </div>
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/liz-cocktails/views.png"
                alt="Phases"
                width={1200}
                height={574}
              />
            </section>
          </PageContent>

          <CaseNav id={1} />
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}
