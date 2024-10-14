import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApplicationForm from './FormSubPages/ApplicationForm';
import JournalSubmissionForm from './FormSubPages/JournalSubmissionForm';
import EvaluationForm from './FormSubPages/EvaluationForm';
import Header from '../../Components/Header/Header'; // Import the Header component
import Footer from '../../Components/Footer/Footer'; // Import the Footer component
import './FormGenerator.css'; // Optional: For custom styling including the overlay

const FormGeneratorContent = () => {
  const [activeForm, setActiveForm] = useState('ApplicationForm');
  const [generatedLink, setGeneratedLink] = useState(''); // Blank by default
  
  const exampleLink = ''; // Example link

  const handleGenerateLink = (formData) => {
    const hasValues = Object.values(formData).some(value => value !== '');
    if (hasValues) {
      const baseUrl = "https://example.com/form?";
      const queryParams = new URLSearchParams(formData).toString();
      const link = `${baseUrl}${queryParams}`;
      setGeneratedLink(link);
    } else {
      setGeneratedLink(''); // Keep blank if form is not filled out
    }
  };

  return (
    <div className='Form-container'>
      <div className="container my-5">
        <h2>Form Maker</h2>
        <div className="form-options d-flex justify-content-around my-4">
          <button 
            className={`btn ${activeForm === 'ApplicationForm' ? 'btn-primary' : 'btn-outline-primary'}`} 
            onClick={() => setActiveForm('ApplicationForm')}
          >
            Application Form
          </button>
          <button 
            className={`btn ${activeForm === 'JournalSubmissionForm' ? 'btn-primary' : 'btn-outline-primary'}`} 
            onClick={() => setActiveForm('JournalSubmissionForm')}
          >
            Journal Submission Form
          </button>
          <button 
            className={`btn ${activeForm === 'EvaluationForm' ? 'btn-primary' : 'btn-outline-primary'}`} 
            onClick={() => setActiveForm('EvaluationForm')}
          >
            Evaluation Form
          </button>
        </div>

        <div className="form-template">
          {activeForm === 'ApplicationForm' && <ApplicationForm onGenerateLink={handleGenerateLink} />}
          {activeForm === 'JournalSubmissionForm' && <JournalSubmissionForm onGenerateLink={handleGenerateLink} />}
          {activeForm === 'EvaluationForm' && <EvaluationForm onGenerateLink={handleGenerateLink} />}
        </div>

        <div className="mt-4">
          <label>Generated Link</label>
          <div className="input-group">
            <input 
              type="text" 
              className="form-control" 
              value={generatedLink || ''} 
              placeholder={generatedLink ? '' : exampleLink} // Placeholder shows example only when no link is generated
              readOnly 
            />
            <button 
              className="btn btn-outline-secondary" 
              onClick={() => navigator.clipboard.writeText(generatedLink || exampleLink)}
            >
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormGenerator = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-custom">
      <div className="overlay"></div> {/* Add the overlay here */}
      <Header /> {/* Render the Header */}
      <main className="flex-grow-1"> {/* Main content takes up available space */}
        <FormGeneratorContent />
      </main>
      <Footer /> {/* Add the Footer here */}
    </div>
  );
};

export default FormGenerator;
