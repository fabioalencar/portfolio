import Image from "next/image";
import Head from "./../components/Config/Head";
import Header from "./../components/Header";
import PageContent from "./../components/PageContent";
import Icon from "./../components/Icon";
import Card from "./../components/Card";
import ImageCard from "./../components/ImageCard";

export default function Home() {
  return (
    <div className="container">
      <Head title="Senior Product Designer - Fábio Alencar" />
      <Header />
      <PageContent context="--designer">
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
            UX, UI, Prototyping, Research, User Flows, Wireframing, Design
            Thinking, Figma, Adobe Suite, Design Ops, Product Design Leadership.
          </p>

          <h2>
            As a <strong>Product Designer</strong> I’m used to:
          </h2>
          <div className="cards">
            <Card>
              <strong>Explore concepts</strong> to find promising directions
              that address both human and business needs.
            </Card>
            <Card>
              <strong>Build prototypes</strong> to assist in user research,
              using low to high-fidelity techniques.
            </Card>
            <Card>
              <strong>Collaborate</strong> with business, product management, UX
              designers and engineering partners to lead and develop product and
              design strategies.
            </Card>
            <Card>
              <strong> Facilitate collaboration</strong> between teams and
              individuals to evolve the needs of the product alongside the
              design system.
            </Card>
            <Card>
              <strong>Support multiple projects</strong> simultaneously while
              meeting tight deadlines.
            </Card>
            <Card>
              <strong>Advise frontend engineers </strong>on UI implementation
              best practices.
            </Card>
            <Card>
              <strong>Advocate for the user</strong>, and drive a holistic UX
              vision that inspires the team to push on the status quo.
            </Card>
            <Card>
              <strong>Complain</strong> about devs not building it exactly like
              the prototypes.
              <p>
                <small>
                  Sorry devs. I really care and I believe you can do it.
                </small>
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
              <h3>“Fábio is excellent!”</h3>
              <p>
                "I've been working with him for a few years now. In addition to
                delivering creative and functional options, he provides
                extremely human support, looking for the best for the customer
                and always making necessary adjustments, regardless of what is
                or is not in the proposal."
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
                "I've been working with him for a few years now. In addition to
                delivering creative and functional options, he provides
                extremely human support, looking for the best for the customer
                and always making necessary adjustments, regardless of what is
                or is not in the proposal."
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
              <h3>“Fábio is excellent!”</h3>
              <p>
                "I've been working with him for a few years now. In addition to
                delivering creative and functional options, he provides
                extremely human support, looking for the best for the customer
                and always making necessary adjustments, regardless of what is
                or is not in the proposal."
              </p>
              <span>
                <strong>Gisele Paiva</strong> - Enterpreneur
              </span>
            </div>
          </ImageCard>
        </section>
      </PageContent>
    </div>
  );
}
