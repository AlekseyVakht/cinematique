import { useLocation } from "react-router-dom";

import { FilmCard } from "@/widgets/film-card";

import { ResponseProps } from "@/shared/model";
import { useGetMovieById } from "@/shared/lib";

import styles from "./film.module.scss";

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
