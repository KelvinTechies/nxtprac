import Link from "next/link";
import React from "react";
import styles from "./button.module.css";
function Button({ url, text }) {
  return (
    <Link href={url}>
      <div className={styles.button}>{text}</div>
    </Link>
  );
}

export default Button;
