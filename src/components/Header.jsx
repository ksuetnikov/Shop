import React, { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
  let sum = 0;
  props.orders.forEach((el) => {
    sum += Number.parseFloat(el.price);
  });
  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="sum">Сумма: {new Intl.NumberFormat().format(sum)}$</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Ваша корзина пуста</h2>
    </div>
  );
};
export default function Header(props) {
  let [cartOpen, setcartOpen] = useState(false);
  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>About us</li>
          <li>
            <div
              className="contacts"
              onClick={() =>
                alert("Kirill Suetnikov +79119547059 ksuetnikov@yandex.ru")
              }
            >
              Contacts
            </div>
          </li>
          <li>Cabinets</li>
        </ul>
        <FaShoppingBasket
          onClick={() => setcartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
