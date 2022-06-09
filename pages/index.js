import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <div className={styles.container}>
        <Head>
          <title>Coca</title>
          <meta name="description" content="Locab" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
hello world
        </main>
      </div>
    </Layout>
  );
}
