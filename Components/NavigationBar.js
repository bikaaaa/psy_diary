import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function NavigationBar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
