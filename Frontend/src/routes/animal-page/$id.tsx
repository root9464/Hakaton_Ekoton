import { FetchPosts, Post } from '@/shared/api/FetchPosts';
import { createFileRoute, useParams } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/animal-page/$id')({
  component: () => <Page />,
});

function Page() {
  const [state, setState] = useState<Post>({
    userId: 0,
    id: 0,
    title: '',
    body: '',
  });

  const params = useParams({ from: '/animal-page/$id' });
  useEffect(() => {
    const data = FetchPosts({ postId: params.id });
    data.then((data) => {
      setState(data);
    });
  }, [params.id]);

  return (
    <div>
      <h1>Animal Page</h1>
      <p>{params.id}</p>
      <p>{state.body}</p>
    </div>
  );
}
