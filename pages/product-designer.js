import Image from "next/image";
import ConfigHead from "./../components/Config/ConfigHead";
import Header from "./../components/Header";
import PageContent from "./../components/PageContent";
import Icon from "./../components/Icon";
import Card from "./../components/Card";
import ImageCard from "./../components/ImageCard";
import { motion } from "framer-motion";
import { variants } from "../components/Config/Motion";

export default function Home() {
  return (
    <div className="container">
      <ConfigHead
        title="Senior Product Designer - Fábio Alencar"
        description=" I'm a designer who explores product concepts to find promising
        directions that address both human and business needs."
      />
      <Header />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <PageContent context="--designer" contrast="light">
            <header>
              <h1 className="title">
                Product <span>Designer</span>
              </h1>

              <p className="subtitle">
                I'm a designer who explores product concepts to find promising
                directions that address both human and business needs.
              </p>
            </header>
            <section>
              <div className="icon-list">
                <Icon icon="icon-photoshop" className="bg" />
                <Icon icon="icon-illustrator" className="bg" />
                <Icon icon="icon-design" className="bg" />
                <Icon icon="icon-text-width" className="bg" />
                <Icon icon="icon-contrast" className="bg" />
              </div>
              <p className="keywords">
                UX, UI, Prototyping, Research, User Flows, Typography,
                Wireframing, Design Thinking, Figma, Adobe Suite, Design Ops,
                Product Design Leadership, Mobile Design.
              </p>

              <h2>
                As a <strong>Product Designer</strong> I’m used to:
              </h2>
              <div className="cards">
                <Card>
                  <p>
                    <strong>Explore concepts</strong> to find promising
                    directions that address both human and business needs.
                  </p>
                </Card>
                <Card>
                  <p>
                    <strong>Build prototypes</strong> to assist in user
                    research, using low to high-fidelity techniques.
                  </p>
                </Card>
                <Card>
                  <p>
                    <strong>Collaborate</strong> with business, product
                    management, UX designers and engineering partners to lead
                    and develop product and design strategies.
                  </p>
                </Card>
                <Card>
                  <p>
                    <strong> Facilitate collaboration</strong> between teams and
                    individuals to evolve the needs of the product alongside the
                    design system.
                  </p>
                </Card>
                <Card>
                  <p>
                    <strong>Support multiple projects</strong> simultaneously
                    while meeting tight deadlines.
                  </p>
                </Card>
                <Card>
                  <p>
                    <strong>Advise frontend engineers </strong>on UI
                    implementation best practices.
                  </p>
                </Card>
                <Card>
                  <p>
                    <strong>Advocate for the user</strong>, and drive a holistic
                    UX vision that inspires the team to push on the status quo.
                  </p>
                </Card>
                <Card>
                  <p>
                    <strong>Complain</strong> about devs not building it exactly
                    like the prototypes.
                    <small>
                      Sorry devs. I really care and I believe you can do it.
                    </small>
                  </p>
                </Card>
              </div>
            </section>
            <section className="social-proof">
              <h3>What people say about me:</h3>
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
                    <strong>Darlan Duarte</strong> - Enterpreneur, Runplace and
                    Pacefit
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
                    <strong>Gisele Paiva</strong> - Enterpreneur, Confetti
                    Agência
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
