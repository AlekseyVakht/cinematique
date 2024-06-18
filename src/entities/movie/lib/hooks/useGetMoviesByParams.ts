import { api } from "../../api/api";
import { useQuery } from "@tanstack/react-query";

export const useGetMoviesByParams = (query: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["filtered", query],
    queryFn: () => api.getMovieByParams(query),
    enabled: query.length > 0,
  });
  return { data, isLoading };
};
