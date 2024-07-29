import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Headline from "@/components/Headline";
import { useCallback, useEffect, useState } from "react";

export default function Home() {

  const [count, setCount] = useState(1);


  const handleClick = useCallback(
    (e) => {
      if(count <10){
        setCount((count) => count + 1);
      }
    },[])

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue"
    return () => {
      document.body.style.backgroundColor = "pink"
    }
  }, [])

  return (
    <>

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div style={{margin:"0 auto",textAlign:"center"}}>
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      </div>

      <Main page="index" />
      <Footer />
    </>
  );
}