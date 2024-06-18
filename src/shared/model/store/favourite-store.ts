import { makeAutoObservable } from "mobx";
import { ResponseProps } from "../types";

class FavouriteStore {
  favourites = this.loadFavourites();

  constructor() {
    makeAutoObservable(this);
  }

  public changeFavourite(movie: ResponseProps) {
    if (!this.favourites.some((item: { id: number }) => item.id === movie.id)) {
      this.addToFavourite(movie);
    } else {
      this.removeToFavourite(movie);
    }
  }

  private loadFavourites() {
    const favourites = localStorage.getItem("favourites");
    return favourites ? JSON.parse(favourites) : [];
  }

  private addToFavourite(movie: ResponseProps) {
    this.favourites.push(movie);
    this.saveFavourite();
  }

  private removeToFavourite(movie: ResponseProps) {
    this.favourites = this.favourites.filter(
      (item: { id: number }) => item.id !== movie.id,
    );
    this.saveFavourite();
  }

  private saveFavourite() {
    localStorage.setItem("favourites", JSON.stringify(this.favourites));
  }
}

export const favouriteStore = new FavouriteStore();
