import React from "react";
import { Item } from "./PlacesType";

interface Data {
  data: Item;
}
const PlaceItem: React.FC<Data> = ({ data }) => {
  return <div>{data.description}</div>;
};
export default PlaceItem;
