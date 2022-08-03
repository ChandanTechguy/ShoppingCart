import React from "react";
import Items from "../Data/Items";
import { useState } from "react";
import Navbar from "./Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import Display from './Display'

const Displays = ({ onAdd, cartItems }) => {
  const [selected, setSelected] = useState(null);
  const [data, setData] = useState(Items);
  const [cart, setCart] = useState([]);

  const handleDisplay = (value) => {
    setSelected(value);
  };

  const filterResult = (catItem) => {
    const result = Items.filter((currData) => {
      return currData.category === catItem;
    });
    setData(result);
  };
  const handlePrice = () => {
    const numPrice = [...data].sort((a, b) => a.price - b.price);
    setData(numPrice);
  };

  const handleRating = () => {
    const numRating = [...data].sort((c, d) => c.rating - d.rating);
    setData(numRating);
  };

  const handleDiscount = () => {
    const numDiscount = [...data].sort(
      (a, b) => a.discountPercentage - b.discountPercentage
    );
    setData(numDiscount);
  };

  if (selected !== null) {
    return <Display values={selected} handleDisplay={handleDisplay} />;
  }

  return (
    <>
      <Navbar onAdd={onAdd} cartItems={cartItems} />

      <div className="container">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                <strong>Filter</strong>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => filterResult("smartphones")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Smartphones
                  </label>{" "}
                  <br />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => filterResult("laptops")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Laptops
                  </label>
                  <br />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => filterResult("fragrances")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Fragrances
                  </label>
                  <br />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => filterResult("skincare")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Skincare
                  </label>
                  <br />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => filterResult("groceries")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Groceries
                  </label>
                  <br />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => filterResult("home-decoration")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Home Decoration
                  </label>
                  <br />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => filterResult("furniture")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Furniture
                  </label>
                  <br />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => filterResult("tops")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Tops
                  </label>
                  <br />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => filterResult("womens-dresses")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Women-dresses
                  </label>
                  <br />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => filterResult("womens-shoes")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Women-shoes
                  </label> 
                  <br /> 
                  <input 
                    className="form-check-input" 
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => filterResult("mens-shirts")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Men's Shirts
                  </label>
                  <br />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => filterResult("mens-shoes")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Men's Shoes
                  </label>
                  <br />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => filterResult("mens-watches")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Men's Watches
                  </label>
                  <br />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => filterResult("womens-watches")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Womens-watches
                  </label>
                  <br />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => filterResult("womens-jewellery")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Womens-jewellery
                  </label>
                  <br />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => filterResult("womens-bags")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Womens Bags
                  </label>
                  <br />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => filterResult("motorcycle")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Motorcycle
                  </label>
                  <br />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => filterResult("automotive")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Automotive
                  </label>
                  <br />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => filterResult("sunglasses")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Sunglasses
                  </label>
                  <br />
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    onClick={() => filterResult("lighting")}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Lighting
                  </label>
                  <br />
                </div>
              </Dropdown.Menu>
            </Dropdown>
            <br></br>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <strong>Sort</strong>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={handlePrice}>Price</Dropdown.Item>
                <Dropdown.Item onClick={handleRating}>Rating</Dropdown.Item>
                <Dropdown.Item onClick={handleDiscount}>
                  Discount Percentage
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-md-9">
            <div className="row">
              {data.map((values) => {
                return (
                  <>
                    <div className="col-md-4 mb-4">
                      <div className="card" key={values.id}>
                        <img
                          src={values.images[0]}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h4 className="card-title"><strong>{values.brand}</strong></h4>
                          <p className="card-text"><strong>Price: </strong>{values.price} /-</p>
                          <p className="card-text">
                            <strong>Discount: </strong>{values.discountPercentage}%
                          </p>

                          <p className="card-text">
                            <strong>Ratings ⭐ </strong>{values.rating}
                          </p>

                          <button
                            className="btn btn-dark"
                            onClick={() => setSelected(values)}
                          >
                            <strong>Product Details</strong>
                          </button>

                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={(e) => {
                              e.preventDefault();
                              onAdd(values);
                            }}
                          >
                            <strong>Add to Cart</strong>
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Displays;
