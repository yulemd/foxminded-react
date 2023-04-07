import React from "react";
import "./UserList.css";
import { User } from "./User";
import { useDataQuery } from "../../shared/useDataQuery";
import { IUser } from "../../types/data";

export const UserList: React.FC = () => {
  const {data: users, isLoading, isError, error} = useDataQuery('users');

  if (isLoading) return <div>Loading...</div>;
  if (isError || !users) return <div>{`${error}`}</div>;

  return (
    <div className="userPageElement">
      <h1>User List</h1>
      <ul  className="pageList">
        {users.map((user: IUser) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </div> 
  );
};