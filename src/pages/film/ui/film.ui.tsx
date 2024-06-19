import { useLocation } from "react-router-dom";

import { FilmCard } from "@/entities/movie";

import { Page404 } from "@/widgets/page-404";

import { ResponseProps } from "@/shared/model";
import { useGetMovieById } from "@/shared/lib";

import { Loader } from "@/shared/ui/loader";

import styles from "./film.module.scss";

export const Film = () => {
  const { state } = useLocation();
  const { data, isLoading, isError } = useGetMovieById(state);

  if (isError) return <Page404 />;
  if (isLoading) return <Loader />;

  const response = data as ResponseProps;

  return (
    <section className={styles.film}>
      <FilmCard data={response} />
    </section>
  );
};
