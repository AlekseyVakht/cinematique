import { observer } from "mobx-react-lite";

import { List } from "@/widgets/list";
import { Error } from "@/widgets/error";

import { favouriteStore } from "@/shared/model";

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
