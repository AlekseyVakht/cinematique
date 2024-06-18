import styles from "./error-text.module.scss";

export function ErrorText({ children }: { children: string }) {
  return <p className={styles.text}>{children}</p>;
}
