// import React, { useState } from 'react'
// import Items from "../Data/Items";
// import { useNavigate } from 'react-router-dom';
// // import {useDispatch} from 'react-router-dom'

// export default function Filter() {
//    // const dispatch = useDispatch()
//    const navigate = useNavigate()
//    const itemsord = Items.products
//    const [data, setData] = useState(itemsord)

//    function filterData(ele1) {
//       const filter = itemsord.filter((ele) => {
//         // console.log(ele.brand, "matches with", ele1.target.value)
//          if (ele.brand === ele1.target.value) {
//             return ele;
//          }
//       })
//       setData(filter)

//    }
//    function filterdData(ele1) {
//       const filter = itemsord.filter((ele) => {
//         // console.log(ele.category, "matches with", ele1.target.value)
//          if (ele.category === ele1.target.value) {
//             return ele;
//          }
//       })
//       setData(filter)
//    }

//    const sortByPrice = () => {
//       setData((itemsord) => {
//          const dataToSort = [...data]
//          dataToSort.sort((a, b) => Number(a.price) - Number(b.price))
//          return dataToSort
//       })
//    }
//    const sortByDiscount = () => {
//       setData((itemsord) => {
//          const dataToSort = [...data]
//          dataToSort.sort((a, b) => Number(b.discountPercentage) - Number(a.discountPercentage))
//          return dataToSort
//       })
//    }
//    const sortByRating = () => {
//       setData((itemsord) => {
//          const dataToSort = [...data]
//          dataToSort.sort((a, b) => Number(b.rating) - Number(a.rating))
//          return dataToSort
//       })
//    }

//    return (
//       <>
//          <h6><strong>Sort By ~ </strong></h6>
//          <h8><strong>Select Brand :</strong></h8>

//          <select onChange={filterData} id="selectBox" style={{ width: "200px", height: "30px", borderRadius: "20px" }}>
//             <option disabled selected>
//                select
//             </option>
//             {itemsord.map(ele =>
//                <option value={ele.brand} className='btn btn-primary'  >{ele.brand}</option>
//             )}
//          </select>

//          <h8> <strong>Category :</strong></h8>
//          <select onChange={filterdData}id="selectBox" style={{ width: "200px", height: "30px", borderRadius: "20px" }}>
//             <option disabled selected>
//                select
//             </option>
//             {itemsord.map(ele =>
//                <option value={ele.category} className='btn btn-primary'>{ele.category}</option>
//             )}

//          </select>

//          <button onClick={sortByPrice}>Price </button>
//          <button onClick={sortByDiscount}>Discount</button>
//          <button onClick={sortByRating}>Rating</button>
//           {data.map(items => {
//             return (
//                <div key={data.id}>
//                   <img onClick={() => { navigate(`/productDetails/${items.id}`) }} src={items.thumbnail} alt={items.title} />
//                   <br />
//                   <strong>{items.title}</strong>

//                   <br />
//                   <strong>Price:</strong> ${items.price} <br />
//                   <strong>Discount:</strong> {items.discountPercentage} <br />
//                   <strong>Rating :</strong> {items.rating}
//                   <br></br>
//                   <button onClick={() =>({type:"ADD" , payload: items})}>Add To Cart</button>
//                </div>
//             )
//          })}

//       </>
//    )

// }

import React from "react";
import Items from "../Data/Items";
import { useState } from "react";
import Navbar from "./Navbar";
import Product from "./Products";
import Dropdown from "react-bootstrap/Dropdown";

const Products = ({ onAdd, cartItems }) => {
  const [selected, setSelected] = useState(null);
  const [data, setData] = useState(Items);
  // const [cart, setCart] = useState([]);

  const handleProduct = (value) => {
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
    return <Product values={selected} handleProduct={handleProduct} />;
  }

  return (
    <>
      <Navbar onAdd={onAdd} cartItems={cartItems} />

      <div className="container">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Filter
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
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sort
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
                          <h5 className="card-title">{values.brand}</h5>
                          <p className="card-text">Price: {values.price} /-</p>
                          <p className="card-text">
                            Discount: {values.discountPercentage}%
                          </p>

                          <p className="card-text">
                            Ratings ⭐ {values.rating}
                          </p>

                          <button
                            className="btn btn-dark"
                            onClick={() => setSelected(values)}
                          >
                            View Product Details
                          </button>

                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={(e) => {
                              e.preventDefault();
                              onAdd(values);
                            }}
                          >
                            Add to Cart
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

export default Products;
