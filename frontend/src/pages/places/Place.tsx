import axios from "axios";
import React, { useState, useEffect } from "react";
import PlaceItem from "./PlaceItem";
import { Item } from "./PlacesType";
const Place: React.FC<any> = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/places`)
      .then((data: any) => {
        console.log(data.data);
        debugger;
        setPlaces(data.data.place);
        debugger;
        console.log(places);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {JSON.stringify(places)}
      {places
        ? places.map((place: Item) => {
            return <PlaceItem key={place._id} data={place} />;
          })
        : "No data found"}
    </div>
  );
};
export default Place;
