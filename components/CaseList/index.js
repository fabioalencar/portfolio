import React from "react";
import Container from "./styles";

export default function CaseList() {
  return (
    <Container>
      <ul id="cases">
        <li className="trinks">
          <a href="/cases/trinks">
            <div>
              <h2>Find and book beauty services with Trinks</h2>
              <p>Product Design Leadership and Design Ops at Trinks</p>
            </div>
            <span>View case</span>
          </a>
        </li>
        <li className="trinks">
          <a href="/cases/trinks">
            <div>
              <h2>Find and book beauty services with Trinks</h2>
              <p>Product Design Leadership and Design Ops at Trinks</p>
            </div>
            <span>View case</span>
          </a>
        </li>
      </ul>
    </Container>
  );
}
