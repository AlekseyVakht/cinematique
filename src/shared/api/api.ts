import axios from "axios";

import { FetchArgs } from "../model";

interface IApi {
  baseUrl: string;
  headers: { [key: string]: string };
}

interface RequestArgs {
  pageParam: number;
  queryParam?: string;
  filters?: string;
  limit?: number;
}
class Api {
  private _baseUrl: string;

  private _headers: { [key: string]: string };

  constructor({ baseUrl, headers }: IApi) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  fetchChanger(args: FetchArgs) {
    const { key, query, pageParam } = args;
    if (key === "films") {
      return this.getMovies({ pageParam });
    }
    if (key === "filtered") {
      return this.getMovieByParams({ pageParam, filters: query });
    }
    if (key === "byName") {
      return this.getMovieByName({ pageParam, queryParam: query });
    }
  }

  async getMovies<Page>({ pageParam }: RequestArgs): Promise<Page> {
    const response = await axios.get<Page>(
      `${this._baseUrl}/movie?limit=1&lists=top500`,
      {
        params: { page: pageParam },
        headers: this._headers,
      },
    );
    // movieStore.setMovies(response.data.docs);
    return response.data;
  }

  async getMovieByParams<Page>({
    pageParam,
    filters,
  }: RequestArgs): Promise<Page> {
    const response = await axios.get(`${this._baseUrl}/movie?${filters}`, {
      params: { page: pageParam },
      headers: this._headers,
    });
    return response.data;
  }

  async getMovieByName<Page>({
    pageParam,
    queryParam,
  }: RequestArgs): Promise<Page> {
    const response = await axios.get(
      `${this._baseUrl}/movie/search?${queryParam}`,
      {
        params: { page: pageParam },
        headers: this._headers,
      },
    );
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
