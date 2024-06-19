import styles from "./main.module.scss";

import { List } from "@/widgets/list";
import { SearchSection } from "@/widgets/search-section";

export function Main() {
  return (
    <main className={styles.main}>
      <SearchSection />
      <List />
    </main>
  );
}
