import React, { useState } from 'react';
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Components/Header/Header'; // Import the Header component
import Footer from '../../Components/Footer/Footer'; // Import the Footer component
import StudentProfile from '../../Pages/Student Form/StudentProfile'; // Import the StudentProfile component

// Sample student data with ID added
const initialStudents = [
  { id: 1, name: 'Michael Brown', course: 'Computer Science', org: 'Amazon', contract: 'Pending', status: 'Inactive', remarks: 'Needs Improvement', contact: 'michael@example.com', profilePicture: '', },
  { id: 2, name: 'Emily Davis', course: 'IT', org: 'Facebook', contract: 'Signed', status: 'Active', remarks: 'Good', contact: 'emily@example.com' },
  { id: 3, name: 'Amy Johnson', course: 'Data Science', org: 'Intel', contract: 'Completed', status: 'Active', remarks: 'Excellent', contact: 'amy@example.com' },
  { id: 4, name: 'Chris Lee', course: 'Design', org: 'Adobe', contract: 'Signed', status: 'Active', remarks: 'Good', contact: 'chris@example.com' },
  { id: 5, name: 'Patricia Miller', course: 'Data Science', org: 'Oracle', contract: 'Pending', status: 'Inactive', remarks: 'Needs Improvement', contact: 'patricia@example.com' },
  { id: 6, name: 'Robert Martinez', course: 'Engineering', org: 'Tesla', contract: 'Signed', status: 'Active', remarks: 'Good', contact: 'robert@example.com' },
  { id: 7, name: 'Linda Rodriguez', course: 'Computer Science', org: 'Apple', contract: 'Completed', status: 'Active', remarks: 'Excellent', contact: 'linda@example.com' },
  { id: 8, name: 'Daniel Johnson', course: 'Biology', org: 'Netflix', contract: 'Pending', status: 'Inactive', remarks: 'Needs Improvement', contact: 'daniel@example.com' },
  { id: 9, name: 'Laura White', course: 'Chemistry', org: 'Spotify', contract: 'Signed', status: 'Active', remarks: 'Good', contact: 'laura@example.com' },
  { id: 10, name: 'Kevin Brown', course: 'Physics', org: 'Salesforce', contract: 'Completed', status: 'Active', remarks: 'Excellent', contact: 'kevin@example.com' },
  { id: 11, name: 'Susan Davis', course: 'Biology', org: 'Dropbox', contract: 'Signed', status: 'Active', remarks: 'Average', contact: 'susan@example.com' },
];


const Dashboard = () => {
  const [students, setStudents] = useState(initialStudents);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleViewStudent = (student) => {
    setSelectedStudent(student);
  };

  const handleBackToDashboard = () => {
    setSelectedStudent(null);
  };

  const handleUpdateStudent = (updatedStudent) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
    setSelectedStudent(updatedStudent);
  };

  return (
    <div className="dashboard-container">
      <div className="overlay"></div> {/* Overlay background */}
      <Header /> {/* Render the Header */}

      {selectedStudent ? (
        <StudentProfile student={selectedStudent} onBack={handleBackToDashboard} onUpdateStudent={handleUpdateStudent} />
      ) : (
        <StudentListTable onViewStudent={handleViewStudent} students={students} />
      )}

      <Footer /> {/* Render the Footer */}
    </div>
  );
};


const StudentListTable = ({ onViewStudent, students }) => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredStudents = students
    .filter(student => {
      if (filter === 'all') return true;
      return student.contract.toLowerCase() === filter.toLowerCase();
    })
    .filter(student => student.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="student-list container my-5">
      <div className='container-1'>
      <h2 className="my-4">INTERNSHIP DASHBOARD</h2>
      <h4>Students List</h4>
      <div className="d-flex justify-content-between mb-3">
        <div className="filter-box">
          <label htmlFor="filter" className="form-label">Filter</label>
          <select className="form-select" id="filter" value={filter} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="signed">Signed</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        <div className="search-box">
          <label htmlFor="search" className="form-label"></label>
          <input
            type="text"
            className="form-control"
            id="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <table className="table table-striped table-bordered">
        <thead className="table-primary">
          <tr>
            <th>ID</th> {/* ID Column */}
            <th>Name</th>
            <th>Org</th> {/* Organization Column */}
            <th>Status</th> {/* Status Column */}
            <th>Actions</th> {/* Actions Column */}
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <tr key={student.id}> {/* Use ID as key */}
                <td>{student.id}</td> {/* Display the ID */}
                <td>{student.name}</td> {/* Display the name */}
                <td>{student.org}</td> {/* Display the organization */}
                <td>{student.status}</td> {/* Display the status */}
                <td>
                  <button className="btn btn-danger btn-sm me-2" onClick={() => onViewStudent(student)}>Edit</button>
                  <button className="btn btn-primary btn-sm" onClick={() => onViewStudent(student)}>View</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">No students found</td> {/* Adjust colspan for the new table structure */}
            </tr>
          )}
        </tbody>
      </table>
     </div>
    </div>
  );
};

export default Dashboard;