import { makeAutoObservable } from "mobx";

class MovieStore {
  movies = [];
  filtered = [];

  constructor() {
    makeAutoObservable(this);
  }

  // setMovies(movies) {
  //   this.movies = [...this.movies, ...movies];
  // }
}

export const movieStore = new MovieStore();
