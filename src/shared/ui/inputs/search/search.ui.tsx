import { forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";
import styles from "./search.module.scss";

import { SubmitSearchData } from "@/shared/model";

type SearchProps = {
  error?: string;
  register: UseFormRegister<SubmitSearchData>;
};

export const SearchInput = forwardRef(function SearchInput(
  props: SearchProps,
  ref,
) {
  const { register, error } = props;
  return (
    <input
      className={styles.search}
      maxLength={70}
      type="text"
      placeholder={error}
      ref={ref}
      {...register("name")}
    />
  );
});
