import { Inter } from "next/font/google";
import classes from "./Footer.module.css";

const inter = Inter({ subsets: ["latin"] });

export function Footer() {
  return (
    <>
    <footer className={classes.footer}>
      <p>フッターコンポーネント</p>
    </footer>
    </>
  );
}
