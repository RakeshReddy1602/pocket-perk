import React from 'react';
// import jobs from '../data/jobs';
import '../css/JobList.css'

function JobList() {
  return (
    <div className="container">
      <h2>Available Jobs</h2>
      {/* <ul className="job-list">
        {jobs.map(job => (
          <li key={job.id} className="job-item">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>Stall: {job.stall}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default JobList;
