import React from "react";
import { PhotoCardWithQuery } from "../components/PhotoCardWithQuery";

export const Details = ({ detailId }) => {
  return <PhotoCardWithQuery id={detailId} />;
};
