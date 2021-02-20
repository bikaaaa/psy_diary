import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function NavigationBar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a>Home</a>
      </Link>
<<<<<<< HEAD
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
=======
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
>>>>>>> 7b665585916918ae0310d2d633cf909f05c9664c
