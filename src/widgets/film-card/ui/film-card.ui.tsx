import { ResponseProps } from "@/entities/movie";

import { AddToFavourite } from "@/features/movie";
import styles from "./film-card.module.scss";
import { observer } from "mobx-react-lite";

export const FilmCard = observer(({ data }: { data: ResponseProps }) => {
  const {
    name,
    description,
    poster,
    rating: { kp },
    year,
    movieLength,
    genres,
  } = data;
  console.log(kp);
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.base_info}>
          <div className={styles.info}>
            <p>{year}</p>
            <p>Кристофер Нолан</p>
          </div>
          <div className={styles.info}>
            {genres.map((item: { name: string }) => (
              <p key={`genre-${item.name}`}>{item.name}</p>
            ))}
            <p className={styles.duration}>{`${movieLength} мин.`}</p>
          </div>
        </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.controls}>
          <AddToFavourite data={data} />
        </div>
      </div>
      <div className={styles.poster_container}>
        <img src={poster?.url} className={styles.poster} />
      </div>
    </div>
  );
});
