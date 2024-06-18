import axios from "axios";

interface IApi {
  baseUrl: string;
  headers: { [key: string]: string };
}

class Api {
  private _baseUrl: string;

  private _headers: { [key: string]: string };

  constructor({ baseUrl, headers }: IApi) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  async getMovies<T>(page = 1): Promise<T> {
    const response = await axios.get<T>(
      `${this._baseUrl}/movie?page=${page}&limit=50&isSeries=false&notNullFields=name&lists=top250`,
      {
        headers: this._headers,
      },
    );
    return response.data;
  }

  async getMovieByParams<T>(query: string): Promise<T> {
    const response = await axios.get(`${this._baseUrl}/movie?${query}`, {
      headers: this._headers,
    });
    return response.data;
  }

  async getMovieById<T>(id: number): Promise<T> {
    const response = await axios.get(`${this._baseUrl}/movie/${id}`, {
      headers: this._headers,
    });
    return response.data;
  }
}

export const api = new Api({
  baseUrl: import.meta.env.VITE_BASE_URL,
  headers: {
    "X-API-KEY": import.meta.env.VITE_API,
    "Content-Type": "application/json",
  },
});
