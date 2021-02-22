import Image from "next/image";
import ConfigHead from "./../components/Config/ConfigHead";
import Header from "./../components/Header";
import Banner from "./../components/Banner";
import CaseList from "./../components/CaseList";
import Clients from "./../components/Clients";
import { motion } from "framer-motion";
import { variants } from "../components/Config/Motion";
import ScrollDown from "../components/ScrollDown";

export default function Home() {
  return (
    <div className="container">
      <ConfigHead
        title="Fábio Alencar - Senior Product Designer and Frontend Developer."
        description="Creative Technologist, Senior Product Designer and Frontend Developer. Specialist in the convergence between business, design and technology. "
      />
      <Header />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <Banner />
          <ScrollDown to="/#cases" />
          <Clients>
            <h2>A few brands I've worked with:</h2>

            <div className="brands">
              <Image
                src="/images/logo-metlife.png"
                alt="Metlife"
                width={100}
                height={64}
                layout="fixed"
              />
              <Image
                src="/images/logo-dentsply-sirona.png"
                alt="Dentsply Sirona"
                width={100}
                height={64}
                layout="fixed"
              />
              <Image
                src="/images/logo-trinks.png"
                alt="Trinks"
                width={100}
                height={64}
                layout="fixed"
              />
              <Image
                src="/images/logo-general-mills.png"
                alt="General Mills"
                width={100}
                height={64}
                layout="fixed"
              />
              <Image
                src="/images/logo-brf.png"
                alt="BRF"
                width={100}
                height={64}
                layout="fixed"
              />
              <Image
                src="/images/logo-dpsp.png"
                alt="DPSP"
                width={100}
                height={64}
                layout="fixed"
              />
              <Image
                src="/images/logo-vidaclass.png"
                alt="Vidaclass"
                width={100}
                height={64}
                layout="fixed"
              />
              <Image
                src="/images/logo-ilumno.png"
                alt="Ilumno"
                width={100}
                height={64}
                layout="fixed"
              />
              <Image
                src="/images/logo-abbrasil.png"
                alt="AB Brasil"
                width={100}
                height={64}
                layout="fixed"
              />
              <Image
                src="/images/logo-mccain.png"
                alt="McCain"
                width={100}
                height={64}
                layout="fixed"
              />
            </div>
          </Clients>

          <CaseList />
        </motion.div>
      </motion.div>
    </div>
  );
}
