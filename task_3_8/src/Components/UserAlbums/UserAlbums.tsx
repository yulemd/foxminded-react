import React from "react";
import { useParams } from "react-router-dom";
import "./UserAlbums.css";
import { useDataQuery } from "../../shared/useDataQuery";
import { IAlbum } from "../../types/data";
import { Album } from "./Album";

export const UserAlbums: React.FC = () => {
  const { id = '' } = useParams<{ id: string }>();
  
  const {data: albums, isLoading, isError, error} = useDataQuery(`users/${id}/albums`);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !albums) return <div>{`${error}`}</div>;
  
  return (
    <div>
      <ul className="albumsList albumsList-bg">
        {albums.map((album: IAlbum) => (
          <Album key={album.id} album={album} />
        ))}
      </ul>
    </div>
  );
}