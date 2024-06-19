import { forwardRef } from "react";
import styles from "./genre.module.scss";

type GenreButtonProps = {
  text: string;
};

export const GenreButton = forwardRef(function GenreButton(
  { text, ...other }: GenreButtonProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <label className={styles["custom-checkbox"]}>
      <input type="checkbox" value={text} ref={ref} {...other} />
      <span>
        <p className={styles.text}>{text}</p>
      </span>
    </label>
  );
});
