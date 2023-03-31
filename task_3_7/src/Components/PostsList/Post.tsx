import React from "react";
import { IPost } from "../../types/data";

interface IPostProps {
  post: IPost;
}

export const Post: React.FC<IPostProps> = ({ post }) => {
  return (
    <div className="postItem">
      <h2 className="postTitle">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};