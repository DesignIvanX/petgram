import React from "react";
import { PhotoCard } from "./PhotoCard";
import { Li } from "./style/ListOfPhotoCard";
import { useGetPhotos } from "../hooks/useGetPhotos";

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error...</p>;

  return (
    <Li>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} id={photo.id} {...photo} />
      ))}
    </Li>
  );
};
