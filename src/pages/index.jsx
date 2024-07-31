import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Headline from "@/components/Headline";
import { useCallback, useEffect, useState } from "react";

export default function Home(props) {
  // const { count, isShow, handleClick, handleDisplay, text, array, handleChange, handleAdd } = props;


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div style={{ margin: "0 auto", textAlign: "center" }}>
        {props.isShow ? (<h1>{props.count}</h1>) : (null)}
        <button onClick={props.handleClick}>ボタン</button>
        <button onClick={props.handleDisplay}>
          {props.isShow ? "非表示" : "表示"}</button>
        <br />
        <input type="text"
          value={props.text}
          onChange={props.handleChange} />

        <br />
        <button onClick={props.handleAdd}>配列追加</button>
        <ul>
          {props.array.map((item) => {
            return <li key={item}>{item}</li>
          })}
        </ul>
      </div>

      <Main page="index" />
      <Footer />
    </>
  );
}