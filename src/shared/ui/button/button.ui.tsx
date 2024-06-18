import { ButtonHTMLAttributes } from "react";
import { ReactNode } from "react";

import clsx from "clsx";
import styles from "./button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode | "string";
};

export function Button(props: ButtonProps) {
  const { type = "button", children, ...other } = props;
  return (
    <button
      type={type}
      className={clsx(
        styles.base,
        typeof children === "string" && styles.button,
      )}
      {...other}
    >
      {children}
    </button>
  );
}
