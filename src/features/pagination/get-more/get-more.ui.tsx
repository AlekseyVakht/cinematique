import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";

interface GetMoreProps {
  onClick: () => void;
}

export function GetMore({ onClick }: GetMoreProps) {
  const handleClick = () => {
    onClick();
  };
  return (
    <Button onClick={handleClick}>
      <Icon img="more" size="big" />
    </Button>
  );
}
