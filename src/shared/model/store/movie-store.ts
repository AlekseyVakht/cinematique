import { makeAutoObservable } from "mobx";

class MovieStore {
  movies = [];
  filtered = [];

  constructor() {
    makeAutoObservable(this);
  }

  public setMovies(movies) {
    this.movies = [...this.movies, ...movies];
    console.log(movies);
  }
}

export const movieStore = new MovieStore();
