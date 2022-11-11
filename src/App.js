import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // use useState to create a state variable to hold the state of the cart
  const [cart, setCart] = useState({});

  const addToCart = (item) => {
    const newCart = { ...cart };
    if (newCart[item.name]) {
      newCart[item.name].quantity += 1;
    } else {
      newCart[item.name] = {
        quantity: 1,
        price: item.price,
      }
    }
    setCart(newCart);
  };

  return (
    <div className="App">
      <h1>Robert's Bakery</h1>

      <Container>
        <Row>
        <Col sm={9}>
      <Container fluid="md">
      <Row xs={1} md={2} lg={3} className="g-4">
        {bakeryData.map((item, index) => (
          <Col>
            <BakeryItem key={index} item={item} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
      </Container>
      </Col>

      <Col sm={3}>
      <Container fluid="md">
      <div>
        <h2>Cart</h2>
        <ul>
          {Object.keys(cart).map((item, index) => (
            <li key={index}>
              {item} x {cart[item].quantity} @ ${cart[item].price} each
            </li>
          ))}
        </ul>
        <h3>Total: ${Object.keys(cart).reduce((total, item) => {
          let price = total + cart[item].quantity * cart[item].price;
          return Math.round(price * 100) / 100;
        }, 0)}</h3>

      </div>
      </Container>
      </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
