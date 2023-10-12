import Image from "next/image";
import React from "react";
import hero from "/public/ig.png";
import whatsApp from "/public/whatsApp.png";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}
async function BlogTest({ params }) {
  const data = await getData(params.id);
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            cum officia reprehenderit, exercitationem nam quam ex aspernatur
            sint beatae, eum velit harum, ad non fuga! Iusto eveniet quod, est
            recusandae nostrum eum, similique quo repellendus praesentium velit
            reprehenderit quos incidunt pariatur? Ratione quam accusantium totam
            harum molestiae cumque nostrum hic illum eaque, nobis ullam
            laboriosam maiores iusto et qui quae a ea error? Consequuntur nihil,
            repellendus commodi accusantium ratione odio facere atque
            blanditiis, iure qui neque nostrum! Consequuntur voluptas cupiditate
            perferendis fugiat quam odio officia hic obcaecati, eligendi vero
            libero accusamus saepe id velit distinctio eos beatae a, ipsum nam?
          </p>
          <div className={styles.author}>
            <Image src={hero} className={styles.avatar} />
            <span className={styles.username}>codeWithSas</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src={whatsApp} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.txt}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim unde
          voluptatum dignissimos, ducimus totam consequuntur, sapiente odit
          libero quis ullam molestiae ut blanditiis tempora est natus minus esse
          veritatis veniam ipsa quisquam. Explicabo reprehenderit non veritatis
          dignissimos tenetur, inventore quae accusantium ut illo, voluptates
          quaerat. Accusamus, corporis dolor dolore debitis esse unde, placeat
          natus illum suscipit, doloribus incidunt repellat obcaecati
          perspiciatis qui numquam? Eligendi iusto magni, sint possimus ipsam et
          molestias assumenda sit enim sed natus distinctio tempora odit aliquam
          maiores minus repellendus itaque fugit autem eos impedit libero
          obcaecati, ipsum quam. Ipsa eveniet dolore, illo magni tenetur
          deserunt obcaecati cum recusandae, quibusdam accusamus odit
          consequatur vel ducimus quia ut in error veniam dignissimos libero et
          reiciendis quos aliquam facere. Laborum nesciunt qui minus repellendus
          eum vitae delectus? Nesciunt quae officia commodi repellendus
          architecto esse. Quas iure accusamus sunt minima, illo harum molestias
          optio? Similique autem, beatae magnam culpa saepe iure, ab, omnis
          laborum minima quae facere. Ullam ut minima asperiores aut iste
          voluptatem voluptas tenetur commodi magni, velit aperiam nam, error
          debitis ea ipsum fuga deleniti delectus repellat. Vel, dicta
          praesentium neque debitis accusantium consectetur nulla voluptates,
          voluptatem quibusdam porro voluptatibus reiciendis itaque laboriosam
          aut perferendis sequi doloremque inventore amet nihil deserunt hic,
          sed excepturi? Odio provident error voluptas quaerat modi? Ipsa, fugit
          harum. Explicabo quas, enim consequuntur similique commodi porro
          officiis veritatis hic consectetur, id quis excepturi vel perferendis
          inventore. Nostrum, ipsa vitae natus a similique maxime explicabo
          praesentium, ipsam vel eligendi minima. Ipsa earum soluta ea repellat.
          Id quas deserunt veniam, quam vel cum laborum sint est fugiat quis
          nemo maxime tempora voluptates, distinctio, quidem dicta molestiae
          beatae! Eligendi nemo officia sapiente. Sed nemo voluptate laborum
          quos nulla magnam officiis totam rem, quaerat fuga distinctio,
          voluptas at consequuntur. Est perspiciatis molestiae sunt, nihil
          officiis esse neque repudiandae similique quae quidem nobis?
          Laboriosam soluta vero modi culpa dolor, voluptatibus corrupti
          pariatur, totam cum obcaecati laudantium dignissimos temporibus.
          Corrupti sequi quae vero aut inventore cum perferendis doloribus at,
          nesciunt alias. Repellendus adipisci enim nostrum, beatae inventore
          expedita, eum maxime quasi ab dolores voluptatibus deleniti libero
          quaerat dolor nam? Beatae voluptatibus possimus quod repellat! Enim
          cumque minus earum nulla fugit soluta nobis autem aperiam delectus
          sunt sequi exercitationem voluptatum ut, similique vero nemo repellat?
          Molestias sequi at aliquam enim aspernatur perferendis magnam possimus
          culpa iure dolorem modi, earum excepturi cum velit exercitationem
          harum nihil dolores necessitatibus corrupti fugit. Minus eos labore
          aperiam temporibus pariatur laudantium dolorum quam id, voluptas illum
          dolorem sint enim cum ullam? Earum debitis explicabo odit ipsum,
          voluptates cupiditate dolor porro laudantium ullam facere, neque illo
          esse, ipsa architecto similique dolorem expedita dolore sunt rerum
          asperiores reprehenderit? Eveniet magnam eius mollitia natus nesciunt
          consectetur eos perferendis, asperiores ipsum non ipsam. Explicabo
          laboriosam blanditiis, quibusdam officia beatae ipsum fuga ipsa
          necessitatibus temporibus quos quaerat, voluptatem voluptate porro
          veritatis illo non molestias molestiae hic? Iste nesciunt porro,
          quisquam autem commodi suscipit eveniet vitae praesentium architecto
          saepe iure numquam cupiditate ea dolore facilis accusantium voluptatem
          fuga dignissimos libero. Aut, nisi?
        </p>
      </div>
    </div>
  );
}

export default BlogTest;
