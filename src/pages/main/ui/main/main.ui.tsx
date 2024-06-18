import styles from "./main.module.scss";

import { List } from "@/widgets/list";
import { Search } from "@/widgets/search";

export function Main() {
  return (
    <main className={styles.main}>
      <Search />
      <List />
    </main>
  );
}
