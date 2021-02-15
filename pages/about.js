import Image from "next/image";
import Head from "./../components/Config/Head";
import Header from "./../components/Header";
import PageContent from "./../components/PageContent";
import ImageCard from "./../components/ImageCard";
import Card from "./../components/Card";

export default function Home() {
  return (
    <div className="container">
      <Head title="Who is Fábio Alencar?" />
      <Header />
      <PageContent>
        <header>
          <h1 className="title">
            About <span>me</span>
          </h1>

          <p className="subtitle">
            Illusionism fan, martial arts practitioner, geek and early adopter
            of new tech.
          </p>
        </header>
        <section className="social-proof">
          <ImageCard imageLabel="Travel to Holambra, São Paulo - Brazil">
            <Image
              src="/images/holambra-sao-paulo.jpg"
              alt="Holambra - São Paulo"
              width={360}
              height={480}
            />
            <div className="text">
              <h3>
                “I take inspiration from life. Good experiences inspire me,
                unpleasant experiences motivates me.”
              </h3>
              <p>
                I can be in line at the bank. Everything is fuel to my mind.
              </p>
            </div>
          </ImageCard>
          <ImageCard
            className="image-right"
            imageLabel="Travel to Cintra - Portugal"
          >
            <Image
              src="/images/cintra-portugal.jpg"
              alt="Cintra - Portugal"
              width={360}
              height={480}
            />
            <div className="text">
              <h3>
                Creative Technologist, Product Designer and Frontend Developer.
              </h3>
              <p>
                Post-graduated by ESPM in Marketing and Digital Design.
                Certified ScrumMaster® (CSM®). Studying Software Engineering at
                FIAP.
              </p>
            </div>
          </ImageCard>
          <ImageCard imageLabel="Travel to Cafayate, Salta - Argentina">
            <Image
              src="/images/cafayate-argentina.jpg"
              alt="Cafayate - Argentina"
              width={360}
              height={480}
            />
            <div className="text">
              <h3>
                Experienced and passionate about the whole process of building
                digital products.
              </h3>
              <p>
                Entrepreneur and team leader for 8 years. Creative Technologist,
                Product Designer and Frontend Developer.
              </p>
            </div>
          </ImageCard>
        </section>
        <section>
          <div className="cards">
            <h4>Eager for knowledge</h4>
            <Card>
              <strong> Solve problems</strong> based in user needs and high
              performance.
            </Card>
            <Card>
              <strong>Javascript Development</strong> (ReactJs, Next.js, Gatsby,
              Node and Empress).
            </Card>
            <Card>
              <strong>Javascript Development</strong> (ReactJs, Next.js, Gatsby,
              Node and Empress).
            </Card>
            <Card>
              <strong>Javascript Development</strong> (ReactJs, Next.js, Gatsby,
              Node and Empress).
            </Card>
          </div>
          <p className="certifications">
            <strong>Other certifications:</strong> Design System & Ops by{" "}
            <strong>Meiuca</strong>; Frontend Developer by{" "}
            <strong>Alura</strong>; Hello Design Thinking by{" "}
            <strong>IDEO</strong>; Digital marketing, Usability and Interface
            Design by <strong>Infnet</strong>; Advanced English Language by{" "}
            <strong>Cultura Inglesa</strong> (RJ).
          </p>
        </section>
        <section className="storytelling">
          <ImageCard context="no-margin">
            <Image
              src="/images/glocal.png"
              alt="Glocal"
              width={360}
              height={239}
            />
            <div className="text">
              <h3>Dreamer</h3>
              <p>
                I trully believe we have to be the change we want to see in the
                world, so I’m a volunteer in a high social impact organization
                called Glocal and sometimes I acept pro bono projects from
                non-profit organizations.
              </p>
            </div>
          </ImageCard>
          <ImageCard className="image-right" context="no-margin">
            <Image
              src="/images/not-a-singer.png"
              alt="Not a singer"
              width={360}
              height={239}
            />
            <div className="text">
              <h3>Not a singer...</h3>
              <p>...but I can play.</p>
            </div>
          </ImageCard>
          <ImageCard context="no-margin">
            <Image
              src="/images/not-a-singer.png"
              alt="Not a singer"
              width={360}
              height={239}
            />
            <div className="text">
              <h3>The happy toothless boy.</h3>
              <p>Childhood with brothers, 1997.</p>
            </div>
          </ImageCard>
          <ImageCard className="image-right" context="no-margin">
            <Image
              src="/images/lovers.png"
              alt="Best friends and lovers"
              width={360}
              height={239}
            />
            <div className="text">
              <h3>
                Best friends
                <br /> and lovers
              </h3>
              <p>Believe me we met since she was born.</p>
            </div>
          </ImageCard>
          <ImageCard context="no-margin">
            <Image
              src="/images/crying-man.png"
              alt="Real men cry."
              width={360}
              height={239}
            />
            <div className="text">
              <h3>Real men cry.</h3>
              <p>
                To be honest I don’t cry a lot, but how could I don’t cry on the
                happiest day of my life, my wedding. I’m sensitive, I embrace
                life and all the feelings that comes with it.
              </p>
            </div>
          </ImageCard>
          <p>Thank you for your time reading!</p>
        </section>
      </PageContent>
    </div>
  );
}
