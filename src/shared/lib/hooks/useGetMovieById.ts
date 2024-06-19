import { api } from "../../api/api";
import { useQuery } from "@tanstack/react-query";
export const useGetMovieById = (id: number) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["film", id],
    queryFn: () => api.getMovieById(id),
  });
  return { data, isLoading, isError };
};
