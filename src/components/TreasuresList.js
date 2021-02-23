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
    <div className="container">
      <div className="row">
        {treasures.map((treasure) => (
          <div className="col">
            <Thing key={treasure.id} thing={treasure} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreasuresList;
