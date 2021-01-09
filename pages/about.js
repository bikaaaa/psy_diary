import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavigationBar from "../Components/NavigationBar";

export default function about() {
  return (
    <div className={styles.container}>
      <Head>
        <title>hello Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Bika's About Page</h1>
      </main>

      <footer className={styles.footer}>
        <a>Powered by Ambika</a>
      </footer>
    </div>
  );
}
