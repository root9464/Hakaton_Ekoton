import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Animals/')({
  component: () => <div>Hello /test/!</div>,
})
