import React, { useState } from 'react';
import './Page.css';

// This component handles the Application Form, allowing users to input student and organization details.
const ApplicationForm = ({ onGenerateLink }) => {
  
  // Using the useState hook to manage form data, initially all fields are set to empty strings.
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    studentCourse: '',
    studentEmail: '',
    contactNo: '',
    studentId: '',
    organizationName: '',
  });

  // This function handles the input changes for each field.
  // It updates the formData state by spreading the previous data and overwriting the specific field.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className='BG-1'>
    <div className="border p-4"> {/* Container for the form with a border and padding */}
      <h4 className='Text-1' >Application Form Template</h4> {/* Heading for the form */}

      {/* First row of inputs: First Name, Middle Name, Last Name */}
      <div className="row">
        <div className="col-md-4">
          <label className= "custom-label">First Name </label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-4">
          <label className= "custom-label">Middle Name</label>
          <input
            type="text"
            name="middleName"
            className="form-control"
            value={formData.middleName}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-4">
          <label className= "custom-label">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Second row of inputs: Student Course and Student Email */}
      <div className="row mt-3">
        <div className="col-md-6">
          <label className= "custom-label">Student Course</label>
          <input
            type="text"
            name="studentCourse"
            className="form-control"
            value={formData.studentCourse}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label className= "custom-label">Student Email</label>
          <input
            type="email"
            name="studentEmail"
            className="form-control"
            value={formData.studentEmail}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Third row of inputs: Contact No and Student ID */}
      <div className="row mt-3">
        <div className="col-md-6">
          <label className= "custom-label">Contact No</label>
          <input
            type="text"
            name="contactNo"
            className="form-control"
            value={formData.contactNo}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label className= "custom-label">Student ID</label>
          <input
            type="text"
            name="studentId"
            className="form-control"
            value={formData.studentId}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Fourth row of inputs: Organization Name */}
      <div className="row mt-3">
        <div className="col-md-12">
          <label className= "custom-label">Organization Name</label>
          <input
            type="text"
            name="organizationName"
            className="form-control"
            value={formData.organizationName}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Button to generate the link based on form data */}
      <div className="mt-4">
        <button
          className="btn btn-success"
          onClick={() => onGenerateLink(formData)} // Calls the parent function to generate a link with form data
        >
          Generate Link
        </button>
      </div>
    </div>
  </div>
  );
};

export default ApplicationForm;
