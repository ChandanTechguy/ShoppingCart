import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'



 export const Loginform = () => {
    const navigate = useNavigate()
    return (
        <div className='Chandan'>
            
            <form className='form-container '>
                <ul className="nav nav-pills nav-justified mb-3 " id="ex1" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                            aria-controls="pills-login" aria-selected="true">Login</a>
                    </li>

                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                        <form>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="loginName" id="Das" >Email or Username</label>
                                <input required minLength={8}  type="email" id="loginName" className="form-control" />

                                {/* {err.email && (<div>
                                        <p class ="danger">{err.email}</p>
                            </div>)
                                } */}
                            </div>
                            
                            
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="loginPassword" id="Text">Password</label>
                                <input type="password" id="loginPassword" className="form-control" />

                            </div>


                            <div className="row mb-4">
                                <div className="col-md-6 d-flex justify-content-center">

                                    <div className="form-check mb-3 mb-md-0">
                                        <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                                        <label className="form-check-label" id="cha" htmlFor="loginCheck"> Remember me </label>
                                    </div>
                                </div>

                                <div className="col-md-6 d-flex justify-content-center" >
                                    <a href="#!" id="pass">Forgot password ?</a>
                                </div>
                            </div>


                            <button onClick={() => { navigate('/products') }} type="submit" className="btn btn-primary btn-block mb-4 container" >Sign in</button>
                        </form>
                    </div>
                </div>

            </form>
        </div>

    );
}

