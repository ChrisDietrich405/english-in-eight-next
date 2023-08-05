import React from "react";
import Link from "next/link";

import styles from "../../styles/layout.module.css";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div>
      <section className={styles.main_container}>
        <nav className={styles.sidebar}>
          <Link className={`${styles.link}`} href="/versus">
            Versus
          </Link>
          <Link
            className={styles.link}
            href="/other-topics/versus/remind-versus-remember"
          >
            Remind versus Remember
          </Link>
          <Link
            className={styles.link}
            href="/other-topics/versus/every-versus-all"
          >
            Every versus All
          </Link>
          <Link
            className={styles.link}
            href="/other-topics/phrasal-verbs/talk-versus-speak"
          >
            Talk verus Speak
          </Link>
          <Link
            className={styles.link}
            href="/other-topics/phrasal-verbs/tell-versus-say"
          >
            Tell versus Say
          </Link>
        </nav>
        <div className={styles.main_content}>{children}</div>
      </section>
    </div>
  );
};

export default Layout;
