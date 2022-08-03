import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Product = ({ values, handleProduct }) => {
 return (
    <>
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand " href="/">
          <strong>More Info ...</strong>
        </a>
</nav>
    <Carousel >
    <Carousel.Item>
      <img
        className="container"
        src={values.images[0]}
     alt="First slide"
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="container"
        src={values.images[1]}
        alt="Second slide"
      />
 
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="container"
        src={values.images[2]}
        alt="Third slide"
      />
 
    </Carousel.Item>
  </Carousel>
        <div className="card-body">
          <h5 className="card-title"><strong>{values.brand}</strong></h5>
          <p className="card-text"><strong>Price:</strong> {values.price} /-</p>

          <p className="card-text"><strong>Ratings :</strong>⭐ {values.rating}</p>
          <p> <strong>[ {values.description} ]</strong></p>
          
        </div>
        
    </>
  );
};

export default Product;
