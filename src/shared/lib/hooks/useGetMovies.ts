import { useInfiniteQuery } from "@tanstack/react-query";
import { api } from "../../api/api";
import { Page } from "@/shared/model";

interface HookArgs {
  key: "films" | "filtered" | "byName";
  query: string;
}

export const useGetMovies = ({ key, query }: HookArgs) =>
  useInfiniteQuery<Page>({
    queryKey: [key, query],
    queryFn: ({ pageParam }) => api.fetchChanger({ key, pageParam, query }),
    initialPageParam: 1,
    getNextPageParam(lastPage, allPages) {
      return lastPage.pages !== allPages.length
        ? allPages.length + 1
        : undefined;
    },
  });
