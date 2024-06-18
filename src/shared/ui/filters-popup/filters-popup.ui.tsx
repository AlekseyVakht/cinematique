import { ReactNode } from "react";
import styles from "./filters-popup.module.scss";

import clsx from "clsx";

type FiltersProps = {
  children: ReactNode;
  opened: boolean;
};

export function FiltersPopup(props: FiltersProps) {
  const { opened, children } = props;
  return (
    <div className={clsx(styles.container, opened && styles.opened)}>
      {children}
    </div>
  );
}
