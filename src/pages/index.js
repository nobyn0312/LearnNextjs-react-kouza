import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "./Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main page="index" />
      <Footer />
    </>
  );
}
