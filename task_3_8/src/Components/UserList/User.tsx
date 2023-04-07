import React from "react";
import { NavLink } from "react-router-dom";
import { IUser } from "../../types/data";

interface IUserProps {
  user: IUser;
}

export const User: React.FC<IUserProps> = ({ user }) => {
  return (
    <div className="userItem">
      <h2  className="userName">
        <NavLink to={`${user.id}`}>
          {user.name}
        </NavLink>
      </h2>
      <div>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
    </div>
  );
};