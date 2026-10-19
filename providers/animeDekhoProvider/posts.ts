import { Post, ProviderContext } from '../types';

export const getPosts = async function ({
  filter,
  page,
  providerContext,
}: {
  filter: string;
  page: number;
  providerContext: ProviderContext;
}): Promise<Post[]> {
  const posts: Post[] = [];
  return posts;
};

export const getSearchPosts = async function ({
  searchQuery,
  page,
  providerContext,
}: {
  searchQuery: string;
  page: number;
  providerContext: ProviderContext;
}): Promise<Post[]> {
  const posts: Post[] = [];
  return posts;
};
