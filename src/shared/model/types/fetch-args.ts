export interface FetchArgs {
  key: "films" | "filtered" | "byName";
  pageParam: number;
  query: string;
}
