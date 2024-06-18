import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";
import { ResponseProps } from "@/entities/movie";
import { favouriteStore } from "@/entities/movie";
import { observer } from "mobx-react-lite";

export const AddToFavourite = observer(function AddToFavourite({
  data,
}: {
  data: ResponseProps;
}) {
  const {
    id,
    name,
    rating: { kp },
    year,
    poster,
  } = data;
  const isLiked = favouriteStore.favourites.some(
    (item: ResponseProps) => item.id === id,
  );

  const handleClick = (event) => {
    event.stopPropagation();
    favouriteStore.changeFavourite({ id, name, rating: { kp }, year, poster });
  };
  return (
    <Button onClick={handleClick}>
      <Icon size="default" img="like" active={isLiked} />
    </Button>
  );
});
