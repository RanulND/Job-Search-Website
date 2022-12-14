import React, { useEffect, useState } from "react";
import img from "../../assets/images/undraw_Mobile_login_re_9ntv.png"
import { getAllJobs } from "../../services/SeekerService";
import './JobCardComponent.css'

const JobCard = () => {
    let [jobs, setJobs] = useState([])

    useEffect(() => {
        getAllJobs().then((res) => {
            setJobs(res.data.Items)
            console.log("itesms", res.data.Items)
        }).catch(err =>{
            console.log(err)
        })
    }, [])

    return(
        <div>
            {
                jobs.map(job => (
                    <div className="job-card card rounded mb-4" key={job.id}>
                    {/* {console.log(jobs)} */}
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-3">
                                <img src={img} width="100%" alt="login"  />
                            </div>
                        
                            <div className="col-md-7 text-start" >
                                <h4 className="job-title">{job.title}</h4>
                                <p className="text-secondary m-0">99x</p>
                                <p className="text-success m-0">Recruiting</p>
                            </div>
                            
                        
                            <div className="col-md-2">
                                <button className="btn btn-primary px-5" data-bs-toggle="modal" data-bs-target="#exampleModal">Apply</button>
                            </div>
                        </div>
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Upload your CV</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="mb-3 text-start">
                                                <label className="form-label mb-4">Upload your CV here</label>
                                                <input className="form-control" type="file" id="formFile" />
                                            </div>

                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Apply</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                ))
            }
        </div>
        
        
    )
}

export default JobCard