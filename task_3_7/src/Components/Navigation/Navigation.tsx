import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { AppRoutes } from "../../router/AppRoutes";

export const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={AppRoutes.posts}>
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink to={AppRoutes.users}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to={AppRoutes.todos}>
            Todos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};