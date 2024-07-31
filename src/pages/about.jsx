import Head from "next/head";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { useCallback, useEffect, useState } from "react";


export default function About(props) {
  const { count, isShow, handleClick, handleDisplay, text, array, handleChange, handleAdd ,doubleCount} = props;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div style={{ margin: "0 auto", textAlign: "center" }}>
      <p>2倍した値</p>
        {isShow ? (<h1>{doubleCount}</h1>) : (null)}
        <button onClick={handleClick}>ボタン</button>
        <button onClick={handleDisplay}>
          {isShow ? "非表示" : "表示"}</button>
        <br />
        <input type="text"
          value={text}
          onChange={handleChange} />

        <br />
        <button onClick={handleAdd}>配列追加</button>
        <ul>
          {array.map((item) => {
            return <li key={item}>{item}</li>
          })}
        </ul>
      </div>
      <Main page="about" />
      <Footer />
    </>
  );
}
