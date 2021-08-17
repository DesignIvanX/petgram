import React, { useState, useEffect } from "react";
import { Category } from "./Category";
import { List, Item } from "./style/ListOfCategories";
import { Loader } from "./Loader";
import useInitialCategories from "../hooks/useInitialCategories";

export const ListOfCategories = () => {
  const { categories, loading } = useInitialCategories();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [showFixed]);
  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      {renderList(false)}
      {showFixed && renderList(true)}
    </>
  );
};
