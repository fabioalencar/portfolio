import React, { useState, useEffect } from "react";
import Container from "./styles";
import Linki from "../Config/Link";
import { useRouter } from "next/router";
import Icon from "../Icon";
import MouseFollow from "../MouseFollow";

const Header = (props) => {
  const router = useRouter();

  let className = "";
  switch (router.pathname) {
    case "/product-designer":
      className = "designer";
      break;
    case "/frontend-developer":
      className = "developer";
      break;
    default:
      className = "";
  }

  const [menuStatus, setMenuStatus] = useState(false);

  const openMenu = () => {
    setMenuStatus(!menuStatus);
  };

  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".topbar").className = "topbar scroll";
    } else {
      document.querySelector(".topbar").className = "topbar";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <div className={`${className} ${menuStatus ? "on" : "off"} header`}>
        <span className="bg-menu"></span>
        <section className="topbar">
          <div className="button" id="hoverable">
            <button onClick={openMenu} aria-label="Toggle menu" id="menu">
              <Icon icon="icon-menu" className="bg" />
              <Icon icon="icon-close" className="bg" />
            </button>
            <MouseFollow />
          </div>
          <Linki href="/">
            <a className="fabioalencar" title="Fábio Alencar">
              f<span className="hideMobile">ábio</span>
              <span className="dot">.</span>a
              <span className="hideMobile">lencar</span>
            </a>
          </Linki>
          <ul className="social-media">
            <li className="hideMobile">
              <a
                href="https://github.com/fabioalencar"
                target="_blank"
                rel="nofollow noreferrer"
                title="Github"
              >
                <Icon icon="icon-github" className="sm" />
              </a>
            </li>
            {/*<li className="hideMobile">
              <a
                href="https://dribbble.com/fabioalencar"
                target="_blank"
                rel="nofollow noreferrer"
                  title=Dribbble
              >
                <Icon icon="icon-dribbble" className="sm" />
              </a>
            </li> */}
            <li className="hideMobile">
              <a
                href="https://www.linkedin.com/in/fabioalencaresouza/"
                target="_blank"
                rel="nofollow noreferrer"
                title="LinkedIn"
              >
                <Icon icon="icon-linkedin" className="sm" />
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5511968884933&text=Hi%20F%C3%A1bio!"
                target="_blank"
                rel="nofollow noreferrer"
                title="Whatsapp"
              >
                <Icon icon="icon-whatsapp" className="sm" />
              </a>
            </li>
          </ul>
        </section>

        <nav>
          <ul>
            <li>
              <Linki href="/">
                <a>Home</a>
              </Linki>
            </li>
            <li>
              <Linki href="/about">
                <a>About</a>
              </Linki>
            </li>
            <li>
              <Linki href="/product-designer">
                <a>Designer</a>
              </Linki>
            </li>
            <li>
              <Linki href="/frontend-developer">
                <a>Developer</a>
              </Linki>
            </li>
            <li>
              <a href="/resume_fabio-alencar.pdf" target="_blank" title="Resumé">
                Resumé
              </a>
            </li>
          </ul>
        </nav>

        <span className="bg-menu-after"></span>
      </div>
    </Container>
  );
};

export default Header;
