import styles from "./header.module.scss";
import { useLocation } from "react-router-dom";
import { Logo } from "@/shared/ui/text-logo";
import { GoBack } from "@/features/pagination/go-back/go-back.ui";
import { LinkTab } from "@/shared/ui/link";

export function Header() {
  const location = useLocation();
  return (
    <header className={styles.header}>
      <Logo size="default" />
      <nav className={styles.navigation}>
        <LinkTab route="/" text="главная"></LinkTab>
        <LinkTab route="/favourites" text="избранное"></LinkTab>
      </nav>
      {location.pathname !== "/" && (
        <div className={styles.back}>
          <GoBack />
        </div>
      )}
    </header>
  );
}
