import React from 'react';
import './Page.css';

const JournalSubmissionForm = () => {
  return (
  <div className='BG-1'>
    <div className="border p-4">
      <h4 className='Text-1'>Journal Submission Form Template</h4>
      <div className="row">
        <div className="col-md-4">
          <label className= "custom-label">First Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-4">
          <label className= "custom-label">Middle Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-4">
          <label className= "custom-label">Last Name</label>
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <label className= "custom-label">Student ID Number</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className= "custom-label">Journal File Submission</label>
          <input type="file" className="form-control" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default JournalSubmissionForm;
