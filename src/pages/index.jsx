import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Headline from "@/components/Headline";
import { useCallback, useEffect, useState } from "react";

export default function Home() {

  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);


  const handleClick = useCallback(
    (e) => {
      if (count < 10) {
        setCount((prevCount) => prevCount + 1);
      }
    }, [count])

    const handleDisplay =useCallback((()=>{
      setIsShow((prevIsShow)=>!prevIsShow)
    },[]))

            // if(isShow){
        //   return false;
        // }
        // 三項演算子ver
        // return isShow ? false : true;

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue"
    return () => {
      document.body.style.backgroundColor = "pink"
    }
  }, [])

  const handleChange =useCallback((e) => {
    setText(e.target.value)
   },[])

   const handleAdd = useCallback(()=>{
    setArray((prevArray)=>{
      if(prevArray.some(item => item === text)){
        alert("同じ")
        return prevArray;
      }
      return newArray = [...prevArray, text]
    });
   },[text])

  return (
    <>

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div style={{ margin: "0 auto", textAlign: "center" }}>
       {isShow ? ( <h1>{count}</h1>):(null)}
        <button onClick={handleClick}>ボタン</button>
        <button onClick={handleDisplay}>
        {isShow ? "非表示" : "表示"}</button>
        <br />
        <input type="text"
         value={text}
         onChange={handleChange} />

         <br/>
         <button onClick={handleAdd}>配列追加</button>
         <ul>
          {array.map((item)=>{
            return <li key={item}>{item}</li>
          })}
         </ul>
      </div>

      <Main page="index" />
      <Footer />
    </>
  );
}