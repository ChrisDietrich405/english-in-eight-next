"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import styles from "../styles/layout.module.css";

const Layout = ({ children }) => {
  const [sidebarPosition, setSidebarPosition] = useState("fixed");
  const sidebarRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const sidebar = sidebarRef.current;

      if (!sidebar) return;

      const stopPosition = (sidebar.offsetHeight - 10);
      const scrollPosition = window.scrollY || window.pageYOffset;

      if (scrollPosition >= stopPosition) {
        setSidebarPosition("absolute");
        sidebar.style.top = `${stopPosition}px`;
      } else {
        setSidebarPosition("fixed");
        sidebar.style.top = "0";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section className={styles.main_container}>
        <nav
          className={styles.sidebar}
          style={{ position: sidebarPosition }}
          ref={sidebarRef}
        >
          <Link className={`${styles.link}`} href="/nouns-definition">
            noun definition
          </Link>
          <Link
            className={styles.link}
            //
            href="/nouns-definition/uncountable-countable-nouns"
          >
            Uncountable & countable nouns
          </Link>
          <Link
            className={styles.link}
            //
            href="/nouns-definition/noun-modifiers"
          >
            Noun modifiers
          </Link>
          <Link
            className={styles.link}
            //
            href="/nouns-definition/possessive-pronouns"
          >
            Possessive Pronouns
          </Link>
          <Link
            className={styles.link}
            //
            href="/nouns-definition/collective-nouns"
          >
            Collective Nouns
          </Link>
        </nav>
        <div className={styles.main_content}>{children}</div>
      </section>
    </div>
  );
};

export default Layout;
