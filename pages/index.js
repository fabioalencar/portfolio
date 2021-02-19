import ConfigHead from "./../components/config/ConfigHead";
import Header from "./../components/Header";
import Banner from "./../components/Banner";
import CaseList from "./../components/CaseList";
import Clients from "./../components/Clients";
import { motion } from "framer-motion";
import Image from "next/image";

let easing = [0.175, 0.85, 0.42, 0.96];

const pageVariants = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};
export default function Home() {
  return (
    <div className="container">
      <ConfigHead title="Fábio Alencar - Senior Product Designer and Frontend Developer." />
      <Header />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={pageVariants}>
          <Banner />
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
                src="/images/logo-BRF.png"
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
          <CaseList />
        </motion.div>
      </motion.div>
    </div>
  );
}
