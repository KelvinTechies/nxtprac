import Image from "next/image";
import React from "react";
import Button from "../components/Button/Button";
import styles from "./about.module.css";
import hero from "/public/whatsapp.png";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={hero} className={styles.img} />
        <div className={styles.imgTxt}>
          <h1 className={styles.imgTitle}>Digital StoryTellers</h1>
          <h2 className={styles.imgDesc}>
            HandCrafting award winning digital Experience
          </h2>
        </div>
      </div>

      <div className={styles.txtContainer}>
        <div className={styles.item}>
          <h3 className={styles.title}>Who are we?</h3>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            repudiandae provident voluptates? Nisi illo tempora, nesciunt aut
            repellendus porro beatae facere in numquam repellat earum ea quis
            ullam nemo, culpa accusantium quasi voluptatibus omnis hic ipsum
            odio. Sed tempore at unde reprehenderit placeat voluptatum ut. Quam,
            repudiandae tenetur. Quisquam temporibus molestias maiores amet nam
            voluptate sed possimus deserunt nemo recusandae animi alias
            quibusdam facilis, tenetur, ducimus exercitationem dolorem, adipisci
            expedita rerum explicabo praesentium repudiandae? Nesciunt doloribus
            .
            <br />
            <br />
            labore porro vel dolores. Officiis sed cum sapiente ullam id
            repellat, reprehenderit nobis modi blanditiis veritatis dicta
            facilis voluptatem quam explicabo similique, necessitatibus optio
            ipsum! Voluptates rerum laudantium ullam tempora impedit aspernatur.
            Ex ad praesentium aspernatur dolores natus enim, impedit nam
            assumenda, quasi cumque maiores quo ducimus provident ratione libero
            est sunt dignissimos voluptatem! Quidem accusamus id assumenda
            recusandae doloribus voluptates eligendi quibusdam cum pariatur
            ducimus excepturi deleniti odio cupiditate adipisci officia
          </p>
        </div>
        {/* <div className={styles.item}>
          <h3 className={styles.title}>What we Do</h3>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            repudiandae provident voluptates? Nisi illo tempora, nesciunt aut
            repellendus porro beatae facere in numquam repellat earum ea quis
            ullam nemo, culpa accusantium quasi voluptatibus omnis hic ipsum
            odio. Sed tempore at unde reprehenderit placeat voluptatum ut. Quam,
            repudiandae tenetur. Quisquam temporibus molestias maiores amet nam.
            <br />
            <br />
            -Dynamic And Affordable Website
            <Button url="/contact" text="Contact" />
          </p>
        </div> */}
        <div className={styles.item}>
          <h3 className={styles.title}>What we Do</h3>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            repudiandae provident voluptates? Nisi illo tempora, nesciunt aut
            repellendus porro beatae facere in numquam repellat earum ea quis
            ullam nemo, culpa accusantium quasi voluptatibus omnis hic ipsum
            odio. Sed tempore at unde reprehenderit placeat voluptatum ut. Quam,
            repudiandae tenetur. Quisquam temporibus molestias maiores amet nam.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            repudiandae provident voluptates? Nisi illo tempora, nesciunt aut
            repellendus porro beatae facere in numquam repellat earum ea quis
            ullam nemo, culpa accusantium quasi voluptatibus omnis hic ipsum
            odio. Sed tempore at unde reprehenderit placeat voluptatum ut. Quam,
            repudiandae tenetur. Quisquam temporibus molestias maiores amet nam.
            <br />
            <br />
            -Dynamic And Affordable Website -Fast And Reliable Website
            <br />
            -Dynamic And Affordable Website
            <Button url="/contact" text="Contact" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
