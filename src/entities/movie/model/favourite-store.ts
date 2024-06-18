import { makeAutoObservable } from "mobx";

class FavouriteStore {
  favourites = this._loadFavourites();

  constructor() {
    makeAutoObservable(this);
  }

  changeFavourite(movie: { id: number }) {
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

  _addToFavourite(movie: unknown) {
    this.favourites.push(movie);
    this._saveFavourite();
  }

  _removeToFavourite(movie: { id: number }) {
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
