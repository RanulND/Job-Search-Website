import React from "react";
import JobCard from "../../components/JobCardComponent/JobCardComponent";
import Navbar from "../../components/NavbarComponent/NavbarComponent";

const Home = () => {

    return(
        <div>
            <Navbar />
            <div className="container home py-4 px-5">
                <JobCard />
                <JobCard />
            </div>
        </div>
        
    )
}

export default Home