import React, { useState, useEffect } from "react";
import Footer from "./../Footer";
import Container from "./styles";
import Link from "next/link";

const Header = () => {
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
      <div className={menuStatus ? "on" : "off"}>
        <section className="topbar">
          <button onClick={openMenu}>
            <img src="menu.svg" />
          </button>
          <Link href="/case">
            <a className="fabioalencar">
              fábio<span>.</span>alencar
            </a>
          </Link>
          <ul className="languages">
            <li>
              <Link href="" locale="en-US">
                <a>en</a>
              </Link>
            </li>
            <li>
              <Link href="" locale="pt-BR">
                <a>pt-br</a>
              </Link>
            </li>
          </ul>
        </section>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/case">Work</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Designer</a>
            </li>
            <li>
              <a href="#">Developer</a>
            </li>
            <li>
              <a href="#">Resumé</a>
            </li>
          </ul>
          <Footer />
        </nav>
      </div>
    </Container>
  );
};

export default Header;
