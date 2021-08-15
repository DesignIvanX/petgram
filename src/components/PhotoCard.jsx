import React from "react";
import { ImgWrapper, Image, Button } from "./style/PhotoCard";
import { AiOutlineHeart } from "react-icons/ai";
export const PhotoCard = ({
  id,
  likes = 0,
  src = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
}) => {
  return (
    <article>
      <a href={`/details/${id}`}>
        <ImgWrapper>
          <Image src={src} alt={id} />
        </ImgWrapper>
      </a>
      <Button type="button">
        <AiOutlineHeart size="32px" />
        {likes}
        Likes
      </Button>
    </article>
  );
};
