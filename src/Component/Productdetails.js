import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import Records from './products.json'

export default function ProductDetails() {
    const id = useParams()
    const navigate = useNavigate()
  
    const currProduct = Records.products.find(records=>records.id === parseInt(id.id))
    const [cart, setCart] = useState([])
    //console.log("This is ",id.id)
    const AddToCart = ()=>{
      const allProducts=JSON.parse(localStorage.getItem('object') || "")
      const object = {
        img: currProduct.thumbnail,
        price: currProduct.price
      }
      allProducts.push(object)
      setCart([...cart,localStorage.setItem("object", JSON.stringify(allProducts))])
     }
  

    

  return (
    <>
    <div className='img_div' key={currProduct.id}>
          <div className='details'>
          <img src={currProduct.images[0]} alt="img"/>
            <img src={currProduct.images[1]} alt="img"/>
            <img src={currProduct.images[2]} alt="img"/>
          </div>
            <div style={{justifyContent:"center", paddingTop:"400px"}} className='title'>
            Title: {currProduct.title}
           <br/>
            Description: {currProduct.description}
            <br/>
            Price: {currProduct.price}
            <br/>
            Discount: {currProduct.discountPercentage}
            <br/>
            Rating: {currProduct.rating}
            <br/>
            Stock left: {currProduct.stock}
            <br/>
            Brand: {currProduct.brand}
            <br/>
            Category: {currProduct.category}
           
            </div>
            <div key={currProduct.id}>

            <button onClick={AddToCart}>Add to cart</button>
            </div>
     </div>
        
      
    </>
  )
}