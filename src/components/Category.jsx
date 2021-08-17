import React from "react";
import { Anchor, Image } from "./style/Category";

export const Category = ({ name, path, cover, emoji }) => {
  return (
    <Anchor href={path}>
      <Image src={cover} alt={name} />
      {emoji}
    </Anchor>
  );
};
