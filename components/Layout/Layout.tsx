import React from "react";
import Head from "next/head";
import { Sidebar, Navbar } from "components";
import css from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className={css.container}>
      <Head>
        <title>Дмитрий Бодров</title>
        <meta
          name="description"
          content="Frontend разработка любой сложности"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <main className={css.main}>
        <Navbar />
        <section>{children}</section>
      </main>
    </div>
  );
}
