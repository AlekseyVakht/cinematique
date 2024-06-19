import { observer } from "mobx-react-lite";

import { favouriteStore, ResponseProps } from "@/shared/model";

import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";

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
