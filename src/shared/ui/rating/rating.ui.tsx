import styles from "./rating.module.scss";

type RatingProps = {
  value: string;
};

export function Rating({ value }: RatingProps) {
  return <div className={styles.container}>{value}</div>;
}
