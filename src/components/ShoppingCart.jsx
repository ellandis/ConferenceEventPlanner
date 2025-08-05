import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart, clearCart, increaseItemQty, decreaseItemQty } from './CartSlice'; // Assuming you have action creators for increasing and decreasing item quantity


const ShoppingCart = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector(state =>  state.cart.cartItems);
    const totalAmount = cartItems.reduce( (total,item) => total + item.price * item.quantity, 0);

    const handleRemoveItem  = itemId => {
        dispatch(removeItemFromCart(itemId));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    const handleIncreaseQty = (itemId) => {
        dispatch(increaseItemQty(itemId));
    };
    const handleDecreaseQty = (itemId) => {
        dispatch(decreaseItemQty(itemId));
    };

    return (
        <>
        <div className="shopping-cart">
            <ul className="cart-items">
                {cartItems.map( item => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
        </>
    )

};

export default ShoppingCart

