import React, { useRef, useState } from "react";
import { Article, ImgWrapper, Image, Button } from "./style/PhotoCard";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import useLazyLoading from "../hooks/useLazyLoading";
import { useLocalStorage } from "../hooks/useLocalStorage";
export const PhotoCard = ({
  id,
  likes = 2,
  src = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
}) => {
  const key = `like-${id}`;
  const [like, setLike] = useLocalStorage(key, false);
  const ref = useRef(null);
  const { show } = useLazyLoading(ref);
  const Icon = like ? AiFillHeart : AiOutlineHeart;

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/details/${id}`}>
            <ImgWrapper>
              <Image src={src} alt={id} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLike(!like)} type="button">
            <Icon size="25px" />
            {like ? likes + 1 : likes}
            Likes
          </Button>
        </>
      )}
    </Article>
  );
};
