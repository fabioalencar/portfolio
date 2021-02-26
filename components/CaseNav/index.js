import Container from "./styles";
import Image from "next/image";
import Link from "next/link";
import { cases } from "../../config";

const CaseNav = ({ id }) => {
  const data = cases.cases;
  const filteredCase = data.find((obj) => obj.id === id);

  return (
    <Container>
      <h3>Next case</h3>
      <div className="case">
        {
          <Link href={`/cases/${filteredCase.path}`} key={filteredCase.id}>
            <a>
              <div className="content">
                <h2>{filteredCase.title}</h2>
                <p>{filteredCase.subtitle}</p>
                <span>View case</span>
              </div>
              <div className="image">
                <Image
                  src={`/images/cases/${filteredCase.path}/case-cover.png`}
                  alt={filteredCase.title}
                  width={1200}
                  height={450}
                  layout="fixed"
                  quality="70"
                />
              </div>
            </a>
          </Link>
        }
      </div>
    </Container>
  );
};

export default CaseNav;
