import { Error } from "@/widgets/error";

export function Page404() {
  return (
    <Error
      text="Ничего не нашли, но можем попробовать еще раз"
      route="/"
      link="на главную"
    />
  );
}
