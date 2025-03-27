import React from 'react';
import conversionImage from './Assets/Drivin.jpg'; // Replace with your image path

const OldLicence = () => {
  return (
    <div style={styles.container}>
      
      {/* Top Image */}
      <div style={styles.imageContainer}>
        <img src={conversionImage} alt="License Conversion" style={styles.image} />
      </div>

      {/* Heading */}
      <h1 style={styles.heading}>
        Converting Old License to New License
      </h1>

      {/* Conversion Process */}
      <section style={styles.section}>
        <p style={styles.intro}>
          Follow these steps to convert your old vehicle license to a new one:
        </p>
        <ul style={styles.list}>
          <li>Visit your local licensing authority or their official website.</li>
          <li>Submit an application form for license conversion.</li>
          <li>Provide your old license and any necessary identification documents.</li>
          <li>Pay the required conversion fee.</li>
          <li>Complete any additional paperwork or requirements as instructed.</li>
          <li>Receive your new license upon approval and processing.</li>
        </ul>
      </section>

      {/* Required Documents */}
      <section style={styles.section}>
        <h3 style={styles.subheading}>
          Documents Required for Conversion
        </h3>
        <ul style={styles.list}>
          <li>Original old vehicle license</li>
          <li>Valid identification document (e.g., passport, ID card)</li>
          <li>Proof of address (e.g., utility bill, lease agreement)</li>
          <li>Vehicle registration documents</li>
          <li>Payment receipt for the conversion fee</li>
        </ul>
      </section>

      {/* Additional Notes */}
      <section>
        <h3 style={styles.subheading}>
          Additional Notes
        </h3>
        <p style={styles.notes}>
          Ensure that all documents are up to date and in good condition before submission. If you have any questions or need assistance, contact your local licensing authority for support.
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  imageContainer: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  image: {
    width: '150px',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  },
  heading: {
    color: '#1a73e8',
    textAlign: 'center',
    marginBottom: '10px',
    fontSize: '28px',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: '20px',
  },
  intro: {
    lineHeight: '1.6',
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: '20px',
  },
  list: {
    lineHeight: '1.8',
    color: '#666',
    paddingLeft: '20px',
    listStyleType: 'disc',
  },
  subheading: {
    color: '#333',
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  notes: {
    lineHeight: '1.6',
    color: '#666',
  },
};

export default OldLicence;
