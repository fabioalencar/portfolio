import Head from "./../components/Config/Head";
import Header from "./../components/Header";
import Banner from "./../components/Banner";
import CaseList from "./../components/CaseList";
import { motion } from "framer-motion";

let easing = [0.175, 0.85, 0.42, 0.96];

const homeVariants = {
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
      <Head title="Fábio Alencar - Senior Product Designer and Frontend Developer." />
      <Header />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={homeVariants}>
          <Banner />
          <CaseList />
        </motion.div>
      </motion.div>
    </div>
  );
}
