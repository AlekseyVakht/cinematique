import { observer } from "mobx-react-lite";

import { AddToFavourite } from "@/features/movie";
import { ExpandInfo } from "@/features/movie";

import { Rating } from "@/shared/ui/rating";
import { ResponseProps } from "@/shared/model";
import { getRating } from "@/shared/lib";

import noImagePath from "@/shared/assets/images/no-image.png";

import styles from "./card.module.scss";

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
      <div className={styles.rating}>
        <Rating value={getRating(kp)} />
      </div>

      <div className={styles.poster_container}>
        <ExpandInfo id={id}>
          <img
            src={poster?.url ? poster.url : noImagePath}
            className={styles.poster}
            alt={name}
          />
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
