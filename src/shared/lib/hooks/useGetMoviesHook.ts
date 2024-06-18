import { useQuery } from "@tanstack/react-query";
import { pageCounter } from "@/shared/lib";
import { api } from "../../api/api";

export const useGetMovies = () => {
  const page = pageCounter.page;
  const { data, isLoading } = useQuery({
    queryKey: ["films", page],
    queryFn: () => api.getMovies(page),
  });

  return { data, isLoading };
};
