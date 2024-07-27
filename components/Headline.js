import React from "react";
import styles from "@/styles/Home.module.css";


export default function Headline(props) {
  return (
    <>
    <h1 className={styles.title}>{props.page} Page</h1>
    <p className={styles.description}>
    get started
    </p>
    <code className={styles.code}>pages/{props.children}</code>
    </>
  );
}
