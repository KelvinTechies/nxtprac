import Image from "next/image";
import styles from "./page.module.css";
import hero from "/public/fb.png";
import Button from "./components/Button/Button";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Estate Management System for Your Estate.
        </h1>
        <p className={styles.desc}>
          Turning your Ideas into Reality.We bring Together the teams from the
          global tech industry. Try sasTech today at codewithsas@gmail.com
        </p>
        {/* <button className={styles.button}></button> */}
        <Button url="/portfolio" text="See our Works" />
      </div>
      <div className={styles.item}>
        <Image src={hero} className={styles.img} />
      </div>
    </div>
  );
}
