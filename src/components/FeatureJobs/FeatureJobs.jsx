import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJobs = () => {
    const [jobs,setJobs] =useState([]);
    useEffect(()=>{
           fetch('jobs.json')
           .then(res=>res.json())
           .then(data=>setJobs(data))
    },[])
    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl">Feature Jobs:{jobs.length}</h2>
                <p>Explore Thousends of Job opportunities with all the information need. Its your feature  </p>
            </div>
            <div>
                {
                    jobs.map(job=> <Job job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeatureJobs;