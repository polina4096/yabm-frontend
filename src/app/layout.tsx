import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import Link from "next/link";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "yabm",
  description: "yet another beatmap mirror",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.body}`}>
        <header>
          <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
              yabm
            </Link>
            <Link href="/browse">browse</Link>
            <Link href="/donate">donate</Link>
            <Link href="/about">about</Link>
          </nav>
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <p>lorem ipsum</p>
          <p>2023</p>
        </footer>
      </body>
    </html>
  );
}
