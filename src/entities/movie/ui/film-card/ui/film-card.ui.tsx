import { observer } from "mobx-react-lite";

import { ResponseProps } from "@/shared/model";

import { AddToFavourite } from "@/features/movie";

import { Rating } from "@/shared/ui/rating";
import { getRating } from "@/shared/lib";

import noImagePath from "@/shared/assets/images/no-image.png";

import styles from "./film-card.module.scss";

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

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.base_info}>
          <div className={styles.info}>
            <p>{year}</p>
            <div className={styles.aligner}>
              <Rating value={getRating(kp)} />
              <AddToFavourite data={data} />
            </div>
          </div>
          <div className={styles.genres}>
            <div className={styles.genres_item}>
              {genres.map((item: { name: string }) => (
                <p key={`genre-${item.name}`}>{item.name}</p>
              ))}
            </div>

            <p className={styles.duration}>{`${movieLength} мин.`}</p>
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        {/* <div className={styles.controls}>
          
        </div> */}
      </div>
      <div className={styles.poster_container}>
        <img
          src={poster?.url ? poster.url : noImagePath}
          className={styles.poster}
          alt={name}
        />
      </div>
    </div>
  );
});
