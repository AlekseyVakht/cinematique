import { useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Card } from "@/widgets/card";

import { GetMore } from "@/features/pagination";

import { ResponseProps, favouriteStore } from "@/shared/model";
import { useGetMovies } from "@/shared/lib";

import styles from "./list.module.scss";

interface DocsData {
  docs: ResponseProps[];
}

export const List = observer(() => {
  const { data, isLoading } = useGetMovies();
  const location = useLocation();

  if (isLoading) return <p>loading....</p>;

  const { docs } = data as DocsData;
  const dataForRender =
    location.pathname === "/" ? docs : favouriteStore.favourites;

  return (
    <section className={styles.list}>
      <ul className={styles.grid}>
        {dataForRender?.map((item: ResponseProps) => (
          <Card key={item.id} film={item} />
        ))}
      </ul>
      <div className={styles.more}>
        <GetMore />
      </div>
    </section>
  );
});
