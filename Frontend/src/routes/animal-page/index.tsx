import { AnimalPage } from '@/pages/AnimalPage/page';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/animal-page/')({
  component: () => <AnimalPage />,
});
