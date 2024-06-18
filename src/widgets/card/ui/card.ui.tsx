import { observer } from "mobx-react-lite";
import styles from "./card.module.scss";

import { getRating } from "@/shared/lib/get-rating";

import { ResponseProps } from "@/entities/movie";

import { Rating } from "@/shared/ui/rating";
import { AddToFavourite } from "@/features/movie";
import { ExpandInfo } from "@/features/movie";

export const Card = observer(({ film }: { film: ResponseProps }) => {
  const {
    id,
    name,
    rating: { kp },
    year,
    poster,
  } = film;
  return (
    <div className={styles.card}>
      <Rating value={getRating(kp)} />
      <div className={styles.poster_container}>
        <ExpandInfo id={id}>
          <img src={poster?.url} className={styles.poster} alt={name} />
        </ExpandInfo>
      </div>

      <div className={styles.description}>
        <p className={styles.heading}>{name}</p>
        <p className={styles.year}>{year}</p>
        <div className={styles.controls}>
          <AddToFavourite data={film} />
        </div>
      </div>
    </div>
  );
});
