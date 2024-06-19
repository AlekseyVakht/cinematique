import { forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";
import styles from "./search.module.scss";

import { SubmitData } from "@/shared/model";

type SearchProps = {
  register: UseFormRegister<SubmitData>;
};

export const SearchInput = forwardRef(function SearchInput(
  props: SearchProps,
  ref,
) {
  const { register, ...other } = props;
  return (
    <input
      className={styles.search}
      maxLength={70}
      type="text"
      ref={ref}
      {...register("name")}
      {...other}
    />
  );
});
