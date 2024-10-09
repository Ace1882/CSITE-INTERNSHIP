import React from 'react';
import './Page.css';

const EvaluationForm = () => {
  return (
  <div className='BG-1'>
    <div className="border p-4">
      <h4 className='Text-1'>Evaluation Form Template</h4>
      <div className="row">
        <div className="col-md-6">
          <label className= "custom-label">Category 1</label>
          <div className="form-group">
            <label className= "custom-label">Question 1</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label className= "custom-label">Question 2</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label className= "custom-label">Scoring System (Scale from 1-10)</label>
            <input type="number" className="form-control" />
          </div>
        </div>
        <div className="col-md-6">
          <label className= "custom-label">Category 2</label>
          <div className="form-group">
            <label className= "custom-label">Question 1</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label className= "custom-label">Open-Ended Essay</label>
            <textarea className="form-control"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div> 
  );
};

export default EvaluationForm;
