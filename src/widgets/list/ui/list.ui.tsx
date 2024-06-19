import { useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Card } from "@/entities/movie";
import { GetMore } from "@/features/pagination";
import { ResponseProps, favouriteStore } from "@/shared/model";
import { useGetMovies } from "@/shared/lib";
import { Loader } from "@/shared/ui/loader";

import { Page } from "@/shared/model";

import { Page404 } from "@/widgets/page-404";

import { queryStore } from "@/shared/model";

import styles from "./list.module.scss";

export const List = observer(() => {
  const { pathname } = useLocation();

  const { data, fetchNextPage, isFetchingNextPage, isLoading, hasNextPage } =
    useGetMovies({ key: queryStore.key, query: queryStore.query });

  if (isLoading) return <Loader />;

  const content = (data?.pages as Page[]).map((page) => {
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

  const RenderContent = () => {
    return (
      <>
        {content && content[0].length !== 0 ? (
          <section className={styles.list}>
            <ul className={styles.grid}>{dataForRender}</ul>
            <MoreButton />
          </section>
        ) : (
          <Page404 />
        )}
      </>
    );
  };

  return <RenderContent />;
});
