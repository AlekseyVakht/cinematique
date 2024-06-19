import { forwardRef } from "react";
import styles from "./search.module.scss";

type SearchProps = {
  error?: string;
};

export const SearchInput = forwardRef(function SearchInput(
  props: SearchProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const { error, ...other } = props;
  return (
    <input
      className={styles.search}
      maxLength={70}
      type="text"
      placeholder={error}
      ref={ref}
      {...other}
    />
  );
});
