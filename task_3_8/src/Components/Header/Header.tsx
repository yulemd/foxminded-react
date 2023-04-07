import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Navigation } from "../Navigation";
import { appRoutes } from "../../router/appRoutes";

export const Header: React.FC = () => {
  return (
        <header className="App-header">
          <h2><Link to={appRoutes.posts}>React App</Link></h2>
          <Navigation />
        </header>
  );
}