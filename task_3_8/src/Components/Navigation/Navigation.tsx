import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { appRoutes } from "../../router/appRoutes";

export const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={appRoutes.posts}>
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink to={appRoutes.users}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to={appRoutes.todos}>
            Todos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};