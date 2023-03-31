import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header";

export const Layout: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}