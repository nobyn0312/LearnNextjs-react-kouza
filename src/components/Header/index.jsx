import Link from "next/link";
import classes from "./Header.module.css"

export default function Header() {
  return (
    <>
    <header className={classes.header}>
    <Link href="/">index</Link>
      <Link href="/about">about</Link>
    </header>
    </>
  );
}
