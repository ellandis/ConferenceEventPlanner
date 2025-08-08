import "./ProductPage.css";
import HallImg from "../assets/hall.jpeg";
import ConfImg from "../assets/conference.jpeg";
import PresImg from "../assets/presentation.jpeg";
import LargeImg from "../assets/large.jpeg";
import SmallImg from "../assets/small.jpeg";
import SpeakersImg from "../assets/speaker.jpg";
import MicrophonesImg from "../assets/micophone.jpg";
import WhiteboardsImg from "../assets/whiteboard.jpeg";
import ProjectorsImg from "../assets/projector.jpg";
import SignageImg from "../assets/sinage.jpeg";
import BreakfastImg from "../assets/Lumberjack.jpg";
import LunchImg from "../assets/lunch.jpg";
import HighTeaImg from "../assets/hightea.jpg";
import DinnerImg from "../assets/dinner.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, remove1ItemFromCart } from "./CartSlice";

const ProductPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const venueCart = cartItems.reduce((total, item) => {
    if (item.id >= 1 && item.id <= 5) {
      return total + item.price * item.quantity;
    }
    return total;
  }, 0);
  const addonCart = cartItems.reduce((total, item) => {
    if (item.id >= 6 && item.id <= 10) {
      return total + item.price * item.quantity;
    }
    return total;
  }, 0);
  const mealCart = cartItems.reduce((total, item) => {
    if (item.id >= 11 && item.id <= 14) {
      return total + item.price * item.quantity;
    }
    return total;
  }, 0);
  

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };
  const handleRemoveFromCartby1 = (product) => {
    dispatch(remove1ItemFromCart(product));
  };
  

  const products = [
    { id: 1, name: "Hall room", price: 5500, img: HallImg },
    { id: 2, name: "Conference room", price: 3500, img: ConfImg },
    { id: 3, name: "Presentation room", price: 700, img: PresImg },
    { id: 4, name: "Large room", price: 900, img: LargeImg },
    { id: 5, name: "Small room", price: 1100, img: SmallImg },
  ];

  const addons = [
    { id: 6, name: "Speakers", price: 35, img: SpeakersImg },
    { id: 7, name: "Microphones", price: 45, img: MicrophonesImg },
    { id: 8, name: "Whiteboards", price: 80, img: WhiteboardsImg },
    { id: 9, name: "Projectors", price: 200, img: ProjectorsImg },
    { id: 10, name: "Signage", price: 80, img: SignageImg },
  ];

  const meals = [
    { id: 11, name: "Breakfast", price: 50, img: BreakfastImg },
    { id: 12, name: "Lunch", price: 60, img: LunchImg },
    { id: 13, name: "High tea", price: 25, img: HighTeaImg },
    { id: 14, name: "Dinner", price: 70, img: DinnerImg },
  ];

  return (
    <>
      <div className="product-box" id="venue">
        <h1 className="mainTitle">Venue Room Selection</h1>
        <div className="product-list-items">
          {products.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.img} alt="" className="product-img" />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <div className="quantity">
                <button onClick={() => handleRemoveFromCartby1(item)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => handleAddToCart(item)}>+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="total">Total Cost ${venueCart}</div>
      </div>
      <div className="product-box" id="addons">
        <h1 className="mainTitle">Add on Selection</h1>
        <div className="product-list-items">
            {addons.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.img} alt="" className="product-img" />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <div className="quantity">
              <button onClick={() => handleRemoveFromCartby1(item)}>-</button>
              <p>{item.quantity}</p>
              <button onClick={() => handleAddToCart(item)} >+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="total">Total Cost ${addonCart}</div>
    </div>
      <div className="product-box" id="meals">
        <h1 className="mainTitle">Meals Selection</h1>
        <div className="product-list-items">
            {meals.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.img} alt="" className="product-img" />
              
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <div className="quantity">
              <button onClick={() => handleRemoveFromCartby1(item)} >-</button>
              <p>{item.quantity}</p>
              <button onClick={() => handleAddToCart(item)} >+</button>
              </div>
            </div>
          ))}
        </div>
          <div className="total">Total Cost ${mealCart}</div>
      </div>
    </>
  );
};

export default ProductPage;
