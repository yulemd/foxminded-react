import React from "react";
import { useParams } from "react-router-dom";
import "./UserPosts.css";
import { Post } from "../PostsList/Post";
import { useDataQuery } from "../../shared/useDataQuery";
import { IPost } from "../../types/data";

export const UserPosts: React.FC = () => {
  const { id = '' } = useParams<{ id: string }>();

  const {data: posts, isLoading, isError, error} = useDataQuery(`users/${id}/posts`);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !posts) return <div>{`${error}`}</div>;
  
  return (
    <div>
      <ul className="postsList postsList-bg">
        {posts.map((post: IPost) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}