import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { SignUp } from "../../services/AuthService";
import { v4 as uuidv4 } from 'uuid';
import { addSeekerDetails } from "../../services/SeekerService";
import { addCompanyDetails } from "../../services/CompanyService";

const Register = ({company}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [companyName, setCompanyName] =useState('')
    const navigate = useNavigate()

    const { handleUser, setCompany } = useAuth()

    const passwordValidation = () => {
        if(password === confirmPassword){
            return true
        }
        return false
    }

    async function signUp() {
        if(passwordValidation()){
            try {
                // console.log("hello")
                const { user } = await SignUp({
                    username,
                    password,
                    attributes: {
                        email : username
                    },
                    autoSignIn: {
                        enabled: true,
                    }
                });
                console.log(user);
                
                if(company){
                    const data = {
                        username: user.username,
                        companyName: companyName,
                        id: username,
                        confirmed: false,
                        isSeeker: !company
                    }
                    addCompanyDetails(data).then(res => {
                        console.log(res.data)
                    }).catch(err => {
                        console.log(err)
                    })
                    handleUser(data, company)
                }else{
                    const data = {
                        username: user.username,
                        firstName: firstName,
                        lastName: lastName,
                        id: uuidv4(),
                        confirmed: false,
                        isSeeker: !company
                    }

                    addSeekerDetails(data).then(res => {
                        console.log(res.data)
                    }).catch(err => {
                        console.log(err)
                    })
                    handleUser(data, company)
                }
                
                
                navigate('/register/verify')
            } catch (error) {
                console.log('error signing up:', error);
            }
        }else{
            alert("Passwords do not match")
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
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="company name" onChange={e => setCompanyName(e.target.value)} />
                        </div>
                        <div className="mb-3 text-start">
                            <label className="form-label">Company Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-3 text-start">
                            <label className="form-label text-start">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="* * * * * * *" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="mb-3 text-start">
                            <label className="form-label text-start">Confirm Password</label>
                            <input type="password" className="form-control" id="password" placeholder="* * * * * * *" onChange={e => setConfirmPassword(e.target.value)} />
                        </div>
                        <div className="mb-3 text-center">
                            {/* <Link to='/company-dashboard'> */}
                                <button className="btn btn-primary px-5" onClick={_ => signUp()}>
                                    Register as a company
                                </button>
                            {/* </Link> */}
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
                            <input type="password" className="form-control" id="Confirmpassword" placeholder="* * * * * * *" onChange={ e => setConfirmPassword(e.target.value)} />
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