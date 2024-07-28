import { Inter } from "next/font/google";
import Link from "next/link";
import classes from "./Header.module.css"

const inter = Inter({ subsets: ["latin"] });

export function Header() {
  return (
    <>
    <header className={classes.header}>
    <Link href="/">index</Link>
      <Link href="/about">about</Link>
    </header>
    </>
  );
}
