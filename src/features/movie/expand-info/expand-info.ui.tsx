import { Link } from "react-router-dom";
import styles from "./expand-info.module.scss";
import { ReactNode } from "react";

type LinkProps = {
  id: number;
  children: ReactNode;
};

export function ExpandInfo(props: LinkProps) {
  const { id, children } = props;
  const route = `/film/${id}`;
  return (
    <Link to={route} className={styles.link} state={id}>
      {children}
    </Link>
  );
}
