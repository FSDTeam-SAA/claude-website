"use client";

import React from "react";

const NAVBAR_OFFSET = 110;
const MAX_RETRY = 30;
const RETRY_DELAY_MS = 120;

const PricesHashScrollHandler = () => {
  React.useEffect(() => {
    let retries = 0;

    const scrollToHashTarget = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      const target = document.getElementById(hash);

      if (!target) {
        if (retries < MAX_RETRY) {
          retries += 1;
          window.setTimeout(scrollToHashTarget, RETRY_DELAY_MS);
        }
        return;
      }

      const targetTop =
        target.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

      window.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: "smooth",
      });
    };

    scrollToHashTarget();
    window.addEventListener("hashchange", scrollToHashTarget);

    return () => {
      window.removeEventListener("hashchange", scrollToHashTarget);
    };
  }, []);

  return null;
};

export default PricesHashScrollHandler;
