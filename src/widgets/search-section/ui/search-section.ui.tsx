import styles from "./search-section.module.scss";

import { Search } from "@/widgets/search/ui/search.ui";
import { Filters } from "@/widgets/filters";

export function SearchSection() {
  return (
    <section className={styles.search}>
      <Search />
      <Filters />
    </section>
  );
}
