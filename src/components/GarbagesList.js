import { useSelector } from "react-redux";
import Thing from "./Thing";

function GarbagesList() {
  const garbages = useSelector((state) => state.garbageReducer.garbages);

  return (
    <div>
      {garbages.map((garbage) => (
        <Thing
          key={garbage.id}
          thing={garbage}
          image="https://cdn.onlinewebfonts.com/svg/img_426243.png"
        />
      ))}
    </div>
  );
}

export default GarbagesList;
