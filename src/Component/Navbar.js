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
          <strong>LETS SHOPPING !!</strong>
        </a>
        <button type="button" className="btn btn-outline-secondary" onClick={handleNew}><strong>Add New Product</strong></button>
        <div className="cart-container">
        <svg type="button" onClick={handleCart}
              width="23"
              height="23"
              fill="currentColor"
              className="bi bi-cart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          <button type="button"  className="btn btn-outline-secondary " >
            
            Cart({cartItems.length})
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
