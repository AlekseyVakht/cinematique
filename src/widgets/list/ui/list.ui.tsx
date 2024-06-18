import styles from "./list.module.scss";
import { useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Card } from "@/widgets/card";
import { GetMore } from "@/features/pagination";
import { favouriteStore, useGetMoviesHook } from "@/entities/movie";

import { ResponseProps } from "@/entities/movie";

export const List = observer(() => {
  const { data, isLoading } = useGetMoviesHook();
  const location = useLocation();
  if (isLoading) return <p>loading....</p>;
  const docs = data && "docs" in data ? data.docs : [];
  const dataForRender =
    location.pathname === "/" ? docs : favouriteStore.favourites;

  return (
    <section className={styles.list}>
      <ul className={styles.grid}>
        {dataForRender.map((item: ResponseProps) => (
          <Card key={item.id} film={item} />
        ))}
      </ul>
      <div className={styles.more}>
        <GetMore />
      </div>
    </section>
  );
});
