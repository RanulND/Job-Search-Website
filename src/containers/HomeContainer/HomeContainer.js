import React from "react";
import JobCard from "../../components/JobCardComponent/JobCardComponent";

const Home = () => {

    return(
        <div className="container home py-4 px-5">
            <JobCard />
            <JobCard />
        </div>
    )
}

export default Home