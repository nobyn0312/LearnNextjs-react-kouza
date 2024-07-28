import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Headline from "@/components/Headline";

export default function Home() {
  return (
    <>
    <div className={styles.container}></div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main page="index" />
      <Footer />
    </>
  );
}