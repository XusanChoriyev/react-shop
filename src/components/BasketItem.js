export default function BasketItem(props) {
  const { id, name, price, quantity, decrementQuantity, incrementQuantity } =
    props;
  return (
    <li className=" collection collection-item ">
      {name} x {quantity} = {price * quantity}
      <b>$</b>
      <span className="secondary-content">
        <a
          className=" collection-item waves-effect waves-light btn"
          onClick={() => incrementQuantity(id)}
        >
          <i className="material-icons left">add</i>Add
        </a>
        <a
          className="collection-item waves-effect waves-light btn"
          onClick={() => decrementQuantity(id)}
        >
          <i className="material-icons left">remove</i>remove
        </a>
        <a
          className="collection-item waves-effect waves-light btn"
          onClick={() => props.removeFromBasket(id)}
        >
          <i className="material-icons basket-delete">delete_forever</i> delete
        </a>
      </span>
    </li>
  );
}
