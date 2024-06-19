import { forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";
import styles from "./selector.module.scss";

import { SubmitFiltersData } from "@/shared/model";

type SelectorProps = {
  options: Array<string | number>;
  data: string;
  register: UseFormRegister<SubmitFiltersData>;
};

export const Selector = forwardRef(function Selector(
  { options, data, register }: SelectorProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <select className={styles.selection} ref={ref} {...register(data)}>
      {options.map((item) => (
        <option key={`${data}-${item}`} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
});
