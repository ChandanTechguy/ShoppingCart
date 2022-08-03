import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import Records from '../Data/Items'

export default function ProductDetails() {
    const id = useParams()
   //const navigate = useNavigate()
  
    const values = Records.products.find(Records=>Records.id === parseInt(id.id))
    const [cart, setCart] = useState([])
    //console.log("This is ",id.id)
    const AddToCart = ()=>{
      const allProducts=JSON.parse(localStorage.getItem('object') || "")
      const object = {
        img: values.thumbnail,
        price: values.price
      }
      allProducts.push(object)
      setCart([...cart,localStorage.setItem("object", JSON.stringify(allProducts))])
     }
  

    

  return (
    <>
    <div className='img_div' key={values.id}>
          <div className='details'>
          <img src={values.images[0]} alt="img"/>
            <img src={values.images[1]} alt="img"/>
            <img src={values.images[2]} alt="img"/>
          </div>
            <div style={{justifyContent:"center", paddingTop:"400px"}} className='title'>
            Title: {values.title}
           <br/>
            Description: {values.description}
            <br/>
            Price: {values.price}
            <br/>
            Discount: {values.discountPercentage}
            <br/>
            Rating: {values.rating}
            <br/>
            Stock left: {values.stock}
            <br/>
            Brand: {values.brand}
            <br/>
            Category: {values.category}
           
            </div>
            <div key={values.id}>

            <button onClick={AddToCart}>Add to cart</button>
            </div>
     </div>
        
      
    </>
  )
}