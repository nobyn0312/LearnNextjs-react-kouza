import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";

export default function About() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main page="about" />
      <Footer />
    </>
  );
}
