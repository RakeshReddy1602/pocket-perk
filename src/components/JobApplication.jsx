import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/JobApplication.css';

function JobApplication() {
  const { jobId } = useParams();

  return (
    <div className="container">
      <h2>Apply for Job {jobId}</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message"></textarea>
        </div>
        <div className="form-group">
          <input type="submit" value="Apply" />
        </div>
      </form>
    </div>
  );
}

export default JobApplication;
