import Image from "next/image";
import Head from "./../components/Config/Head";
import Header from "./../components/Header";
import PageContent from "./../components/PageContent";
import Icon from "./../components/Icon";
import Card from "./../components/Card";
import ImageCard from "./../components/ImageCard";
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
      <Head title="Senior Frontend Developer- Fábio Alencar" />
      <Header />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={homeVariants}>
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
                Frontend, Javascript, PHP, ReactJs, Node.js, Next.js, Gatsby,
                Wordpress, Docker, Git, APIs.
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
                    Gatsby, Node and Empress).
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
              <p>
                "In addition to delivering creative and functional options, he
                provides extremely human support!"
              </p>
              <br />
              <ImageCard>
                <Image
                  src="/images/juliana.jpg"
                  alt="Juliana"
                  width={360}
                  height={360}
                />
                <div className="text">
                  <h3>
                    “He is flexible and always willing to solve problems.”
                  </h3>
                  <p>
                    "Because of his work, we are able to publicize with quality
                    the work of 31 impact organizations that we accelerate.
                    Fábio is flexible and always willing to solve problems and
                    develop solutions to our challenges."
                  </p>
                  <span>
                    <strong>Juliana Gouveia</strong> - Glocal Director
                  </span>
                </div>
              </ImageCard>
              <ImageCard className="image-right">
                <Image
                  src="/images/darlan.jpg"
                  alt="Darlan Duarte"
                  width={360}
                  height={397}
                />
                <div className="text">
                  <h3>“Fábio is excellent!”</h3>
                  <p>
                    "I've been working with him for a few years now. In addition
                    to delivering creative and functional options, he provides
                    extremely human support, looking for the best for the
                    customer and always making necessary adjustments, regardless
                    of what is or is not in the proposal."
                  </p>
                  <span>
                    <strong>Darlan Duarte</strong> - Enterpreneur
                  </span>
                </div>
              </ImageCard>
              <ImageCard>
                <Image
                  src="/images/gisele.jpg"
                  alt="Gisele Paiva"
                  width={360}
                  height={360}
                />
                <div className="text">
                  <h3>“Easy relationship”</h3>
                  <p>
                    "I found a professional dedicated to seeking the best
                    solutions, easy relationship, high commitment to deliveries,
                    flexibility in negotiations and co-creation moments, among
                    other virtues."
                  </p>
                  <span>
                    <strong>Gisele Paiva</strong> - Enterpreneur
                  </span>
                </div>
              </ImageCard>
            </section>
          </PageContent>
        </motion.div>
      </motion.div>
    </div>
  );
}
