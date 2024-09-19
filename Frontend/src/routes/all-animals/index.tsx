import { createFileRoute } from '@tanstack/react-router';
import { AllAnimals } from '../../pages/AllAnimals/page';

export const Route = createFileRoute('/all-animals/')({
  component: () => <AllAnimals />,
});
