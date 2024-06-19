import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { searchSchema } from "../lib/validation";

import queryString from "query-string";

import { SearchInput } from "@/shared/ui/inputs/search";
import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";

import { SubmitSearchData } from "@/shared/model";

import { popupStore, queryStore } from "@/shared/model/store";

import styles from "./search.module.scss";
import { observer } from "mobx-react-lite";

export const Search = observer(() => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SubmitSearchData>({ resolver: yupResolver(searchSchema) });

  const handleClick = () => {
    popupStore.changeIsOpened();
  };

  const onSubmit = (data: SubmitSearchData) => {
    const query = queryString.stringify({ query: data.name });
    queryStore.setQuery(query);
    queryStore.setKey("byName");
    popupStore.setIsClose();
    setValue("name", "");
    console.log(queryStore.query);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <SearchInput {...register("name")} error={errors.name?.message} />
      <div className={styles.controls}>
        <Button onClick={handleClick}>
          <Icon img="filters" active={popupStore.isOpened} />
        </Button>
        <Button type="submit">
          <Icon img="search" />
        </Button>
      </div>
    </form>
  );
});
