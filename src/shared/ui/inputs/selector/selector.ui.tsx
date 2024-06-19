import { forwardRef } from "react";
import styles from "./selector.module.scss";

type SelectorProps = {
  options: Array<string | number>;
  data: string;
};

export const Selector = forwardRef(function Selector(
  { options, data, ...other }: SelectorProps,
  ref: React.ForwardedRef<HTMLSelectElement>,
) {
  return (
    <select className={styles.selection} ref={ref} {...other}>
      {options.map((item) => (
        <option key={`${data}-${item}`} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
});
