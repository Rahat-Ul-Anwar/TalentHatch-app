// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import Job from "../Job/Job";



const FeaturedJobs = () => {


    const { jobsData } = useLoaderData();

    // useEffect(() => {
    //     fetch('jobDetails.json')
    //     .then(res => res.json())
    //     .then(data => setJobs(data));
    // }, [])
    return (
        <div className="mt-20">
            <h2 className="text-3xl text-center font-bold">Featured Jobs : {jobsData.length}</h2>
            <div className="grid gap-10 my-10 sm:grid-cols-1 lg:grid-cols-2">
                {

                    jobsData.map(job => <Job job={job} key={job.job_id}></Job>)

                }
            </div>
            <div className="w-44 mx-auto">
            <button className="btn btn-active btn-primary">See All Jobs</button>
              </div>
        </div>
    );
};

export default FeaturedJobs;