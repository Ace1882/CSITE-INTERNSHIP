import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Import the logout icon
import csiteLogo from '../Assets/CSITE logo.png';
import './Header.css';

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleLogout = () => {
    // Add your logout logic here, e.g., clearing user session
    // localStorage.removeItem('user'); // Example for clearing user data
    navigate('/'); // Redirect to login or home page after logout
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <img src={csiteLogo} alt="CSITE logo" className="logo me-2 img-fluid" style={{ width: '70px' }} /> {/* Responsive logo with fixed width */}
            <span className="brand-name">CSITE OJT</span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={isNavbarOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
            <div className="d-flex flex-grow-1 justify-content-between align-items-center">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/form-generator">Form</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Submission</Link>
                </li>
              </ul>
              {/* Logout Button with Icon */}
              <button className="btn btn-outline-black ms-3 logout-button" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
                Logout {/* Added 'Logout' text for clarity */}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
