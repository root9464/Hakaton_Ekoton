import { createFileRoute } from '@tanstack/react-router'
import { AdminPage } from '@/pages/AdminPage/page'

export const Route = createFileRoute('/admin/')({
  component: () => <AdminPage />,
})
