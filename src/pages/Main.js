import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Headline from "../../components/Headline";
import Links from "../../components/Links";

export function Main(props) {
  return (
    <>
      <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>
         {props.page}
        </code>
      </Headline>
      <Links/>
      </main>
    </>
  );
}
