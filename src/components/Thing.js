import { ItemWrapper } from "../styles";

function Thing({ thing }) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src="https://freepikpsd.com/wp-content/uploads/2019/10/treasure-icon-png-4-Transparent-Images.png"
          alt="Card image cap"
        />
        <div className="card-body">
          <p className="card-text">{thing.name}</p>
        </div>
      </div>
      {/* <ItemWrapper>
        <img
        src={thing.image}
        alt={thing.name}
        className="list-group-item list-group-item-action"
      />
        <p>{thing.name}</p>
        <p>{thing.isTreasure.toString()}</p>
      </ItemWrapper> */}
    </>
  );
}

export default Thing;
