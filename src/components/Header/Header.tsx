"use client";

import { useState } from "react";
import Icon from "@/components/Icon/Icon";
import content from "@/data/content.json";
import "./Header.scss";

const { businessName, navLinks } = content.header;

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  function handleLinkClick() {
    setNavOpen(false);
  }

  return (
    <header className="header">
      <div className="header__container">
        <a className="header__logo" href="/">
          {businessName}
        </a>

        <button
          className="header__hamburger"
          onClick={() => setNavOpen(!navOpen)}
          aria-label={navOpen ? "Close menu" : "Open menu"}
          aria-expanded={navOpen}
        >
          <Icon type={navOpen ? "close" : "menu"} size="24" />
        </button>

        <nav className={`header__nav${navOpen ? " header__nav--open" : ""}`}>
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="header__nav-item">
                <a
                  className="header__nav-link"
                  href={link.href}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
