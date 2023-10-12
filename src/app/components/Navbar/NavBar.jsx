import Link from "next/link";
import React from "react";
import style from "./navbar.module.css";
import DarkMoodToggle from "../DarkMoodToggle/DarkMoodToggle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },

  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const NavBar = () => {
  return (
    <div className={style.container}>
      <h3 className={style.logo}>
        <Link href="/">Osas</Link>
      </h3>
      <DarkMoodToggle />
      {links.map((link) => {
        return (
          <div className={style.links}>
            <Link key={link.id} href={link.url}>
              {link.title}
            </Link>
          </div>
        );
      })}
      <button className={style.logout}>Logout</button>;
    </div>
  );
};

export default NavBar;
