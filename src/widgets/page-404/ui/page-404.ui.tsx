import { Error } from "@/widgets/error";
import { useLocation } from "react-router-dom";

export function Page404() {
  const { pathname } = useLocation();
  return (
    <Error
      text="Ничего не нашли, но можем попробовать еще раз"
      route={(pathname !== "/" && "/") || ""}
      link="на главную"
    />
  );
}
