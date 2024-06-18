import styles from "./go-tofavourite.module.scss";
import { NavLink } from "react-router-dom";
import { Button } from "@/shared/ui/button";

export function GoToFavourite() {
  return (
    <NavLink to="/favourites" className={styles.link}>
      <Button>избранное</Button>
    </NavLink>
  );
}
