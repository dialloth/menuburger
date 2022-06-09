import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello world, voici ma page contact</h1>
      </main>
    </Layout>
  );
}