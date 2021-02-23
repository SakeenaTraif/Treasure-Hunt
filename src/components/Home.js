import { Link } from "react-router-dom";
import { Garbages, Treasures } from "../styles";
import { useSelector } from "react-redux";
import { useLastLocation } from "react-router-last-location";

const Home = () => {
  const user = useSelector((state) => state.authReducer.user);
  const lastLocation = useLastLocation();

  return (
    <>
      {user &&
        lastLocation &&
        (lastLocation.pathname === "/signin" ||
          lastLocation.pathname === "/signup") && (
          <div className="alert alert-warning" role="alert">
            Welcome <strong>{user.username}</strong>! you are successfully{" "}
            {lastLocation.pathname === "/signin" ? "signed in" : "signed up"}.
          </div>
        )}

      {user && (
        <Link to="/treasures">
          <Treasures type="button" className="btn btn-outline-secondary">
            Treasures
          </Treasures>
        </Link>
      )}

      <Link to="/garbages">
        <Garbages type="button" className="btn btn-outline-secondary">
          Garbages
        </Garbages>
      </Link>
    </>
  );
};

export default Home;
