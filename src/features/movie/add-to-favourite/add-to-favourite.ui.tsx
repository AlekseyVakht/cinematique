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
  const { id } = data;
  const isLiked = favouriteStore.favourites.some(
    (item: ResponseProps) => item.id === id,
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    favouriteStore.changeFavourite(data);
  };
  return (
    <Button onClick={handleClick}>
      <Icon size="default" img="like" active={isLiked} />
    </Button>
  );
});
