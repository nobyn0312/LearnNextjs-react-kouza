import classes from "./Main.module.css";
import Links from "../Links";
import Headline from "../Headline";
import { useCallback, useState } from "react";


const ITEMS = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Documentation→",
    description: "Find in-depth information about Next.js features and&nbsp;API."
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Learn→",
    description: "Find in-depth information about Next.js features and&nbsp;API."
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Templates→",
    description: "Discover and deploy boilerplate example Next.js&nbsp;projects."
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy→",
    description: " Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel."
  },
]


export default function Main(props) {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1)
    })
  }, [])

  return (
    <>
      <main className={classes.main}>
        <Headline page={props.page}>
          <code className={classes.code}>
            {props.page}
          </code>
        </Headline>
        <Links items={items} handleReduce={handleReduce} />
      </main>
    </>
  );
}
