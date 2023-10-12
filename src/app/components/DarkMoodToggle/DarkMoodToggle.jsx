"use client";

import React, { useContext } from "react";
import style from "./page.module.css";
import { ThemeContext } from "../../../context/ThemeContext";
function DarkMoodToggle() {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={style.container} onClick={toggle}>
      <div className={style.icon}>light</div>
      <div className={style.icon}>dark</div>
      <div
        className={style.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
}

export default DarkMoodToggle;
