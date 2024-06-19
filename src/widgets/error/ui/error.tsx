import { ErrorText } from "@/shared/ui/error-text";
import { LinkTab } from "@/shared/ui/link";

import styles from "./error.module.scss";

type ErrorProps = {
  text: string;
  route?: string;
  link?: string;
};

export function Error(props: ErrorProps) {
  const { text, route, link } = props;
  return (
    <section className={styles.error}>
      <ErrorText>{text}</ErrorText>
      {route && <LinkTab route={route} text={link} />}
    </section>
  );
}
