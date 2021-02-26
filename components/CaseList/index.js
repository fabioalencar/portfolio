import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./styles";

export default function CaseList({ cases, filter }) {
  const data = cases.cases;

  const filterCases = (item) => {
    switch (filter) {
      case "design":
        return item.categories.includes("design");
      case "frontend":
        return item.categories.includes("frontend");
      default:
        return data;
    }
  };

  const filteredCases = data.filter(filterCases);

  return (
    <Container>
      <ul id="cases">
        {filteredCases.map((item) => (
          <li key={item.id}>
            <Link href={`/cases/${item.path}`}>
              <a>
                <div className="content">
                  <h2>{item.title}</h2>
                  <p>{item.subtitle}</p>
                  <span>View case</span>
                </div>
                <div className="image">
                  <Image
                    src={`/images/cases/${item.path}/case-cover.png`}
                    alt={item.title}
                    width={1200}
                    height={450}
                    layout="fixed"
                    quality="70"
                  />
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
