import React from 'react'
import { useNavigate } from 'react-router-dom'


const MyCart = ({cartItems, total}) => {
    const history = useNavigate()

    const handleOrder = () =>{
      history('/placeOrder')
    }
    const handleClick = () =>{
      history('/product')
    }
  if(cartItems.length === 0){
    return (
      <>
      <div className="cart-container">
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand " href="/">
          ShopHere
        </a>
    </nav>
    <h3 className='cart-display'>No items to Display</h3>
    <button type="button" className="btn btn-outline-warning" onClick={handleClick}>Go Back to products page</button>
    </div>
    </>
  )}

  return (
    <>
    <div className="cart-container">
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand " href="/">
          ShopHere
        </a>

    <p>Total price: Rs.{total}/- </p>
  </nav>
  </div>
  <div className="col-md-9">
            <div className="row">
              {cartItems.map((values) => {
                return (
                  <>
                    <div className="col-md-4 mb-4" >
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
                          <p className="card-text">
                            Quantity: {values.quantity}
                          </p>

                        </div>
                      </div>
                    </div>
                  </>
                );
              })}

  

            </div>
            <button type="button" className="btn btn-outline-warning" onClick={handleClick}>Go Back to products page</button>
            <button type="button" className="btn btn-outline-info" onClick={handleOrder}>Checkout</button>
            </div>
            
        
    </>
  )
}

export default MyCart