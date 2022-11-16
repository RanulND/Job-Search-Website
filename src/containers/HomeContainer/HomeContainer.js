import React, { useEffect, useState } from "react";
import JobCard from "../../components/JobCardComponent/JobCardComponent";
import JobList from "../../components/JobListComponent/JobListComponent";
import Navbar from "../../components/NavbarComponent/NavbarComponent";
import { v4 as uuidv4 } from 'uuid';
import { addjob } from "../../services/CompanyService";

const Home = ({company}) => {
    const [job, setJob] = useState('')

    const add = () => {
        const data = {
            title: job,
            companyId: '',
            companyName: '99x',
            id: uuidv4()
        }

        addjob(data).then(res => {

        }).catch(err => {
            console.log(err)
        })
    }

    return(
        <div>
            <Navbar />
            {
                company? (
                    <div className="container home py-4 px-5">
                        <div className="row">
                            <div className="mb-3 text-end">
                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Job</button>
                            </div>
                            <div>
                                <JobList />
                            </div>      
                        </div>
                        
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Job</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                    <div className="mb-3 text-start">
                                        <label className="form-label text-start">Job title</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Job title" onChange={e => setJob(e.target.value)} />
                                    </div>

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" onClick={e =>  add()}>Add Job</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ):(
                    <div className="container home py-4 px-5">
                        <JobCard />
                        <JobCard />
                    </div>
                )
            }
           
        </div>
        
    )
}

export default Home