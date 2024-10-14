import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Optional: Create a CSS file for custom styles

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3 bg-dark text-white">
        © {new Date().getFullYear()} CSITE Internship. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
