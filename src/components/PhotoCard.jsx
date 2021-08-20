import React, { useRef } from "react";
import { Article, ImgWrapper, Image } from "./style/PhotoCard";
import { Link } from "@reach/router";
import useLazyLoading from "../hooks/useLazyLoading";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { FavButton } from "./FavButton";
import { useToggleLike } from "../hooks/useToggleLike";
export const PhotoCard = ({ id, likes, src }) => {
  const key = `like-${id}`;
  const [like, setLike] = useLocalStorage(key, false);
  const { mutation, mutationError } = useToggleLike();
  const ref = useRef(null);
  const { show } = useLazyLoading(ref);
  const handleClick = () => {
    !like &&
      mutation({
        variables: {
          input: { id },
        },
      });
    setLike(!like);
  };

  if (mutationError) return "error";

  return (
    <Article ref={ref}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Image src={src} alt={id} />
            </ImgWrapper>
          </Link>
          <FavButton like={like} likes={likes} onClick={handleClick} />
        </>
      )}
    </Article>
  );
};
