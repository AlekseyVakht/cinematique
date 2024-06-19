import { forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";
import styles from "./genre.module.scss";

import { SubmitData } from "@/shared/model";

type GenreButtonProps = {
  text: string;
  register: UseFormRegister<SubmitData>;
};

export const GenreButton = forwardRef(function GenreButton(
  { text, register }: GenreButtonProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <label className={styles["custom-checkbox"]}>
      <input type="checkbox" value={text} ref={ref} {...register("genre")} />
      <span>
        <p className={styles.text}>{text}</p>
      </span>
    </label>
  );
});
