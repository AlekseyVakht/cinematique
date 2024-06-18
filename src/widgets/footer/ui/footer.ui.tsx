import styles from "./footer.module.scss";
import { Logo } from "@/shared/ui/text-logo";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <Logo size="small" />
        <p className={styles.year}>&copy;2024</p>
      </div>
    </footer>
  );
}
