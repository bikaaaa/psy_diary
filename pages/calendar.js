import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavigationBar from "../Components/NavigationBar";

export default function about() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PsyDiary</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <NavigationBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Calendar</h1>
        <p className={styles.p}> Find all your past and upcoming sessions.</p>
        
      </main>
    
    </div>
  );
}