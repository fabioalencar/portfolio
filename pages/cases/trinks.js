import Image from "next/image";
import ConfigHead from "./../../components/config/ConfigHead";
import Header from "./../../components/Header";
import PageContent from "./../../components/PageContent";
import ImageCard from "./../../components/ImageCard";
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

export default function Trinks() {
  return (
    <div className="container">
      <ConfigHead title="Product Design Leadership and Design Ops at Trinks" />
      <Header />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={homeVariants}>
          <PageContent>
            <header>
              <h1 className="title-cases">
                <span>Find and book</span> beauty services with Trinks
              </h1>
            </header>
            <section className="case-content">
              <Image
                src="/images/cases/trinks/case-cover.png"
                alt="Trinks"
                width={1200}
                height={450}
                className="showcase"
              />
              <h2 className="subtitle">
                Product Design Leadership and Design Ops at Trinks
              </h2>
            </section>
            <section className="case-textblock">
              <h3>Overview</h3>
              <div className="text">
                <p>
                  Trinks is the biggest marketplace of beauty services in Brazil
                  with more than 700k B2C users and 50k B2B users. Since 2019
                  part of Stone Group, a payment processing services unicorn.
                </p>
                <p>
                  I was invited to lead the product design team in order to
                  provide the best user experience in the market aligned with
                  business goals.
                </p>
              </div>
            </section>
            <section className="case-textblock">
              <h3>Challenge</h3>
              <div className="text">
                <p>
                  Lack of process. Decentralized documentation. Team building to
                  scale. Little support from other areas of the company. We had
                  many challenges and few resources.
                </p>
              </div>
            </section>
            <section className="case-textblock">
              <h3>Process</h3>
              <div className="text">
                <p>
                  Applying a design thinking approach I started the way it
                  always should be: Talking to people.
                </p>
                <p>Some pains I listened from my teammates:</p>
                <ul>
                  <li>Interruptions due to change of priority or urgency</li>
                  <li>
                    Legacy software being technical bottleneck for design
                    decisions
                  </li>
                  <li>Lack of senior technical support in UX</li>
                  <li>Low consistency of deliveries</li>
                  <li>Communication failure</li>
                  <li>Lack of specifications</li>
                  <li>Tight deadlines</li>
                  <li>Organization of UX / UI documentation in general</li>
                  <li>No clear strategy to apply user tests</li>
                  <li>No clear ownership of projects</li>
                  <li>Little support from other areas of the company.</li>
                  <li>Scarce resources.</li>

                  <li>Retain and hire people was getting hard.</li>
                </ul>
                <br />
                <h4>Clustering</h4>
                <p>
                  Looking for common needs and patterns I decided to clusterize
                  pains.
                </p>
              </div>
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/trinks/clusters.png"
                alt="Clusters"
                width={1200}
                height={574}
              />
            </section>
            <section className="case-textblock">
              <div className="text">
                <p>
                  Clustering helped me better understand priorities. We couldn't
                  move forward to solve cultural problems while having more
                  urgent stuff like "Low consistency of deliveries" on the
                  board. I'm not saying cultural problems was less important but
                  would be harder to find a cause and treat.
                </p>
                <p>
                  We needed to organize process and the way the team was working
                  first in order to move forward to solve harder tasks with a
                  solid pavement.
                </p>
                <br />
                <h4>1. Focus on daily work and process</h4>
                <p>
                  We started defining process to start sprints. Liderança
                  técnica Acertar processos Definir ferramentas ideais para cada
                  processo Antecipar demandas para aumentar qualidade da entrega
                  para desenvolvimento Implementar apuração de resultados com UX
                  Delimitar tempo/prazo dos processos
                </p>
                <br />
                <h4>2. Focus on people and culture</h4>
                <p>Once the team was satisfied with new process and we had </p>
                <br />
                <h4>3. Focus on visibility</h4>
                <p>
                  Phase 2 never ends. We should always focus on people and
                  culture ("This is the way", a mandalorian would say), but we
                  could started phase 3 after we felt the company was responding
                  to our events.
                </p>
              </div>
            </section>
            <section className="image-full">
              <Image
                src="/images/cases/trinks/phases.png"
                alt="Phases"
                width={1200}
                height={574}
              />
            </section>
            <section>
              <div className="text">
                <h4>Action plan </h4>
                <p>
                  We made a timetable and for the last months I've been working
                  on many projects to achieve the defined goals. Here you can
                  see some of them:
                </p>
              </div>
            </section>
            <section className="social-proof">
              <ImageCard>
                <Image
                  src="/images/cases/trinks/tia.png"
                  alt="Trinks Inteligência Artificial"
                  width={360}
                  height={338}
                />
                <div className="text">
                  <h3>An IBM Watson chatbot integrated with Slack.</h3>
                  <p>
                    Onboarding facilitator for new members of the product team;
                    Unique source of information about design services logins
                    and passwords. Avoids interruption due to simple doubts.
                    Daily meeting alerter.
                  </p>
                </div>
              </ImageCard>
              <ImageCard className="image-right">
                <Image
                  src="/images/cases/trinks/figma-thumb.png"
                  alt="Figma Thumb"
                  width={360}
                  height={338}
                />
                <div className="text">
                  <h3>Figma thumbnail pattern.</h3>
                  <p>
                    We created a pattern to all thumbnails in order to easily
                    understand information about work been done. Now we can see
                    status, squad, responsables and a quick brief of the project
                    in a easy way. <br />
                    POs are thankful :)
                  </p>
                </div>
              </ImageCard>
              <ImageCard>
                <Image
                  src="/images/cases/trinks/workshops.png"
                  alt="Workshops"
                  width={360}
                  height={338}
                />
                <div className="text">
                  <h3>Online Workshops.</h3>
                  <p>
                    Sharing knowledge for me is almost as important than learn
                    new things. It's important for individuals, team and company
                    in general. Biweekly we organize online events to transform
                    tacit knowledge in explicit, we document it in video and
                    share it with the entire company.
                  </p>
                </div>
              </ImageCard>
              <ImageCard className="image-right">
                <Image
                  src="/images/cases/trinks/new-process.png"
                  alt="New Process"
                  width={360}
                  height={338}
                />
                <div className="text">
                  <h3>New process defined.</h3>
                  <p>
                    "Because of his work, we are able to publicize with quality
                    the work of 31 impact organizations that we accelerate.
                    Fábio is flexible and always willing to solve problems and
                    develop solutions to our challenges."
                  </p>
                </div>
              </ImageCard>
              <ImageCard>
                <Image
                  src="/images/cases/trinks/ux-site.png"
                  alt="UX Site"
                  width={360}
                  height={338}
                />
                <div className="text">
                  <h3>UX Team Google Site</h3>
                  <p>
                    We launched a Google site for the UX Team. We use it to
                    share with the company what we have been working on,
                    document workshops, share protocols.
                  </p>
                </div>
              </ImageCard>
              <ImageCard className="image-right">
                <Image
                  src="/images/cases/trinks/csd.png"
                  alt="CSD Matrix"
                  width={360}
                  height={338}
                />
                <div className="text">
                  <h3>CSD Matrix</h3>
                  <p>
                    Dúvidas e suposições que não são compartilhados com todos
                    podem gerar erros e atrasos.Com tudo devidamente anotado
                    fica mais simples tornarmos a informação explícita. O
                    resultado da matriz servirá de base para um plano de ação da
                    equipe de UX.
                  </p>
                </div>
              </ImageCard>
              <ImageCard>
                <Image
                  src="/images/cases/trinks/tools.png"
                  alt="Defining UX Tools"
                  width={360}
                  height={338}
                />
                <div className="text">
                  <h3>Tools</h3>
                  <p>
                    Dúvidas e suposições que não são compartilhados com todos
                    podem gerar erros e atrasos.Com tudo devidamente anotado
                    fica mais simples tornarmos a informação explícita. O
                    resultado da matriz servirá de base para um plano de ação da
                    equipe de UX.
                  </p>
                </div>
              </ImageCard>
            </section>
            <section className="case-textblock">
              <h3>Results</h3>
              <div className="text">
                <p>
                  I still have to say it is a work in progress but we got
                  progress:
                </p>
                <ul>
                  <li>
                    The entire company knows what we do for sure and people are
                    willing to participate in our online events and activities.
                  </li>
                  <li>Hand-off to devs was simplified.</li>
                  <li>
                    We can find all documentation and files centralized now.
                  </li>
                  <li>
                    We reduced lots of interruptions with the new project's
                    thumb pattern and the chatbot.
                  </li>
                  <li>
                    We are able to apply 2x more user testing thanks to the new
                    defined process.
                  </li>
                </ul>
                <h4>Comming soon: </h4>
                <ul>
                  <li>
                    We are launching a new header/menu well tested experience to
                    solve user flooding the support team.
                  </li>
                  <li>
                    We are building a list of engaged users to acelerate
                    testing.
                  </li>
                  <li>The design system is under construction.</li>
                </ul>
              </div>
            </section>
          </PageContent>
        </motion.div>
      </motion.div>
    </div>
  );
}
