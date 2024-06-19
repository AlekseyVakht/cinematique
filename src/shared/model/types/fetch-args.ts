export type QueryKey = "films" | "filtered" | "byName";

export interface FetchArgs {
  key: QueryKey;
  query: string;
}

export type ApiArgs = FetchArgs & {
  pageParam: number;
};

export interface RequestArgs {
  pageParam: number;
  queryParam?: string;
  filters?: string;
  limit?: number;
}
