import { ItemWrapper } from "../styles";

function Thing({ thing, image }) {
  console.log(thing);
  return (
    <>
      <ItemWrapper>
        <img
          src={image}
          alt={thing.name}
          className="list-group-item list-group-item-action"
        />
        <p>{thing.name}</p>
      </ItemWrapper>
    </>
  );
}

export default Thing;
