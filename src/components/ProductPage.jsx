import "./ProductPage.css";
import HallImg from '../assets/hall.jpeg'
import ConfImg from '../assets/conference.jpeg'
import PresImg from '../assets/presentation.jpeg'
import LargeImg from '../assets/large.jpeg'
import SmallImg from '../assets/small.jpeg'

const ProductPage = () => {
  const products = [
    { id: 1, name: "Hall room", price: 5500, img: HallImg },
    { id: 2, name: "Conference room", price: 3500, img: ConfImg },
    { id: 3, name: "Presentation room", price: 700, img: PresImg },
    { id: 4, name: "Large room", price: 900, img: LargeImg  },
    { id: 5, name: "Small room", price: 1100, img: SmallImg  },
  ];
  return (
    <div className="product-box">
        <h1 className="mainTitle">Venue Room Selection</h1>
        <div className="product-list-items">
            {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt="" className="product-img" />
              
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <div className="quantity">
              <button>-</button>
              <p>{} </p>
              <button>+</button>
              </div>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default ProductPage;
