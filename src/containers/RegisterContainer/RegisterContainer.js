import React from "react";
import { Link } from "react-router-dom";

const Register = () => {

    return(
        <div className="register container">
            <div className="row align-items-center vh-100">
                <h3 className="section-title mb-5">Register your Company</h3>
                <div class="mb-3 col-md-6 text-start">
                    <label for="exampleFormControlInput1" class="form-label text-start">First Name</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="first name" />
                </div>
                <div class="mb-3 col-md-6 text-start">
                    <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="last name" />
                </div>
                <div class="mb-3 text-start">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3 text-start">
                    <label className="form-label text-start">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="* * * * * * *" />
                </div>
                <div className="mb-3 text-start">
                    <label className="form-label text-start">Confirm Password</label>
                    <input type="password" class="form-control" id="password" placeholder="* * * * * * *" />
                </div>
                <div className="mb-3 text-center">
                    <Link to='/home'>
                        <button className="btn btn-primary px-5">
                            Register as a company
                        </button>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Register