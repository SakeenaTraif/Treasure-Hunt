import React, { useState } from "react";
import { useSelector } from "react-redux";
import RandomItem from "./RandomItem";
import { Link } from "react-router-dom";


const RandomsList = () => {
  const randoms = useSelector((state) => state.randomReducer.randoms);

  const randomsList = randoms
    .map((random) => <RandomItem key={random.id} random={random} />);
  return (
    <div>
      {randomsList}
    </div>
  );
};

export default RandomsList;