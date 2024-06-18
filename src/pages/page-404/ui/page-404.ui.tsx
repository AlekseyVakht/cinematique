import { Error } from "@/widgets/error";
export function Page404() {
  return <Error text="Кажется, тут ничего нет:(" route="/" link="на главную" />;
}
