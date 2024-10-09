import React, { useState } from 'react';
import './StudentProfile.css'; // Assuming you have styles for this component
import { ProgressBar } from 'react-bootstrap'; // Import ProgressBar from Bootstrap

const StudentProfile = ({ student, onBack, onUpdateStudent }) => {
  // Initialize state for the edit form
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...student }); // Set initial form data

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateStudent(formData); // Call the update function from the dashboard
    setIsEditing(false); // Close the edit form
  };

  // Example submission logs and grading data
  const submissionLogs = [
    { file: `${student.name}_wk1`, date: 'October 1, 2024', status: 'Turned In' },
    { file: `${student.name}_wk2`, date: 'October 8, 2024', status: 'Incomplete' },
    { file: `${student.name}_wk3`, date: 'October 15, 2024', status: 'Turned In' },
    { file: `${student.name}_wk4`, date: 'October 22, 2024', status: 'Turned In' },
  ];

  const gradingCriteria = [
    { criteria: 'Assignments', score: 80 },
    { criteria: 'Quizzes', score: 90 },
    { criteria: 'Final Exam', score: 85 },
  ];

  return (
    <div className="student-profile container my-5">
      <h2>Student's Profile</h2>
      <div className="profile-header d-flex justify-content-between align-items-center my-3">
        <div className="d-flex align-items-center">
          {/* Profile Picture */}
          <img
            src={student.profilePicture || 'placeholder.jpg'} // Replace with your default image path
            alt={`${student.name}'s Profile`}
            className="profile-picture me-3"
            style={{ width: '100px', height: '100px', borderRadius: '50%' }} // Add your desired styles
          />
          <div>
            <h5>{student.name}</h5>
            <p>ID: {student.id}</p>
            <p>Course: {student.course}</p>
            <p>Organization: {student.org}</p> {/* Added organization */}
            <p>Status: {student.status}</p> {/* Added status */}
            <p>Remarks: {student.remarks}</p> {/* Added remarks */}
            <p>Contact: {student.contact}</p>
          </div>
        </div>
        <button className="btn btn-primary" onClick={onBack}>Back</button>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <h4>Edit Student Information</h4>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="course" className="form-label">Course</label>
            <input
              type="text"
              id="course"
              name="course"
              className="form-control"
              value={formData.course}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">Contact</label>
            <input
              type="text"
              id="contact"
              name="contact"
              className="form-control"
              value={formData.contact}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-success">Save</button>
          <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <h4>Student's Progress</h4>
          <ProgressBar now={student.progress} label={`${student.progress}%`} className="mb-3" />

          {/* Combined Container for Submission Logs and Grading */}
          <div className="submission-log-grading" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <div className="submission-logs" style={{ flex: 1, marginRight: '10px' }}>
              <h5>Submission Logs</h5>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>File Name</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {submissionLogs.map((log, index) => (
                    <tr key={index}>
                      <td>{log.file}</td>
                      <td>{log.date}</td>
                      <td>{log.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grading" style={{ flex: 1, marginLeft: '10px' }}>
              <h5>Grading</h5>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Criteria</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {gradingCriteria.map((grade, index) => (
                    <tr key={index}>
                      <td>{grade.criteria}</td>
                      <td>{grade.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <button className="btn btn-warning mt-3" onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default StudentProfile;
