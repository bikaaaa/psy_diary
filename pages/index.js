import Head from "next/head";
import NavigationBar from "../Components/NavigationBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PsyDiary</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome back</h1>
        <p className={styles.p}> I hope you are having a wonderful day! Let's see what we have planned.</p>
      </main>

    </div>
  );
}