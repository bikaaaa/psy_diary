import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function NavigationBar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/contacts">
        <a>Contacts</a>
      </Link>
      <Link href="/calendar">
        <a>Calendar</a>
      </Link>
      <Link href="/notes">
        <a>Notes</a>
      </Link>
      <Link href="/invoice">
        <a>Invoices</a>
      </Link>
    </div>
  );
}
