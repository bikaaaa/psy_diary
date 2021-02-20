import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function NavigationBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loginCookie = JSON.parse(localStorage.getItem("login_cookie"));
    setIsLoggedIn(loginCookie);
  }, []);

  const handleLogout = () => {
    localStorage.setItem("login_cookie", false);
    router.push("/login");
  };

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
      <button
        onClick={isLoggedIn ? handleLogout : () => router.push("/login")}
        className={styles["login-button"]}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}
