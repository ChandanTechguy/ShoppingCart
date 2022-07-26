import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export const Loginform = () => {
    let navigate = useNavigate();
    const [username, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const mediumRegex = new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
        );
        if (!password.match(mediumRegex)) {
            alert("Please enter a strong password");
        } else {
            navigate("/products");
        }
    };

    return (
        <div className="Chandan">

            <form className="form-container border " onSubmit={handleSubmit}>
                <ul
                    className="nav nav-pills nav-justified mb-3 "
                    id="ex1"
                    role="tablist"
                >
                    <li className="nav-item" role="presentation">
                        <a
                            class="nav-link active"
                            id="tab-login"
                            data-mdb-toggle="pill"
                            href="#pills-login"
                            role="tab"
                            aria-controls="pills-login"
                            aria-selected="true"
                        >
                            <strong> Login</strong>
                        </a>
                    </li>
                </ul>
                <div className="was-validated container container-sm ">
                    <label className="form-label" htmlFor="loginName" id="Das"><strong> Email or Username</strong>

                    </label>
                    <input
                        required
                        minLength={8}
                        type="email"
                        id="loginName"
                        className="form-control"
                        value={username}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"

                    />
                </div>
                <br></br>

                <div className="was-validated container container-sm ">
                    <label className="form-label" htmlFor="loginPassword" id="Text"><strong>Password</strong>

                    </label>
                    <input
                        type="password"
                        id="loginPassword"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                </div>
                <br></br>

                <div className="row mb-4">
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="form-check mb-3 mb-md-0">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="loginCheck"
                                checked
                            />
                            <label
                                className="form-check-label"
                                id="cha"
                                htmlFor="loginCheck"
                            >
                                {" "}
                                Remember me{" "}
                            </label>
                        </div>
                    </div>

                    <div className="col-md-6 d-flex justify-content-center">
                        <a href="#!" id="pass"><strong>Forgot password ?</strong>

                        </a>
                    </div>
                </div>

                <button
                    className="btn btn-primary btn-block mb-7 container"
                >
                    <strong>Sign in</strong>
                </button>
            </form>
        </div>

    );
};
