import classes from "./Main.module.css";
import Headline from "./Headline";
import Links from "./Links";

export function Main(props) {
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
