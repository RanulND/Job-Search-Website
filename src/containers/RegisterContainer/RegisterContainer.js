import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import { Navigate } from "react-router-dom";

const Register = ({company}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    async function signUp() {
        try {
            console.log("hello")
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email : username
                },
                autoSignIn: { // optional - enables auto sign in after user is confirmed
                    enabled: true,
                }
            });
            console.log(user);
            window.location.href = "/register/verify";
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    // useEffect(_ => {
    //     console.log({
    //         "un": username,
    //         "pw" : password,
    //         "cpw" : confirmPassword,
    //         "fn" : firstName,
    //         "ln" : lastName
    //     })
    // }, [username,password,confirmPassword,firstName,lastName])

    return(
        <div className="register container">
            {
                company? (
                    <div className="row align-items-center vh-100">
                        <h3 className="section-title mb-5">Register your Company</h3>
                        <div className="mb-3 text-start">
                            <label className="form-label text-start">Company Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="first name" />
                        </div>
                        <div className="mb-3 text-start">
                            <label className="form-label">Company Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3 text-start">
                            <label className="form-label text-start">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="* * * * * * *" />
                        </div>
                        <div className="mb-3 text-start">
                            <label className="form-label text-start">Confirm Password</label>
                            <input type="password" className="form-control" id="password" placeholder="* * * * * * *" />
                        </div>
                        <div className="mb-3 text-center">
                            <Link to='/company-dashboard'>
                                <button className="btn btn-primary px-5">
                                    Register as a company
                                </button>
                            </Link>
                        </div>
                    </div>
                ):(
                    <div className="row align-items-center vh-100">
                        <h3 className="section-title mb-5">Register As a Job Seeker</h3>
                        <div className="mb-3 col-md-6 text-start">
                            <label className="form-label text-start">First Name</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="first name" onChange={ e => setFirstName(e.target.value)} />
                        </div>
                        <div className="mb-3 col-md-6 text-start">
                            <label className="form-label">Last Name</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="last name" onChange={ e => setLastName(e.target.value)} />
                        </div>
                        <div className="mb-3 text-start">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={ e => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-3 text-start">
                            <label className="form-label text-start">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="* * * * * * *" onChange={ e => setPassword(e.target.value)} />
                        </div>
                        <div className="mb-3 text-start">
                            <label className="form-label text-start">Confirm Password</label>
                            <input type="password" className="form-control" id="password" placeholder="* * * * * * *" onChange={ e => setConfirmPassword(e.target.value)} />
                        </div>
                        <div className="mb-3 text-center">
                            {/* <Link to='/seeker-dashboard'> */}
                                <button className="btn btn-primary px-5" onClick={_ => signUp()}>
                                    Register as a job seeker
                                </button>
                            {/* </Link> */}
                        </div>
                    </div>
                )
            }
            
            
        </div>
    )
}

export default Register