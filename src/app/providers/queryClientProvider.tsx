import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/lib";
import { ReactNode } from "react";

interface QueryClientProviderProps {
  children: ReactNode;
}

function QueryProvider({ children }: QueryClientProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default QueryProvider;
