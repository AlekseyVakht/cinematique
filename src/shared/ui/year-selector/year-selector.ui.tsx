import styles from "./year-selector.module.scss";

import { dateGenerator } from "@/shared/lib";

export function YearSelector() {
  const options = dateGenerator();
  return (
    <div className={styles["custom-select"]}>
      <select>
        <option value="" selected disabled>
          с
        </option>
        {options.map((item) => (
          <option key={`start-${item}`} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select>
        <option value="" selected disabled>
          по
        </option>
        {options.reverse().map((item) => (
          <option key={`start-${item}`} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
