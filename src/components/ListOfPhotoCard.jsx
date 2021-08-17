import React from "react";
import { PhotoCard } from "./PhotoCard";
import { Li } from "./style/ListOfPhotoCard";
export const ListOfPhotoCard = () => {
  return (
    <Li>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
        <PhotoCard key={id} id={id} />
      ))}
    </Li>
  );
};

export default ListOfPhotoCard;
