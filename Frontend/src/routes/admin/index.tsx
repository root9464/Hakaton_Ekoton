import { AdminPage } from '@/pages/AdminPage/page';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/admin/')({
  component: () => <AdminPage />,
});
