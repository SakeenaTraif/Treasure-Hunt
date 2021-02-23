import { ItemWrapper } from "../styles";

const RandomItem = ({ random }) => {
  return (
    <ItemWrapper>
      <img src={random.image} alt={random.name} className="list-group-item list-group-item-action" />
      </ItemWrapper>
  );
};

export default RandomItem;