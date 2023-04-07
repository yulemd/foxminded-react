import React from "react";
import { useParams } from "react-router-dom";
import { useDataQuery } from "../../shared/useDataQuery";
import "./UserInfo.css";
import { ErrorPage } from "../../pages/ErrorPage";

export const UserInfo: React.FC = () => {
  const { id = '' } = useParams<{ id: string }>()

  const {data: user, isLoading, isError, error} = useDataQuery(`users/${id}`);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !user) return <div>{`${error}`}</div>;
  if (!user.name) return <ErrorPage />
  
  return (
    <div>
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
  );
}