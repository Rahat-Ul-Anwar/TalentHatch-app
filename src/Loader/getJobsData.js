export const getJobsData = async (job_id) => {
    
    const data = await fetch('jobDetails.json');
    const jobsData = await data.json();

   

    const specificData = jobsData.find(job => job.job_id === job_id);
    console.log(specificData)

    return {jobsData, specificData};

}