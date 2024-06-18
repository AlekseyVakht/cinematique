import styles from "./error.module.scss";
import { ErrorText } from "@/shared/ui/error-text";
import { LinkTab } from "@/shared/ui/link";

type ErrorProps = {
  text: string;
  route: string;
  link: string;
};

export function Error(props: ErrorProps) {
  const { text, route, link } = props;
  return (
    <section className={styles.error}>
      <ErrorText>{text}</ErrorText>
      <LinkTab route={route} text={link} />
    </section>
  );
}
