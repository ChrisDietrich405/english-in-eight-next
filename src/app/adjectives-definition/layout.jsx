import React from "react";
import Link from "next/link";

import styles from "../styles/layout.module.css";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div>
      <section className={styles.main_container}>
        <nav className={styles.sidebar}>
          <Link className={styles.link} href="/adjectives-definition">
            Adjective definition
          </Link>
          <Link
            className={styles.link}
            href="/adjectives-definition/possessive-adjectives"
          >
            Possessive Adjectives
          </Link>
          <Link
            className={styles.link}
            href="/adjectives-definition/comparative-adjectives"
          >
            Comparative Adjectives
          </Link>
          <Link
            className={styles.link}
            href="/adjectives-definition/superlative-adjectives"
          >
            Superlative Adjectives
          </Link>
          <Link
            className={styles.link}
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
