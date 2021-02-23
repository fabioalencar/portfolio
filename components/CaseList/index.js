import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./styles";

export default function CaseList({ context = "all" }) {
  return (
    <Container>
      <ul id="cases">
        {/*context == "all" || context == "frontend" ? (  ) : (
          ""
        )*/}
        <li>
          <Link href="/cases/trinks">
            <a>
              <div className="content">
                <h2>Product Design Leadership at Trinks </h2>
                <p>The biggest marketplace of beauty services in Brazil</p>
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
          <Link href="/cases/redesign-trinks">
            <a>
              <div className="content">
                <h2>Find and book beauty services with Trinks</h2>
                <p>UX/UI for App and Website</p>
                <span>View case</span>
              </div>
              <div className="image">
                <Image
                  src="/images/cases/redesign-trinks/case-cover.png"
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
          <Link href="/cases/vidaclass">
            <a>
              <div className="content">
                <h2>A new way of taking care of health</h2>
                <p>UX, UI and Frontend for VidaClass web app.</p>
                <span>View case</span>
              </div>
              <div className="image">
                <Image
                  src="/images/cases/vidaclass/case-cover.png"
                  alt="Case Vidaclass"
                  width={1200}
                  height={450}
                  layout="fixed"
                />
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/cases/game-mccain">
            <a>
              <div className="content">
                <h2>Awarded interactive experience</h2>
                <p>Game McCain - APAS 2019 - UI and Development</p>
                <span>View case</span>
              </div>
              <div className="image">
                <Image
                  src="/images/cases/game-mccain/case-cover.png"
                  alt="Case McCain"
                  width={1200}
                  height={450}
                  layout="fixed"
                />
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/cases/game-mccain">
            <a>
              <div className="content">
                <h2>Liz Cocktails Website</h2>
                <p>Responsive Wordpress development</p>
                <span>View case</span>
              </div>
              <div className="image">
                <Image
                  src="/images/cases/lizcocktails/case-cover.png"
                  alt="Case Liz Cocktails"
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
