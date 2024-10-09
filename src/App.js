import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Importing routing components from React Router
import React from 'react'; // Importing React
import LoginPage from './Components/Login/LoginPage'; // Importing the LoginPage component
import Dashboard from './Pages/Dashboard/Dashboard'; // Importing the Dashboard component
import FormGenerator from './Pages/Form Generator/FormGenerator'; // Importing the FormGenerator component
import { formSchema } from './Pages/Form Generator/formSchema'; // Importing the form schema for form validation

const App = () => {
  return (
    <BrowserRouter> {/* Wrapping the application in BrowserRouter for routing */}
      <Routes> {/* Defining the routes for the application */}
        <Route path="/" element={<LoginPage />} /> {/* Route for the login page */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Route for the dashboard */}
        <Route /> {/* submission page */}
        <Route path="/form-generator" element={<FormGenerator schema={formSchema} />} /> {/* Route for the form generator page, passing the form schema */}
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirecting any unknown paths to the login page */}
      </Routes>
    </BrowserRouter>
  );
};

export default App; 
