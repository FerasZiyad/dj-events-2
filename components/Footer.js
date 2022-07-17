import styles from "@/styles/footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; DJ events 2021</p>
      <p>
        <Link href="/about">About this project</Link>
      </p>
    </footer>
  );
}
