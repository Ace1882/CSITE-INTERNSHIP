import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginPage.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import csiteLogo from '../Assets/CSITE logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import FontAwesomeIcon
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';  // Import eye icons

function LoginPage() {
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate
  
  const handleLogin = (event) => {
    event.preventDefault();
    // Simulate a login and redirect to the dashboard
    console.log("Logging in with:", { username, password }); // Log username and password
    // Add your login logic here
    navigate('/dashboard'); // Redirect to Dashboard route
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className='Background'> 
      <div className="login_container">
        <div className="card p-4 shadow" style={{ width: '400px' }}>
          <div className="text-center">
            <img src={csiteLogo} alt="University Logo" className="mb-3" style={{ width: '150px' }} />
          </div>
          <h3 className="text-center mb-4">CSITE Portal</h3>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Username" 
                value={username} // Controlled input
                onChange={(e) => setUsername(e.target.value)} // Update state on change
                required 
              />
            </div>
            <div className="mb-3 input-group">
              <input
                type={passwordVisible ? "text" : "password"}  // Toggle between text and password
                className="form-control"
                placeholder="Password"
                value={password} // Controlled input
                onChange={(e) => setPassword(e.target.value)} // Update state on change
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={togglePasswordVisibility}  // Click to toggle visibility
              >
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </button>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="mt-3 text-center">
            <a href="/" className="text-muted">Forgot your Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
