import { Logo } from "@/shared/ui/text-logo";

import { getCurrentYear } from "@/shared/lib";

import styles from "./footer.module.scss";

export function Footer() {
  const year = getCurrentYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <Logo size="small" />
        <p className={styles.year}>&copy;{year}</p>
      </div>
    </footer>
  );
}
