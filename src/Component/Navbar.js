import React from 'react'
import { useNavigate } from 'react-router-dom';
const show = {
    color:"gold", padding:"10px 30px", display:"flex", justifyContent:"space-between"
}

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <div style={{height:"60px",backgroundColor:"purple"}}>
       <div style={show}>
         <h3 ><strong>Let's Shopping !! </strong></h3>
         <input type="text" style= {{ height:"30px",border:'bold', borderRadius:"20px"}} placeholder="Search" />
        
         <div className="add-to-cart">
         <span></span>
         <button style={{display:"corner"}}><img src="https://cdn.iconscout.com/icon/free/png-512/shopping-cart-442-1151214.png" alt="cart" onClick={()=>{navigate(`/cart`)}} style={{width:"40px", display:"corner"}}/></button>
      </div>
         <div>
        </div>
       </div>
    </div>
  )
}
