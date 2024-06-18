import { useLocation } from "react-router-dom";

import { GoBack } from "@/features/routing";

import { Logo } from "@/shared/ui/text-logo";
import { LinkTab } from "@/shared/ui/link";

import styles from "./header.module.scss";

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
