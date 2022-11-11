import React from "react";
import './RegisterHomeContainer.css'
import {VscOrganization, VscAccount} from 'react-icons/vsc'
import { Link } from "react-router-dom";

const RegisterHome = () => {



    return(
        <div className="container register-home">
            <div className="row align-items-center justify-content-center vh-100">
                {/* <h2 className="section-title">Register</h2> */}
                <div className="col-md-6 px-5 mb-3">
                    <div className="card shadow rounded px-3 py-4">
                        <div className="justify-content-center mb-3">
                            <VscAccount size={40} />
                        </div>
                        <h5 className="section-title mb-4">Job Seeker</h5>
                        <p>
                            Are you a <strong>Job Seeker</strong>? <br />
                            JobSearch is the ideal and the best place for you to find your career path.
                        </p>
                        <p>
                            You can join in to our platform and find your dream job through JobSearch platform
                        </p>
                        <div className="mb-3 text-center">
                            <button className="btn btn-primary px-5">
                                Register as a job seeker
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 px-5 mb-3">
                    <div className="card shadow rounded px-3 py-4">
                    <div className="justify-content-center mb-3">
                            <VscOrganization size={40} />
                        </div>
                        <h5 className="section-title mb-4">Company</h5>
                        <p>
                            Are you a <strong>Company</strong>? <br />
                            JobSearch is the ideal and the best place for you to find your skillful employees
                        </p>
                        <p>
                            You can join in to our platform as a company and find your skilled employees through JobSearch platform
                        </p>
                        <div className="mb-3 text-center">
                            <Link to='/register/company'>
                                <button className="btn btn-primary px-5">
                                    Register as a Company
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterHome