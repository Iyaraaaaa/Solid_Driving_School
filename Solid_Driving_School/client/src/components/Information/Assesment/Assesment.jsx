import React from 'react';

const Assesment = () => {
  return (
    <div style={styles.container}>
      <div style={styles.icon} aria-label="Car Icon">🚗</div> {/* Display the icon */}
      <h1 style={styles.title}> Driving License Exam Past Paper </h1> {/* Display the title */}
      <p style={styles.description}> Information about government fees for driving licenses.</p> {/* Display the description */}
      <a 
        href="https://govdoc.lk/sri-lanka-driving-license-examination-past-papers#google_vignette" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={styles.link}
      >
        Click here to view the Papers
      </a>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #ece9e6, #ffffff)', // Subtle gradient background
    padding: '20px',
    boxSizing: 'border-box',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // Elegant font
  },
  icon: {
    fontSize: '60px',
    marginBottom: '15px',
    color: '#4A90E2', // Soft blue for a calm look
  },
  title: {
    fontSize: '2.5rem',
    margin: '10px 0',
    color: '#2c3e50', // Darker color for contrast
    fontWeight: '600',
  },
  description: {
    fontSize: '1.2rem',
    margin: '10px 0',
    color: '#7f8c8d', // Muted color for description
    maxWidth: '600px', // Limits the width for readability
  },
  link: {
    fontSize: '1rem',
    color: '#ffffff',
    backgroundColor: '#3498db', // Primary blue color
    textDecoration: 'none',
    marginTop: '20px',
    padding: '10px 20px',
    borderRadius: '25px',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
  },
  linkHover: {
    backgroundColor: '#2980b9',
    transform: 'scale(1.05)',
  },
};

export default Assesment;
