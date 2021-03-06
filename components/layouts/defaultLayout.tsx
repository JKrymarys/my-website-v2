import Head from "next/head";

import { ReactNode } from "react";

import styles from "styles/DefaultLayout.module.css";

export function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Jakub Krymarys</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>

      <footer className={styles.footer}>Created by jkrymarys.pl</footer>
    </>
  );
}
