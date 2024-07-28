import classes from "./Main.module.css";
import Links from "../Links";
import Headline from "../Headline";
import { useEffect } from "react";


export default function Main(props) {
  return (
    <>
      <main className={classes.main}>
      <Headline page={props.page}>
        <code className={classes.code}>
         {props.page}
        </code>
      </Headline>
      <Links/>
      </main>
    </>
  );
}
