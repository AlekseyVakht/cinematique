import { forwardRef } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import styles from "./search.module.scss";

type SearchProps = {
  register: UseFormRegister<FieldValues>;
};

export const SearchInput = forwardRef(function SearchInput(
  { register }: SearchProps,
  ref,
) {
  console.log(ref);
  return (
    <input
      className={styles.search}
      maxLength={70}
      type="text"
      {...register("name")}
    />
  );
});
