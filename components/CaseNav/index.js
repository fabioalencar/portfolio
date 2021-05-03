import Container from "./styles";
import Image from "next/image";
import Link from "next/link";
import { cases } from "../../config";

const CaseNav = ({ id }) => {
  const data = cases.cases;

  const firstCase = data.find((obj) => obj.id === 1);
  const lastCase = data.find((obj) => obj.id === 8);
  const previousCase = data.find((obj) => obj.id === id - 1);
  const nextCase = data.find((obj) => obj.id === id + 1);

  const previous = previousCase ? previousCase : lastCase;
  const next = nextCase ? nextCase : firstCase;

  return (
    <Container>
      <h3>Other cases</h3>
      <div className="cases">
        <div className="case">
          {
            <Link href={`/cases/${previous.path}`} key={previous.id}>
              <a>
                <div className="content">
                  <h2>{previous.title}</h2>
                  <p>{previous.subtitle}</p>
                  <span>View case</span>
                </div>
                <div className="image">
                  <Image
                    src={`/images/cases/${previous.path}/case-thumb.png`}
                    alt={previous.title}
                    width={750}
                    height={500}
                    quality="70"
                  />
                </div>
              </a>
            </Link>
          }
        </div>
        <div className="case">
          {
            <Link href={`/cases/${next.path}`} key={next.id}>
              <a>
                <div className="content">
                  <h2>{next.title}</h2>
                  <p>{next.subtitle}</p>
                  <span>View case</span>
                </div>
                <div className="image">
                  <Image
                    src={`/images/cases/${next.path}/case-thumb.png`}
                    alt={next.title}
                    width={750}
                    height={500}
                    quality="70"
                  />
                </div>
              </a>
            </Link>
          }
        </div>
      </div>
    </Container>
  );
};

export default CaseNav;
