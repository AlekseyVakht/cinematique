import clsx from "clsx";
import styles from "./icon.module.scss";
import { IconProps } from "./icon.types";
import { IconsCatalog } from "./icon.lib";

export function Icon(props: IconProps) {
  const { size = "default", active = false, img } = props;
  const IconClassName = clsx(
    styles.icon,
    active && styles.active,
    size && styles[`${size}-size`],
  );
  const IconComponent = IconsCatalog[img];
  return <IconComponent className={IconClassName} />;
}
