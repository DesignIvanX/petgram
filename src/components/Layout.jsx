import React from "react";
import { NavBar } from "./NavBar";
import { GlobalStyle } from "./style/Global";
import { Top } from "./Top";

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Top />
      {children}
      <NavBar />
    </>
  );
};
