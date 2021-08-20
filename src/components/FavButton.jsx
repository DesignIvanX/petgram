import React from "react";
import { Button } from "./style/FaButton";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const FavButton = ({ like, likes, onClick }) => {
  const Icon = like ? AiFillHeart : AiOutlineHeart;
  return (
    <Button onClick={onClick} type="button">
      <Icon size="25px" />
      {likes}
      Likes
    </Button>
  );
};
