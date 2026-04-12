"use client";

import { useState, useEffect } from "react";
import content from "@/data/content.json";
import "./CookieBanner.scss";

const { cookieBanner } = content;

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("cookie-notice-dismissed")) {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    sessionStorage.setItem("cookie-notice-dismissed", "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="region" aria-label="Cookie notice">
      <div className="cookie-banner__container">
        <div className="cookie-banner__inner">
          <p className="cookie-banner__text">
            {cookieBanner.text}{" "}
            <a href={cookieBanner.privacyLinkHref} className="cookie-banner__link">
              {cookieBanner.privacyLinkLabel}
            </a>
          </p>
          <button
            className="cookie-banner__dismiss"
            onClick={dismiss}
            aria-label="Dismiss cookie notice"
          >
            {cookieBanner.dismissLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
