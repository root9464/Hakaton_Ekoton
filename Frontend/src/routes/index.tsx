import { App } from '@/pages/MainPage/App';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => <App />,
});
