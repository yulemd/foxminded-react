import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Navigation } from "../Navigation";
import { AppRoutes } from "../../router/AppRoutes";

export const Header: React.FC = () => {
  return (
        <header className="App-header">
          <h2><Link to={AppRoutes.posts}>React App</Link></h2>
          <Navigation />
        </header>
  );
}