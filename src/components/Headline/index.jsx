import React from "react";
import classes from "./Headline.module.css";

export default function Headline(props) {
  return (
    <>
      <h1 className={classes.title}>{props.page} Page</h1>
      <p className={classes.description}>
        get started
      </p>

      <code className={classes.code}>pages/{props.children}</code>
    </>
  );
}
