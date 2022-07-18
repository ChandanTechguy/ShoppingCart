import React from 'react'
const show = {
    color:"gold", padding:"10px 30px", display:"flex", justifyContent:"space-between"
}

export default function Navbar() {
  return (
    <div style={{height:"70px",backgroundColor:"purple"}}>
       <div style={show}>
         <h3 ><strong>Let's Shopping !! </strong></h3>
         <input type="text" style= {{ height:"30px",border:'bold', borderRadius:"20px"}} placeholder="Search" />
        
         <div>
        </div>
       </div>
    </div>
  )
}