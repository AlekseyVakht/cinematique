import { makeAutoObservable } from "mobx";
import { ResponseProps } from "./types";

class FavouriteStore {
  favourites = this._loadFavourites();

  constructor() {
    makeAutoObservable(this);
  }

  changeFavourite(movie: ResponseProps) {
    if (!this.favourites.some((item: { id: number }) => item.id === movie.id)) {
      this._addToFavourite(movie);
    } else {
      this._removeToFavourite(movie);
    }
  }

  _loadFavourites() {
    const favourites = localStorage.getItem("favourites");
    return favourites ? JSON.parse(favourites) : [];
  }

  _addToFavourite(movie: ResponseProps) {
    this.favourites.push(movie);
    this._saveFavourite();
  }

  _removeToFavourite(movie: ResponseProps) {
    this.favourites = this.favourites.filter(
      (item: { id: number }) => item.id !== movie.id,
    );
    this._saveFavourite();
  }

  _saveFavourite() {
    localStorage.setItem("favourites", JSON.stringify(this.favourites));
  }
}

export const favouriteStore = new FavouriteStore();
