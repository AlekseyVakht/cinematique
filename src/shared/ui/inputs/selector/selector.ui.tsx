import { forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";
import styles from "./selector.module.scss";

import { SubmitData } from "@/shared/model";

interface SelectorProps {
  options: Array<string | number>;
  data: string;
  register: UseFormRegister<SubmitData>;
}

export const Selector = forwardRef(function Selector(
  { options, data, register }: SelectorProps,
  ref,
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
