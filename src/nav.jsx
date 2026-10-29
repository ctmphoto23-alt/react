import React from 'react';
import logo from './assets/Library.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Nav = ({ cart = [] }) => {
  const cartCount = cart.reduce(
    (total, book) => total + (book.quantity ?? 1),
    0
  );

  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={logo} className="logo" alt="Library logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/books" className="nav__link">
              Books
            </Link>
          </li>
          <li>
            <button type="button" className="btn__menu" aria-label="Open menu">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </li>
          <li className="nav__icon">
            <Link to="/cart" className="nav__link" aria-label="Cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            {cartCount > 0 && (
              <span className="cart__length" aria-label={`${cartCount} items in cart`}>
                {cartCount}
              </span>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;