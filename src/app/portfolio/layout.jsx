import React from "react";
import styles from "./page.module.css";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Our Work</h1>

      {children}
    </div>
  );
}

export default Layout;