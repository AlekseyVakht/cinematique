import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";

export function GetMore({ onClick }) {
  const handleClick = () => {
    onClick();
  };
  return (
    <Button onClick={handleClick}>
      <Icon img="more" size="big" />
    </Button>
  );
}
