import React from "react";
import Container from "./styles";

import Link from "next/link";

export default function CaseList() {
  return (
    <Container>
      <ul id="cases">
        <li className="trinks">
          <Link href="/cases/trinks">
            <a>
              <div>
                <h2>Find and book beauty services with Trinks</h2>
                <p>Product Design Leadership and Design Ops at Trinks</p>
              </div>
              <span>View case</span>
            </a>
          </Link>
        </li>
        <li className="trinks">
          <Link href="/cases/trinks">
            <a>
              <div>
                <h2>Find and book beauty services with Trinks</h2>
                <p>Product Design Leadership and Design Ops at Trinks</p>
              </div>
              <span>View case</span>
            </a>
          </Link>
        </li>
      </ul>
    </Container>
  );
}
