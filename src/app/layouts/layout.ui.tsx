import { Routes, Route } from "react-router-dom";

import styles from "@/app/layouts/layout.module.scss";

import { Main } from "@/pages/main";
import { Header } from "@/widgets/header";
import { Film } from "@/pages/film";
import { Favourites } from "@/pages/favourites";
import { Page404 } from "@/pages/page-404";
import { Footer } from "@/widgets/footer";

function App() {
  return (
    <div className={styles.app} data-theme="dark">
      <div className={styles.layout}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/film/:cardId" element={<Film />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
