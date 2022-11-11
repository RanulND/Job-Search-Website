import React from "react";

const JobList = () => {

    return(
        <div className="row align-items-center justify-content-center">
            <div className="col-md-6 text-start">
                <h3>Hello World</h3>
            </div>
            <div className="col-md-3">
                <button className="btn btn-warning">Stop Recruiting</button>
            </div>
            <div className="col-md-3">
                <button className="btn btn-danger">Delete</button>
            </div>
        </div>
    )
}

export default JobList