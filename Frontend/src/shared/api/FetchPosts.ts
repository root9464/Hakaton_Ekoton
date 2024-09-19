import axios from 'axios';
export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const FetchPosts = async ({ postId }: { postId: string }) => {
  const { data } = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return data;
};
