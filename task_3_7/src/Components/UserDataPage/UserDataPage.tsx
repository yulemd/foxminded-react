import React from "react";
import "./UserDataPage.css";
import { useDataQuery } from "../../shared/useDataQuery";
import { NavLink, useParams } from "react-router-dom";
import { AppRoutes } from "../../router/AppRoutes";
import { ErrorPage } from "../../pages/ErrorPage";

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
          <NavLink to={AppRoutes.users} className="userData__link">
            Back to Users List
          </NavLink>
        </div>
        <div className="userData__info">
          <div className="userData__icon icon-username"></div>
          <p>{user.username}<br/><span>Username</span></p>
        </div>
        <div className="userData__info">
          <div className="userData__icon icon-email"></div>
          <p>{user.email}<br/><span>Email</span></p>
        </div>
        <div className="userData__info">
          <div className="userData__icon icon-phone"></div>
          <p>{user.phone}<br/><span>Phone</span></p>
        </div>
        <div className="userData__info">
          <div className="userData__icon icon-website"></div>
          <p>{user.website}<br/><span>Website</span></p>
        </div>
        <div className="userData__info">
          <div className="userData__icon icon-company"></div>
          <p>{user.company.name}<br/><span>Company</span></p>
        </div>
      </div>
    </div>
  );
}

