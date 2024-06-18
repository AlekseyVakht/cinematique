import { useState } from "react";
import { useForm } from "react-hook-form";

import { SearchInput } from "@/shared/ui/inputs/search";
import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";
import { GenreButton } from "@/shared/ui/genre";
import { FiltersPopup } from "@/shared/ui/filters-popup";
import { Selector } from "@/shared/ui/inputs/selector";

import {
  dateGenerator,
  ratingGenerator,
  useGetMoviesByParams,
} from "@/shared/lib";
import { GENRES } from "@/shared/lib";
import { filterByParams } from "../lib/search.lib";

import { SubmitData } from "@/shared/model";

import styles from "./search.module.scss";

export function Search() {
  const [isOpened, setIsOpened] = useState(false);
  const [query, setQuery] = useState("");
  const { register, handleSubmit, reset } = useForm<SubmitData>();

  const { data, isLoading } = useGetMoviesByParams(query);

  if (isLoading) return <p>loading...</p>;

  const handleOpen = () => {
    setIsOpened(!isOpened);
  };

  const onSubmit = (data: SubmitData) => {
    setQuery(filterByParams(data));
    console.log(data);
    setIsOpened(false);
    reset();
  };

  console.log(data);
  return (
    <section className={styles.search}>
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <FiltersPopup opened={isOpened}>
          <div className={styles.filters}>
            {GENRES.map((item) => (
              <GenreButton register={register} key={item} text={item} />
            ))}
          </div>
          <div className={styles.selections}>
            <div className={styles.item}>
              <p className={styles.label}>Выбери года</p>
              <Selector
                register={register}
                options={dateGenerator()}
                data="startYear"
              />
              <Selector
                register={register}
                options={dateGenerator().reverse()}
                data="endYear"
              />
            </div>
            <div className={styles.item}>
              <p className={styles.label}>Выбери рейтинг</p>
              <Selector
                register={register}
                options={ratingGenerator()}
                data="startRating"
              />
              <Selector
                register={register}
                options={ratingGenerator()}
                data="endRating"
              />
            </div>
          </div>
        </FiltersPopup>
        <SearchInput register={register} />
        <div className={styles.controls}>
          <Button onClick={handleOpen}>
            <Icon img="filters" active={isOpened} />
          </Button>
          <Button type="submit">
            <Icon img="search" />
          </Button>
        </div>
      </form>
    </section>
  );
}
