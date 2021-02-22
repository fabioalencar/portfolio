import Image from "next/image";
import ConfigHead from "./../components/Config/ConfigHead";
import Header from "./../components/Header";
import Banner from "./../components/Banner";
import CaseList from "./../components/CaseList";
import Clients from "./../components/Clients";
import { motion } from "framer-motion";
import { variants } from "../components/Config/Motion";
import ScrollDown from "../components/ScrollDown";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

export default function Home() {
  return (
    <div className="container">
      <ConfigHead title="Fábio Alencar - Senior Product Designer and Frontend Developer." />
      <Header />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <Banner />
          <ScrollDown to="/#cases" />
          <FadeInWhenVisible>
            <Clients>
              <h3>A few brands I've worked with</h3>

              <div className="brands">
                <Image
                  src="/images/logo-metlife.png"
                  alt="Metlife"
                  width={100}
                  height={60}
                  layout="fixed"
                />
                <Image
                  src="/images/logo-dentsply-sirona.png"
                  alt="Dentsply Sirona"
                  width={100}
                  height={60}
                  layout="fixed"
                />
                <Image
                  src="/images/logo-trinks.png"
                  alt="Trinks"
                  width={100}
                  height={60}
                  layout="fixed"
                />
                <Image
                  src="/images/logo-general-mills.png"
                  alt="General Mills"
                  width={100}
                  height={60}
                  layout="fixed"
                />
                <Image
                  src="/images/logo-brf.png"
                  alt="BRF"
                  width={100}
                  height={60}
                  layout="fixed"
                />
                <Image
                  src="/images/logo-dpsp.png"
                  alt="DPSP"
                  width={100}
                  height={60}
                  layout="fixed"
                />
                <Image
                  src="/images/logo-vidaclass.png"
                  alt="Vidaclass"
                  width={100}
                  height={60}
                  layout="fixed"
                />
                <Image
                  src="/images/logo-natura.png"
                  alt="Natura"
                  width={100}
                  height={60}
                  layout="fixed"
                />
                <Image
                  src="/images/logo-riobike.png"
                  alt="Riobike"
                  width={100}
                  height={60}
                  layout="fixed"
                />
                <Image
                  src="/images/logo-ilumno.png"
                  alt="Ilumno"
                  width={100}
                  height={60}
                  layout="fixed"
                />
                <Image
                  src="/images/logo-abbrasil.png"
                  alt="AB Brasil"
                  width={100}
                  height={60}
                  layout="fixed"
                />
                <Image
                  src="/images/logo-grupo-santajoana.png"
                  alt="Grupo Santa Joana"
                  width={100}
                  height={60}
                  layout="fixed"
                />
                <Image
                  src="/images/logo-mccain.png"
                  alt="McCain"
                  width={100}
                  height={60}
                  layout="fixed"
                />
                <Image
                  src="/images/logo-hiae.png"
                  alt="Hospital Israelita Alrbet Einstein"
                  width={100}
                  height={60}
                  layout="fixed"
                />
              </div>
            </Clients>
          </FadeInWhenVisible>

          <CaseList />
        </motion.div>
      </motion.div>
    </div>
  );
}
