import Image from "next/image";
import ConfigHead from "./../components/Config/ConfigHead";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import PageContent from "./../components/PageContent";
import Icon from "./../components/Icon";
import Card from "./../components/Card";
import ImageCard from "./../components/ImageCard";
import CaseList from "./../components/CaseList";
import { motion } from "framer-motion";
import { variants } from "../components/Config/Motion";
import { cases } from "../config";

export default function Home({ cases }) {
  return (
    <div className="container">
      <ConfigHead
        title="Senior Frontend Developer - Fábio Alencar"
        description="Problem solver based on user's needs and high performance. MBA in
        Software Engineering and Certified ScrumMaster® (CSM®)."
      />
      <Header />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <PageContent context="--developer" contrast="light">
            <header>
              <h1 className="title">
                Frontend <span>Developer</span>
              </h1>
              <p className="subtitle">
                Problem solver based on user's needs and high performance. MBA
                in Software Engineering and Certified ScrumMaster® (CSM®).
              </p>
            </header>
            <section>
              <div className="icon-list">
                <Icon icon="icon-html5" className="bg" />
                <Icon icon="icon-js" className="bg" />
                <Icon icon="icon-git" className="bg" />
                <Icon icon="icon-wordpress" className="bg" />
                <Icon icon="icon-api" className="bg" />
              </div>
              <p className="keywords">
                Frontend, HTML, CSS, Javascript, PHP, ReactJs, Node.js, Next.js,
                Gatsby, Wordpress, Docker, Git, APIs, AWS, Firebase, Scrum.
              </p>

              <h2>
                As a <strong>Frontend Developer</strong> I’m used to:
              </h2>
              <div className="cards">
                <Card>
                  <p>
                    <strong>Solving problems</strong> based in user needs and
                    high performance.
                  </p>
                </Card>
                <Card>
                  <p>
                    <strong>Javascript Development</strong> (ReactJs, Next.js,
                    Gatsby, Node and Express).
                  </p>
                </Card>
                <Card>
                  <p>
                    <strong>CMS implementation</strong> with Wordpress, Drupal
                    or any headless CMS.
                  </p>
                </Card>
                <Card>
                  <p>
                    <strong>Querying data </strong>with REST APIs or GraphQL.
                  </p>
                </Card>
                <Card>
                  <p>
                    <strong>Implementing SEO</strong> and use strategies to get
                    better results on SERPs.
                  </p>
                </Card>
                <Card>
                  <p>
                    <strong>Using motion</strong> through code to leverage user
                    experience.
                  </p>
                </Card>
                <Card>
                  <p>
                    <strong>Implementing tests</strong> to secure reliabilty.
                  </p>
                </Card>
                <Card>
                  <p>
                    <strong>Leading </strong> UI/UX Development.
                  </p>
                </Card>
              </div>
            </section>
            <section className="social-proof">
              <h3>What people say about me:</h3>
              <ImageCard>
                <Image
                  src="/images/arlindo.png"
                  alt="Arlindo"
                  width={360}
                  height={360}
                />
                <div className="text">
                  <h3>“Commitment and dedication”</h3>
                  <p>
                    "I hired Fábio's services twice for the development of two
                    websites. Professionalism, commitment and dedication were
                    constant characteristics in our contact."
                  </p>
                  <span>
                    <strong>Arlindo Cardarett</strong> - Executive C-level in
                    Higher Education
                  </span>
                </div>
              </ImageCard>
              <ImageCard className="image-right">
                <Image
                  src="/images/raphaelly.png"
                  alt="Raphaelly Bragança"
                  width={360}
                  height={360}
                />
                <div className="text">
                  <h3>“True team player!”</h3>
                  <p>
                    "Fábio is a versatile professional with deep knowledge in
                    design, development and digital marketing, which makes up a
                    different profile in the market. With high execution power,
                    natural entrepreneurship and excellent relationship, Fábio
                    is a true team player."
                  </p>
                  <span>
                    <strong>Raphaelly Bragança</strong> - Head of Growth and
                    Commercial Strategy - Ifood
                  </span>
                </div>
              </ImageCard>
              <ImageCard>
                <Image
                  src="/images/joyce.png"
                  alt="Joyce"
                  width={360}
                  height={360}
                />
                <div className="text">
                  <h3>“I highly recommend”</h3>
                  <p>
                    "Fábio was one of the best professionals I worked with in
                    the last 13 years. He has many important skills such as
                    leadership, communication, "procedural thinking",
                    organization and self-motivation. I highly recommend Fábio
                    and would like to work with him again, anywhere, anytime!"
                  </p>
                  <span>
                    <strong>Joyce Batista</strong> - Marketing Coordinator -
                    Grupo Santa Joana
                  </span>
                </div>
              </ImageCard>
            </section>
            <section className="work">
              <h3>Frontend work</h3>
              <CaseList cases={cases} filter="frontend" />
            </section>
          </PageContent>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  /* const res = await fetch(`${server}/api/cases`);
  const cases = await res.json();*/

  return {
    props: { cases },
  };
}
