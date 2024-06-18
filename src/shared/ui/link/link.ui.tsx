import styles from "./link.module.scss";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

type LinkTabProps = {
  route: string;
  text: string;
};

export function LinkTab(props: LinkTabProps) {
  const { route, text } = props;
  const LinkClassName = ({ isActive }: { isActive: boolean }): string =>
    clsx(styles.link, isActive && styles.active);
  return (
    <NavLink to={route} className={LinkClassName}>
      {text}
    </NavLink>
  );
}
