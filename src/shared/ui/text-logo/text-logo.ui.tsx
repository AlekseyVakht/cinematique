import styles from "./text-logo.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import clsx from "clsx";

type LogoProps = {
  size: "small" | "default";
};

export function Logo({ size }: LogoProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/", { replace: true });
  };
  return (
    <NavLink
      to="/"
      onClick={handleClick}
      className={styles.link}
      reloadDocument
    >
      <p className={clsx(styles.heading, size && styles[size])}>cinematique</p>
    </NavLink>
  );
}
