import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
function Footer() {
  return (
    <div className={styles.container}>
      <div>&copy; 2023 codeWithSas. Allrights Reserved.</div>
      <div className={styles.socials}>
        <Image
          src="/fb.png"
          width={15}
          height={15}
          className={styles.icons}
          alt="fb"
        />
        <Image
          src="/whatsapp.png"
          width={15}
          height={15}
          className={styles.icons}
          alt="fb"
        />
        <Image
          src="/ig.png"
          width={15}
          height={15}
          className={styles.icons}
          alt="fb"
        />
        <Image
          src="/linkedIn.png"
          width={15}
          height={15}
          className={styles.icons}
          alt="fb"
        />
      </div>
    </div>
  );
}

export default Footer;
