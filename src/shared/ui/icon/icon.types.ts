import { SVGProps } from "react";

export type IconProps = SVGProps<SVGElement> & {
  size?: "small" | "default" | "big";
  img: "like" | "close" | "burger" | "back" | "filters" | "more" | "search";
  active?: boolean;
};
