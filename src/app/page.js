import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Quizzical</h1>
      <p className={styles.desc}>Test your knowledge</p>
      <Link href="/quiz">
        <button className={styles.btnStart}>Start quiz</button>
      </Link>
    </main>
  );
}
