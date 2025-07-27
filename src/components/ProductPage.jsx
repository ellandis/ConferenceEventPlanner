import "./ProductPage.css";
import HallImg from '../assets/hall.jpeg'
import ConfImg from '../assets/conference.jpeg'
import PresImg from '../assets/presentation.jpeg'
import LargeImg from '../assets/large.jpeg'
import SmallImg from '../assets/small.jpeg'

const ProductPage = () => {
  const products = [
    { id: 1, name: "hall room", price: 5500, img: HallImg },
    { id: 2, name: "conference room", price: 3500, img: ConfImg },
    { id: 3, name: "presentation room", price: 700, img: PresImg },
    { id: 4, name: "large room", price: 900, img: LargeImg  },
    { id: 5, name: "small room", price: 1100, img: SmallImg  },
  ];
  return (
    <div>
      <div>
        <h1 className="mainTitle">Venue Room Selection</h1>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt="" className="product-img" />
              <p>{product.img}</p>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <p>
        <p>
          Product selection page After selecting Get Started, the application
          should direct the user to the product selection page. This page allows
          users to select rooms in the venue, add-ons needed for presentations
          such as microphones and speakers, and meals they would like catered
          for the participants.
        </p>
        <p>
          This page will have three sections: room selection, add-ons, and
          meals. Each section should have its own header and also a page header
          with navigation to each section.The suggested layout is displayed in
          an annotated screenshot for each section and an image of the whole
          page. Room selection and navigation bar Users select from 5 room
          types:
        </p>

        <ul>
          <li>hall – capacity 200, $5500 ea </li>
          <li>Conference room – capacity 15, $3500 ea</li>
          <li>Presentation room – capacity 50, presentation room, $700 ea</li>
          <li>Large meeting room – capacity 10, $900 ea</li>
          <li>Small meeting room – small meeting room, capacity 5, $1100 ea</li>
        </ul>

        <p>
          You will provide an increment and decrement button for each room type
          so the user can request the number of each room type they need. The
          product selection page should also have a header with a navigation
          bar. The navigation bar should display a Show Details button, which
          opens a pop-up window displaying data related to the user's
          selections.
        </p>
      </p>
    </div>
  );
};

export default ProductPage;
