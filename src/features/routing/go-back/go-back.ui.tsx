import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";

export function GoBack() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Button onClick={handleBack}>
      <Icon img="back" size="big" />
    </Button>
  );
}
