import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import NavigationBar from "../Components/NavigationBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem("login_cookie"));
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>hello Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome back</h1>
        <p className={styles.p}>
          {" "}
          I hope you are having a wonderful day! Let's see what we have planned.
        </p>
      </main>
    </div>
  );
}
