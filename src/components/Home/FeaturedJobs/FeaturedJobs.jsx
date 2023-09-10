import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobDetails.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    }, [])
    return (
        <div className="mt-20">
            <h2 className="text-3xl text-center font-bold">Featured Jobs : {jobs.length}</h2>
            <div className="grid gap-10 my-10 sm:grid-cols-1 lg:grid-cols-2">
                {

                    jobs.map(job => <Job job={job} key={job.id}></Job>)

                }
            </div>
        </div>
    );
};

export default FeaturedJobs;