import React, { useState } from "react";
import "./LoginContainer.css"
import img from "../../assets/images/undraw_Mobile_login_re_9ntv.png"
import { Link } from "react-router-dom";
import { SignIn } from "../../services/AuthService";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function signIn() {
        try {
            const user = await SignIn(username, password)
            //add user context
            window.location.href = "/seeker-dashboard"
            console.log(user)
        } catch (error) {
            console.log('error signing in', error);
        }
    }

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
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={ e => setUsername(e.target.value)} />
                            </div>
                            <div className="mb-5 text-start">
                                <label className="form-label text-start">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="* * * * * * *" onChange={ e => setPassword(e.target.value)} />
                            </div>
                            <div className="mb-3 text-center">
                                <button className="btn btn-primary px-5" onClick={ _ => signIn()}>
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