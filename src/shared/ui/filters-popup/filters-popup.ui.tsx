import { ReactNode, useEffect } from "react";
import clsx from "clsx";
import { observer } from "mobx-react-lite";

import { popupStore } from "@/shared/model/store";

import styles from "./filters-popup.module.scss";

type FiltersProps = {
  children: ReactNode;
  opened: boolean;
  onSubmit: () => void;
};

export const FiltersPopup = observer((props: FiltersProps) => {
  const { opened, children, onSubmit } = props;
  useEffect(() => {
    const handlePressEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        popupStore.changeIsOpened();
      }
    };
    document.addEventListener("keydown", handlePressEsc);
    return () => {
      document.removeEventListener("keydown", handlePressEsc);
    };
  }, []);

  return (
    <form
      onSubmit={onSubmit}
      className={clsx(styles.container, opened && styles.opened)}
    >
      {children}
    </form>
  );
});
