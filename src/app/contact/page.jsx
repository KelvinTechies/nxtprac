import Image from "next/image";
import React from "react";
import Button from "../components/Button/Button";
import styles from "./contact.module.css";
import hero from "/public/linkedIn.png";

function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src={hero} className={styles.image} />
        </div>
        <form className={styles.form} action="">
          <input type="text" placeholder="name" className={styles.input} />
          <input type="email" placeholder="email" className={styles.input} />
          <textarea
            className={styles.txtArea}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
