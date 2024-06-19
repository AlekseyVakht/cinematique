import { useInfiniteQuery } from "@tanstack/react-query";
import { api } from "../../api/api";
import { Page, FetchArgs } from "@/shared/model";

export const useGetMovies = ({ key, query }: FetchArgs) =>
  useInfiniteQuery<Page>({
    queryKey: [key, query],
    queryFn: ({ pageParam }) =>
      api.fetchChanger({ key, pageParam: Number(pageParam), query }),
    initialPageParam: 1,
    getNextPageParam(lastPage, allPages) {
      return lastPage.pages !== allPages.length
        ? allPages.length + 1
        : undefined;
    },
  });
