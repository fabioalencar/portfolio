import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./styles";

export default function CaseList() {
  return (
    <Container>
      <ul id="cases">
        <li>
          <Link href="/cases/trinks">
            <a>
              <div className="content">
                <h2>Find and book beauty services with Trinks</h2>
                <p>Product Design Leadership and Design Ops at Trinks</p>
                <span>View case</span>
              </div>
              <div className="image">
                <Image
                  src="/images/cases/trinks/case-cover.png"
                  alt="Case Trinks"
                  width={1200}
                  height={450}
                  layout="fixed"
                />
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/cases/trinks">
            <a>
              <div className="content">
                <h2>Find and book beauty services with Trinks</h2>
                <p>Product Design Leadership and Design Ops at Trinks</p>
                <span>View case</span>
              </div>
              <div className="image">
                <Image
                  src="/images/cases/trinks/case-cover.png"
                  alt="Case Trinks"
                  width={1200}
                  height={450}
                  layout="fixed"
                />
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </Container>
  );
}
