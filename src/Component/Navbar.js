import React from "react";
import { useNavigate } from "react-router-dom";



const Navbar = ({onAdd,cartItems}) => {
  const history = useNavigate()
  
  const handleCart = (e) => {
    e.preventDefault()
    history('/cart')
  };
  const handleNew = (e) => {
    e.preventDefault()
    history('/addProduct')
  };
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand " href="/">
          ShopHere
        </a>
        <button type="button" className="btn btn-outline-secondary" onClick={handleNew}>Add new Product</button>
        <div className="cart-container">
        <svg type="button" onClick={handleCart}
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="currentColor"
              className="bi bi-cart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 " />
            </svg>
          <button type="button" className="btn btn-outline-secondary " >
            
            Cart({cartItems.length})
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
