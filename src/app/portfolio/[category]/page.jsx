import Button from "@/app/components/Button/Button";
import Image from "next/image";
import React from "react";
import hero from "/public/fb.png";
import style from "./page.module.css";

function Category({ params }) {
  console.log(params);
  return (
    <div>
      <h1 className={style.catTitle}>{params.category}</h1>
      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>Test</h1>
          <p className={style.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={style.imgContainer}>
          <Image className={style.img} src={hero} />
        </div>
      </div>
      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>Test</h1>
          <p className={style.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={style.imgContainer}>
          <Image className={style.img} src={hero} />
        </div>
      </div>
      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>Test</h1>
          <p className={style.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={style.imgContainer}>
          <Image className={style.img} src={hero} />
        </div>
      </div>
      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>Test</h1>
          <p className={style.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={style.imgContainer}>
          <Image className={style.img} src={hero} />
        </div>
      </div>
      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>Test</h1>
          <p className={style.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={style.imgContainer}>
          <Image className={style.img} src={hero} />
        </div>
      </div>
    </div>
  );
}

export default Category;
