import React from "react";
import Link from "next/link";

import styles from "../../styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <section className={styles.main_container}>
        <nav className={styles.sidebar}>
          <ul className={styles.list_container}>
            <li>
              <Link
                className={styles.link}
                href="/verbs-definition/future/future-simple"
              >
                Future Simple
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/verbs-definition/future/future-continuous"
              >
                Future Continuous
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/verbs-definition/future/future-perfect"
              >
                Future Perfect
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/verbs-definition/future/future-perfect-continuous"
              >
                Future Perfect Continuous
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.main_content}>{children}</div>
      </section>
    </div>
  );
};

export default Layout;
