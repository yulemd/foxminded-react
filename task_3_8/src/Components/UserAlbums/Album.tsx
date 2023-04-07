import React from "react";
import { useQueryClient } from "react-query";
import { IAlbum } from "../../types/data";

interface IProps {
  album: IAlbum;
}

export const Album: React.FC<IProps> = ({ album }) => {
  const client = useQueryClient();

  return (
    <div className="todoItem">
      <h2 className={`todoTitle`}>{album.title}</h2>
    </div>
  );
};