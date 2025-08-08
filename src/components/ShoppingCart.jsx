import { useSelector } from "react-redux";
import './ShoppingCart.css'

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Unit Cost</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody >
         {cartItems.map( (m) => (
            <tr key={m.id}>
              <td>{m.name}</td>
              <td>{m.price}</td>
              <td>{m.quantity}</td>
            </tr>
          ))
          }
          
        </tbody>
      </table>
      </div>
    </>
  );
};

export default ShoppingCart;
