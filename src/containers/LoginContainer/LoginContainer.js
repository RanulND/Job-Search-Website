import React from "react";
import "./LoginContainer.css"
import img from "../../assets/images/undraw_Mobile_login_re_9ntv.png"
import { Link } from "react-router-dom";

const Login = () => {

    return(
        <div className="login container">
             <div className="row vh-100 align-items-center justify-content-center px-5">
                <div className="  rounded">
                    <div className="row align-items-center">
                        <div className="col-md-6 img">
                            <img src={img} width="100%" alt="login"  />
                        </div>
                        <div className="col-md-6 py-4">
                            <div className="mb-5 text-start">
                                <label className="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                            </div>
                            <div className="mb-5 text-start">
                                <label className="form-label text-start">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="* * * * * * *" />
                            </div>
                            <div className="mb-3 text-center">
                                <button className="btn btn-primary px-5">
                                    Login
                                </button>
                            </div>
                            <div className="mb-3 text-center">
                                <Link className="link" to='/register'>
                                    <a href="/register">Dont you have an account?</a>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
             </div>
        </div>
    )
}

export default Login;