import { forwardRef } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import styles from "./genre.module.scss";

type GenreButtonProps = {
  text: string;
  register: UseFormRegister<FieldValues>;
};

export const GenreButton = forwardRef(function GenreButton(
  { text, register }: GenreButtonProps,
  ref,
) {
  console.log(ref);
  return (
    <label className={styles["custom-checkbox"]}>
      <input type="checkbox" value={text} {...register("genre")} />
      <span>
        <p className={styles.text}>{text}</p>
      </span>
    </label>
  );
});
