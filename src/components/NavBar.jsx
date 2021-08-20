import React from "react";
import { Nav, Link } from "./style/NavBar";
import { AiFillHome, AiOutlineUser, AiFillHeart } from "react-icons/ai";
export const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <AiFillHome size="32px" />
      </Link>
      <Link to="/favs">
        <AiFillHeart size="32px" />
      </Link>
      <Link to="/user">
        <AiOutlineUser size="32px" />
      </Link>
    </Nav>
  );
};
