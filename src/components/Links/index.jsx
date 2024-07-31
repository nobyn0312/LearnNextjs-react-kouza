import { useCallback, useState } from "react";
import classes from "./Links.module.css";

export default function Links({ items, handleReduce }) {

  return (
    <>
      <br />
      <button onClick={handleReduce}>減らす</button>

      <div className={classes.grid}>
        {items.map(item => {
          return (
            <a
              key={item.href}
              href={item.href}
              className={classes.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                {item.title}
              </h2>
              <p>
                {item.description}
              </p>
            </a>
          )
        })}
      </div>
    </>

  )
}