import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";
import { pageCounter } from "@/shared/lib";
export function GetMore() {
  return (
    <Button onClick={() => pageCounter.incrementPage()}>
      <Icon img="more" size="big" />
    </Button>
  );
}
