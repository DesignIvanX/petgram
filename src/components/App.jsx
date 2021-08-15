import React from "react";
import { ListOfCategories } from "./ListOfCategories";
import { GlobalStyle } from "./style/Global";
import { ListOfPhotoCard } from "./ListOfPhotoCard";
import Logo from "./Logo";
const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCard />
    </div>
  );
};

export default App;
