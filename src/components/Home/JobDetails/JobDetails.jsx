import { useLoaderData } from "react-router-dom";





const JobDetails = () => {

  const { specificData } = useLoaderData();

  
    
    const {
        job_id,
        
        // title,
        // company_name,
        // location,
        // job_type,
        // salary,
        // job_description,
        // job_responsibilities,
        // educational_requirements,
        // experience_requirements,
        // phone,
        // email,
        // remote_or_onsite
    } = specificData;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <div className="card-body">
          <h2 className="text-3xl">Syed Md Rahat Ul Anwar {job_id}</h2>
           </div>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button> 
          </div>
        </div>
      </div>
    );
};

export default JobDetails;