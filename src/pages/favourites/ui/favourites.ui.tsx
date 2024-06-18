import { observer } from "mobx-react-lite";
import { favouriteStore } from "@/entities/movie";

import { List } from "@/widgets/list";
import { Error } from "@/widgets/error";

const RenderSection = () =>
  favouriteStore.favourites.length === 0 ? (
    <Error
      text="Здесь пока ничего нет, но мы можем исправить это"
      link="к фильмам"
      route="/"
    />
  ) : (
    <List />
  );

export const Favourites = observer(() => {
  return <RenderSection />;
});
