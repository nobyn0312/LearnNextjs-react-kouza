import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Headline from "@/components/Headline";
import { useCallback } from "react";

export default function Home() {

  const handleClick=useCallback((e)=>{
      console.log(e.target.href);
      e.prevent.Default();
      alert("");
  },[])


  return (
    <>
    <div className={styles.container}></div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main page="index" />

      <a href="/about" onClick={handleClick}>ボタン</a>
      <Footer />
    </>
  );
}