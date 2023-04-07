import React, { useMemo } from "react";
import { useQueryClient } from "react-query";
import "./PostsList.css";
import { Post } from "./Post";
import { AddPostForm } from "../AddPost";
import { IPost } from "../../types/data";

interface IProps {
  posts: IPost[];
}

export const PostsList: React.FC<IProps> = ({ posts }) => {
  
  const memoizedData = useMemo(() => {
    const postsToRender = [...posts].sort((a, b) => b.id - a.id);
    return postsToRender;
  }, [posts]);

  const queryClient = useQueryClient();
  
  const addToPostsList = (newPost: IPost) => {
    const updatedPosts = [...posts, newPost];
    return updatedPosts;
  };
  
  const updatePostsCache = (updatedPosts: IPost[]) => {
    queryClient.setQueryData<IPost[]>("posts", updatedPosts);
  };

  return (
    <div className="postsPageElement">
      <h1>Posts List</h1>
      <AddPostForm addToPostsList={addToPostsList} updatePostsCache={updatePostsCache} />
      <ul className="pageList">
        {memoizedData.map((post: IPost) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};