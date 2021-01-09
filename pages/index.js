import Head from "next/head";
import NavigationBar from "../Components/NavigationBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>hello Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Bika's Project</h1>
      </main>

      <footer className={styles.footer}>
        <a>Powered by Ambika</a>
      </footer>
    </div>
  );
}
