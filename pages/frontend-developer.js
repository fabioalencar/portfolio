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
      <Head title="Senior Frontend Developer- Fábio Alencar" />
      <Header />
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
              <strong> Solve problems</strong> based in user needs and high
              performance.
            </Card>
            <Card>
              <strong>Javascript Development</strong> (ReactJs, Next.js, Gatsby,
              Node and Empress).
            </Card>
            <Card>
              <strong>CMS implementation</strong> with Wordpress, Drupal or any
              headless CMS.
            </Card>
            <Card>
              <strong>Querying data </strong>with REST APIs or GraphQL.
            </Card>
            <Card>
              <strong>Implement SEO</strong> and use strategies to get better
              results on SERPs.
            </Card>
            <Card>
              <strong>Use motion</strong> through code to leverage user
              experience.
            </Card>
            <Card>
              <strong>Implement tests</strong> to secure reliabilty.
            </Card>
            <Card>
              <strong>Lead </strong> UI/UX Development.
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
