import React from "react";
import { Link, Image } from "./style/Category";

export const Category = ({ name, path = "#", cover, emoji }) => {
  return (
    <Link to={path}>
      <Image src={cover} alt={name} />
      {emoji}
    </Link>
  );
};
