import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

// eslint-disable-next-line import/prefer-default-export
export const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }: { children: JSX.Element }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
