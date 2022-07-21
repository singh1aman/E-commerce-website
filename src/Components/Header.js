import React from "react";
import css from "./Header.css";
import { Link } from "react-router-dom";

export default function Header({ setInputState }) {
  function handleInput(e) {
    let { value } = e.target;
    setInputState.setInputState(value);
  }

  return (
    <>
      <div className="header">
        <div className="img-container">
          <Link to="/">
            <img src="./Images/logo.png" className="header-logo"></img>
          </Link>
        </div>
        <div className="content-container">
          <div className="tp">Hello</div>
          <div className="bp">Select your address</div>
        </div>
        <div className="searchbox">
          <input
            className="search-input"
            type="text"
            placeholder="Search your product"
            onChange={handleInput}
          ></input>
        </div>
        <Link to="/cart">
          <div className="cart">cart</div>
        </Link>
        <div className="cartq">{setInputState.cart.length}</div>
        <Link to="/signup">
          <div className="signup">
            <div className="signup1">Hello,Sign In</div>
            <div className="signup2">Account & Lists</div>
          </div>
        </Link>
      </div>
    </>
  );
}
