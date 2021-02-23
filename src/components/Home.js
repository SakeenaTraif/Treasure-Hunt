import { Link } from "react-router-dom";
import { RandomThings, Treasures } from "../styles";

const Home = () => {
  return (
    <>
      <Link to="/treasures">
        <Treasures type="button" className="btn btn-outline-warning">
          Treasures
        </Treasures>
      </Link>
      <Link to="/garbages">
        <RandomThings type="button" className="btn btn-outline-warning">
          Garbages
        </RandomThings>
      </Link>
    </>
  );
};

export default Home;
