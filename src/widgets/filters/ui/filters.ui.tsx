import styles from "./filters.module.scss";

import { queryStore, popupStore } from "@/shared/model";
import { SubmitFiltersData } from "@/shared/model";
import { FiltersPopup } from "@/shared/ui/filters-popup";
import { Selector } from "@/shared/ui/inputs/selector";
import { GenreButton } from "@/shared/ui/genre";
import { Button } from "@/shared/ui/button";
import { dateGenerator, ratingGenerator } from "@/shared/lib";

import { GENRES } from "@/shared/lib";
import { filterByParams } from "../lib/filter";

import { useForm } from "react-hook-form";

import { filterSchema } from "../lib/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { observer } from "mobx-react-lite";

export const Filters = observer(() => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubmitFiltersData>({
    resolver: yupResolver(filterSchema),
  });

  const handleReset = () => {
    reset();
  };

  const onSubmit = (data: SubmitFiltersData) => {
    queryStore.setQuery(filterByParams(data));
    queryStore.setKey("filtered");
    console.log(queryStore.query);
    popupStore.changeIsOpened();
    reset();
  };

  return (
    <FiltersPopup
      opened={popupStore.isOpened}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.wrapper}>
        <p className={styles.label}>Выбери жанр (или жанры)</p>
        <div className={styles.filters}>
          {GENRES.map((item) => (
            <GenreButton register={register} key={item} text={item} />
          ))}
        </div>
      </div>
      <div className={styles.selections}>
        <div className={styles.wrapper}>
          <p className={styles.label}>Выбери годы</p>
          <div className={styles.items}>
            <Selector
              register={register}
              options={dateGenerator()}
              data="startYear"
            />
            <div className={styles.separator}></div>
            <Selector
              register={register}
              options={dateGenerator().reverse()}
              data="endYear"
            />
          </div>
          {errors.endYear && (
            <p className={styles.label}>{errors.endYear?.message}</p>
          )}
        </div>
        <div className={styles.wrapper}>
          <p className={styles.label}>Выбери рейтинг</p>
          <div className={styles.items}>
            <Selector
              register={register}
              options={ratingGenerator()}
              data="startRating"
            />
            <div className={styles.separator}></div>
            <Selector
              register={register}
              options={ratingGenerator()}
              data="endRating"
            />
          </div>
          {errors.endRating && (
            <p className={styles.label}>{errors.endRating?.message}</p>
          )}
        </div>
      </div>
      <div className={styles.buttons}>
        <Button type="submit">применить</Button>
        <Button onClick={handleReset}>сбросить</Button>
      </div>
    </FiltersPopup>
  );
});
