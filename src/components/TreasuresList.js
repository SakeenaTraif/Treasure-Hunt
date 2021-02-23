import { useDispatch, useSelector } from "react-redux";
import Thing from "./Thing";
import { fetchTreasures } from "../store/actions/treasureActions";
import { Redirect } from "react-router";

const TreasuresList = () => {
  const dispatch = useDispatch();

  dispatch(fetchTreasures());
  const treasures = useSelector((state) => state.treasureReducer.treasures);

  const user = useSelector((state) => state.authReducer.user);
  if (!user) return <Redirect to="/" />;

  return (
    <div>
      {treasures.map((treasure) => (
        <Thing
          key={treasure}
          thing={treasure}
          image="https://cdn.onlinewebfonts.com/svg/img_539612.png"
        />
      ))}
    </div>
  );
};

export default TreasuresList;
