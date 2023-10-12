import Image from "next/image";
import Link from "next/link";
import React from "react";
import hero from "/public/fb.png";
import style from "./page.module.css";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Blog = async () => {
  const data = await getData();
  return (
    <div className={style.mainContainer}>
      {data.map((item) => {
        return (
          <Link href="/blog/testId" className={style.container}>
            <div className={style.imgContainer}>
              <Image src={hero} className={style.img} />
            </div>
            <div className={style.content}>
              <h1 className={style.title}>{item.title}</h1>
              <div className={style.desc}>desc</div>
            </div>
          </Link>
        );
      })}
      {/* <Link href="/blog/testId" className={style.container}>
        <div className={style.imgContainer}>
          <Image src={hero} className={style.img} />
        </div>
        <div className={style.content}>
          <h1 className={style.title}></h1>
          <div className={style.desc}></div>
        </div>
      </Link>{" "}
      <Link href="/blog/testId" className={style.container}>
        <div className={style.imgContainer}>
          <Image src={hero} className={style.img} />
        </div>
        <div className={style.content}>
          <h1 className={style.title}></h1>
          <div className={style.desc}></div>
        </div>
      </Link>{" "}
      <Link href="/blog/testId" className={style.container}>
        <div className={style.imgContainer}>
          <Image src={hero} className={style.img} />
        </div>
        <div className={style.content}>
          <h1 className={style.title}></h1>
          <div className={style.desc}></div>
        </div>
      </Link> */}
    </div>
  );
};

export default Blog;
