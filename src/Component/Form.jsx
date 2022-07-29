import React from 'react'
import { useNavigate } from 'react-router-dom'


const Form = () => {
    const history = useNavigate()
    const handleSubmit = () =>{
        history('/placed')
    }
  return (
    <>
    <div className="form-container">
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand " href="/">
          Lets Shopping !!
        </a>
        </nav>
        <div className="form-input">
        <form action="" onSubmit={handleSubmit}>
        <label htmlFor="formGroupExampleInput">Address:</label>
        <input type="text" className="form-control-address" id="formGroupExampleInput" placeholder="Address" required/><br/>
        <button type="submit" className="btn btn-success">Place Order</button>
        </form>
        </div>
        

    </div>
    </>
  )
}

export default Form