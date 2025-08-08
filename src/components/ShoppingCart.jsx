import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="shopping-cart">
        <h1>Amount Due ${totalAmount}.</h1>
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} - {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <div>
      </div>
    </>
  );
};

export default ShoppingCart;
