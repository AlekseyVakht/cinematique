import { useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import clsx from "clsx";

import { Card } from "@/entities/movie";
import { GetMore } from "@/features/pagination";
import { ResponseProps, favouriteStore } from "@/shared/model";
import { useGetMovies } from "@/shared/lib";
import { Loader } from "@/shared/ui/loader";

import { Page } from "@/shared/model";
import { queryStore } from "@/shared/model/store";

import styles from "./list.module.scss";

export const List = observer(() => {
  const { pathname } = useLocation();
  const gridClassName = clsx(
    styles.grid,
    pathname !== "/" && styles.grid_favourites,
  );

  const { data, fetchNextPage, isFetchingNextPage, isLoading, hasNextPage } =
    useGetMovies({ key: queryStore.key, query: queryStore.query });

  if (isLoading) return <Loader />;

  const content = data?.pages.map((page: Page) => {
    return page.docs.map((film: ResponseProps) => (
      <Card key={film.id} film={film} />
    ));
  });

  const favourites = favouriteStore.favourites.map((item: ResponseProps) => (
    <Card key={item.id} film={item} />
  ));

  const dataForRender = pathname === "/" ? content : favourites;
  const MoreButton = () => {
    return (
      <div className={styles.more}>
        {isFetchingNextPage ? (
          <Loader />
        ) : (
          hasNextPage &&
          pathname === "/" && <GetMore onClick={() => fetchNextPage()} />
        )}
      </div>
    );
  };

  return (
    <section className={styles.list}>
      <ul className={gridClassName}>{dataForRender}</ul>
      <MoreButton />
    </section>
  );
});
