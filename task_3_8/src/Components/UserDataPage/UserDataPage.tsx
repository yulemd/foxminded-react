import React from "react";
import "./UserDataPage.css";
import { useDataQuery } from "../../shared/useDataQuery";
import { NavLink, useParams } from "react-router-dom";
import { appRoutes } from "../../router/appRoutes";
import { ErrorPage } from "../../pages/ErrorPage";
import { TabMenu } from "../TabMenu";

export const UserDataPage: React.FC = () => {
  const { id = '' } = useParams<{ id: string }>()
  
  const {data: user, isLoading, isError, error} = useDataQuery(`users/${id}`);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !user) return <div>{`${error}`}</div>;
  if (!user.name) return <ErrorPage />
  
  return (
    <div className="userData">
      <h1>User Data</h1>
      <div className="userData__list">
        <div className="userData__title">
          <h2>{user.name}</h2>
          <NavLink to={appRoutes.users} className="userData__link">
            Back to Users List
          </NavLink>
        </div>
        <TabMenu />
      </div>
    </div>
  );
}