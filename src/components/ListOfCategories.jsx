import React, { useState, useEffect } from "react";
import { Category } from "./Category";
import { List, Item } from "./style/ListOfCategories";
import { categories as mockCategories } from "../api/db.json";
export const ListOfCategories = () => {
  const [categories, setCategories] = useState(mockCategories);
  // useEffect(() => {
  //   try {
  //     fetch("hhtps:example.com")
  //       .then((resolve) => resolve.json())
  //       .then((data) => setCategories(data));
  //   } catch (error) {
  //     return error.message;
  //   }
  // });
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
