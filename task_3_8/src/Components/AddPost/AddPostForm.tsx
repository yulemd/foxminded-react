import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./AddPostForm.css";
import { addPost } from "../../api/addPost";
import { IPost, NewPostInputs } from "../../types/data";

interface IAddPostFormProps {
  addToPostsList: (post: IPost) => IPost[];
  updatePostsCache: (updatedPosts: IPost[]) => void;
}

export const AddPostForm: React.FC<IAddPostFormProps> = ({ addToPostsList, updatePostsCache }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewPostInputs>();

  const onSubmit: SubmitHandler<NewPostInputs> = async (data) => {
    const newPost = await addPost('/posts', data);
    updatePostsCache(addToPostsList({...newPost, id: Date.now()}));
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="addPostForm">
      <div className="addPostInputs">
        <input placeholder="title" {...register("title", { required: true })} className="addPostInputs__title" /> 
        {errors.title && <span>This field is required</span>}  
        <textarea placeholder="text" {...register("body", { required: true })} className="addPostInputs__text" />
        {errors.body && <span>This field is required</span>}
      </div>
      <input type="submit" value={"Add Post"} className="addPostSubmit" />
    </form>
  );
}