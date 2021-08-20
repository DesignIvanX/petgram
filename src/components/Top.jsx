import React from "react";
import Logo from "./Logo";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { AiFillCamera } from "react-icons/ai";
import { Content, Link } from "./style/Top";
export const Top = () => {
  return (
    <Content>
      <Link to="/">
        <AiFillCamera size="32px" />
      </Link>
      <Logo />
      <Link to="/">
        <IoChatboxEllipsesSharp size="32px" />
      </Link>
    </Content>
  );
};
