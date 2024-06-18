import { useLocation } from "react-router-dom";
import { ResponseProps, useGetMovieById } from "@/entities/movie";

import styles from "./film.module.scss";
import { FilmCard } from "@/widgets/film-card";

export const Film = () => {
  const { state } = useLocation();
  const { data, isLoading } = useGetMovieById(state);

  const response = data as ResponseProps;

  if (isLoading) return <p>loadgin...</p>;

  console.log(data);

  return (
    <section className={styles.film}>
      <FilmCard data={response} />
    </section>
  );
};
