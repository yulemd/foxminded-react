import React from "react";
import { useDataQuery } from "../shared/useDataQuery";
import { PostsList } from "../Components/PostsList";

export const PostsPage: React.FC = () => {
  const {data: posts, isLoading, isError, error} = useDataQuery('posts');

  if (isLoading) return <div>Loading...</div>;
  if (isError || !posts) return <div>{`${error}`}</div>;
  
  return <PostsList posts={posts} />;
}