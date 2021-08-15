import React from "react";
import { PhotoCard } from "./PhotoCard";
import { Li } from "./style/ListOfPhotoCard";
export const ListOfPhotoCard = () => {
  return (
    <Li>
      {[1, 2, 3].map((id) => (
        <PhotoCard key={id} />
      ))}
    </Li>
  );
};

export default ListOfPhotoCard;
