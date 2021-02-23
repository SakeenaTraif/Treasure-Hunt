import { ItemWrapper } from "../styles";

function Thing({ thing }) {
  return (
    <ItemWrapper>
      <img
        src={thing.image}
        alt={thing.name}
        className="list-group-item list-group-item-action"
      />
    </ItemWrapper>
  );
}

export default Thing;
