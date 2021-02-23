import { ItemWrapper } from "../styles";

const TreasureItem = ({ treasure }) => {
  return (
    <ItemWrapper>
      <img src={treasure.image} alt={treasure.name} className="list-group-item list-group-item-action" />
      </ItemWrapper>
  );
};

export default TreasureItem;