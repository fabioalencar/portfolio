import React, { useState, useEffect } from "react";
import Footer from "./../Footer";
import Container from "./styles";
import Linki from "../Config/Link";
import { useRouter } from "next/router";
import Icon from "../Icon";

const Header = () => {
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".topbar").className = "topbar scroll";
    } else {
      document.querySelector(".topbar").className = "topbar";
    }
  };
  return (
    <Container>
      <div className={`${className} ${menuStatus ? "on" : "off"}`}>
        <section className="topbar">
          <div className="button">
            <button onClick={openMenu} className="">
              <img src="menu.svg" />
            </button>
          </div>
          <Linki href="/">
            <a className="fabioalencar">
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
                rel="nofollow me"
              >
                <Icon icon="icon-github" className="sm" />
              </a>
            </li>
            <li className="hideMobile">
              <a
                href="https://dribbble.com/fabioalencar"
                target="_blank"
                rel="nofollow me"
              >
                <Icon icon="icon-dribbble" className="sm" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/fabioalencaresouza/"
                target="_blank"
                rel="nofollow me"
              >
                <Icon icon="icon-linkedin" className="sm" />
              </a>
            </li>
          </ul>
          {/* <ul className="languages">
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
              <Linki href="/about" locale="en-US">
                <a>en</a>
              </Linki>
            </li>
            <li>
              <Linki href="" locale="pt-BR">
                <a>pt-br</a>
              </Linki>
            </li> 
          </ul>*/}
        </section>
        <nav>
          <ul>
            <li>
              <Linki href="/">
                <a>Home</a>
              </Linki>
            </li>
            <li>
              <Linki href="/#work">
                <a>Work</a>
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
              <Linki href="/frontend-developer">
                <a>Resumé</a>
              </Linki>
            </li>
          </ul>
          <Footer />
        </nav>
      </div>
    </Container>
  );
};

export default Header;
