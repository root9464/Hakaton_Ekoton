import { routeTree } from '@/routeTree.gen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

const router = createRouter({ routeTree });
// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export type Router = typeof router;

const queryClient = new QueryClient();

const Devtools = () => (
  <>
    <ReactQueryDevtools initialIsOpen={false} />
    <TanStackRouterDevtools router={router} />
  </>
);

export const Provider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Devtools />
    </QueryClientProvider>
  );
};
