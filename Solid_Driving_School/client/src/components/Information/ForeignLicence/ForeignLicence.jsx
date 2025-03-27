import React from 'react';
import foreignLicenseImage from './Assets/drive.webp'; // Replace with your image path

const ForeignLicence = () => {
  return (
    <div style={styles.container}>
      
      {/* Top Image */}
      <div style={styles.imageContainer}>
        <img src={foreignLicenseImage} alt="Foreign License Conversion" style={styles.image} />
      </div>

      {/* Heading */}
      <h1 style={styles.heading}>
        Converting Foreign Driver's License
      </h1>

      {/* Conversion Process */}
      <section style={styles.section}>
        <p style={styles.intro}>
          To convert your foreign driver's license to a local one, follow these steps:
        </p>
        <ul style={styles.list}>
          <li>Contact the local licensing authority or visit their official website for detailed requirements.</li>
          <li>Complete the application form for foreign license conversion.</li>
          <li>Submit your foreign driver's license and a certified translation if necessary.</li>
          <li>Provide valid identification documents, such as a passport or ID card.</li>
          <li>Pay the required conversion fee and any additional charges.</li>
          <li>Attend a driving test if required, based on local regulations.</li>
          <li>Receive your local driver's license once the conversion process is complete.</li>
        </ul>
      </section>

      {/* Required Documents */}
      <section style={styles.section}>
        <h3 style={styles.subheading}>
          Documents Required for Conversion
        </h3>
        <ul style={styles.list}>
          <li>Original foreign driver's license</li>
          <li>Certified translation of the foreign license (if applicable)</li>
          <li>Valid identification document (e.g., passport, national ID card)</li>
          <li>Proof of residency (e.g., utility bill, lease agreement)</li>
          <li>Proof of legal status in the country (e.g., visa, residency permit)</li>
          <li>Payment receipt for the conversion fee</li>
        </ul>
      </section>

      {/* Additional Notes */}
      <section>
        <h3 style={styles.subheading}>
          Additional Notes
        </h3>
        <p style={styles.notes}>
          The requirements for converting a foreign license may vary depending on your country of residence. Ensure all documents are current and in good condition before submission. Contact the local licensing authority for the most accurate and up-to-date information regarding the process.
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

export default ForeignLicence;
