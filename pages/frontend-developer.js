import Image from "next/image";
import ConfigHead from "./../components/config/ConfigHead";
import Header from "./../components/Header";
import PageContent from "./../components/PageContent";
import Icon from "./../components/Icon";
import Card from "./../components/Card";
import ImageCard from "./../components/ImageCard";
import CaseList from "./../components/CaseList";
import { motion } from "framer-motion";
import { variants } from "../components/Config/Motion";

export default function Home() {
  return (
    <div className="container">
      <ConfigHead title="Senior Frontend Developer- Fábio Alencar" />
      <Header />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <PageContent context="--developer">
            <header>
              <h1 className="title">
                Frontend <span>Developer</span>
              </h1>
              <p className="subtitle">
                Problem solver based in user needs and high performance. MBA in
                Software Engineering and Certified ScrumMaster® (CSM®).
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
                    <strong> Solve problems</strong> based in user needs and
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
                    <strong>Implement SEO</strong> and use strategies to get
                    better results on SERPs.
                  </p>
                </Card>
                <Card>
                  <p>
                    <strong>Use motion</strong> through code to leverage user
                    experience.
                  </p>
                </Card>
                <Card>
                  <p>
                    <strong>Implement tests</strong> to secure reliabilty.
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
                  <h3>“Fábio is excellent!”</h3>
                  <p>
                    "I've been working with him for a few years now. In addition
                    to delivering creative and functional options, he provides
                    extremely human support, looking for the best for the
                    customer and always making necessary adjustments."
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
                    Commercial Strategy Ifood
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
                    <strong>Joyce Batista</strong> - Marketing Coordinator Grupo
                    Santa Joana
                  </span>
                </div>
              </ImageCard>
            </section>
          </PageContent>
          <section>
            <CaseList />
          </section>
        </motion.div>
      </motion.div>
    </div>
  );
}
