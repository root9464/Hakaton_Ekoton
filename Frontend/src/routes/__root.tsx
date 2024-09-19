import { Navbar } from '@components/NavBar/NavBar';
import { createRootRoute, Outlet } from '@tanstack/react-router';
export const Route = createRootRoute({
  component: () => <Layout />,
});

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
