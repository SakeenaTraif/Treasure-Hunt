import { useSelector } from "react-redux";

function GarbagesList() {
  const randoms = useSelector((state) => state.randomReducer.randoms);

  const randomsList = 0;

  return <div>{randomsList}</div>;
}

export default GarbagesList;
