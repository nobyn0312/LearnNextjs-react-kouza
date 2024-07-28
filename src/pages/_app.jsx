import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Component {...pageProps} />;
    </>

  )
}
