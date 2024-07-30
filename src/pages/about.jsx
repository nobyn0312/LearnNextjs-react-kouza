import Head from "next/head";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { useCallback, useEffect, useState } from "react";
import { useCounter } from "@/hooks/useCounter";
import { useInputArray } from "@/hooks/useInputArray";
import { useBgLightBlue } from "@/hooks/useBgLightBlue";



export default function About() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgLightBlue();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div style={{ margin: "0 auto", textAlign: "center" }}>
        {isShow ? (<h1>{count}</h1>) : (null)}
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
