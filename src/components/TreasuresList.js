import React, { useState } from "react";
import { useSelector } from "react-redux";
import TreasureItem from "./TreasureItem";
import { Link } from "react-router-dom";


const TreasuresList = () => {
  const treasures = useSelector((state) => state.treasureReducer.treasures);

  const treasuresList = treasures
    .map((treasure) => <TreasureItem key={treasure.id} category={treasure} />);
  return (
    <div>
      {treasuresList}
    </div>
  );
};

export default TreasuresList;