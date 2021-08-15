import React, { useState, useEffect } from "react";
import { Category } from "./Category";
import { List, Item } from "./style/ListOfCategories";
import { categories as mockCategories } from "../api/db.json";
export const ListOfCategories = () => {
  const [categories, setCategories] = useState(mockCategories);
  useEffect(() => {
    setCategories(mockCategories);
  }, []);
  return (
    <List>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
};
