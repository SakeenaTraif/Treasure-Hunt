import { useSelector } from "react-redux";
import Thing from "./Thing";

function GarbagesList() {
  const garbages = useSelector((state) => state.garbageReducer.garbages);

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        {garbages.map((garbage) => (
          <div className="col">
            <Thing key={garbage.id} thing={garbages} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GarbagesList;
