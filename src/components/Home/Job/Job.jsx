

const Jobs = ({ job }) => {
    const { job_id, company_logo_url,title, company_name,location,job_type,salary, remote_or_onsite } = job;
    return (
        <div className="border rounded-lg p-8">
            <img src={company_logo_url} alt="" className="w-24 h-20 my-4" />
            <h4 className="font-bold">{title}</h4>
            <p>{company_name}</p>
            <button className="btn btn-outline btn-primary mr-3 my-3">{job_type}</button>
            <button className="btn btn-outline btn-primary">{remote_or_onsite}</button>
            <div className=" my-3 lg:flex justify-between">
                <p>{location}</p>
           
                <p> Salary : {salary}</p>    
            </div>
            <button className="btn btn-active btn-primary">View Details</button>
        </div>
    );
};

export default Jobs;