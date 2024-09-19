import { useGetShortInfo } from '@/shared/api/useGetAnimalInfo';
import { createFileRoute, useParams } from '@tanstack/react-router';
import { Suspense, useEffect } from 'react';

export const Route = createFileRoute('/animal-page/$id')({
  component: () => <Page />,
});

function Page() {
  const params = useParams({ from: '/animal-page/$id' });
  const { data: state, isSuccess, mutate } = useGetShortInfo();
  useEffect(() => {
    mutate({ id: Number(params.id) });
  }, [params.id]);
  return (
    <div>
      <h1>Animal Page</h1>
      <p>{params.id}</p>
      <Suspense fallback={<div>Loading...</div>}>{state && isSuccess && state.map((item) => <p key={item.id}>{item.description}</p>)}</Suspense>
    </div>
  );
}
