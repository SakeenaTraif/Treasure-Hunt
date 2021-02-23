import { useSelector } from "react-redux";

const TreasuresList = () => {
  const treasures = useSelector((state) => state.treasureReducer.treasures);

  const treasuresList = 0;
  return <div>{treasuresList}</div>;
};

export default TreasuresList;
