import React from 'react';
import revenueImage from './Assets/drive.png'; // Replace with your image path

const RevenuLicence = () => {
  return (
    <div className="revenue-license-container" style={styles.container}>
      
      {/* Top Image */}
      <div style={styles.imageContainer}>
        <img src={revenueImage} alt="Revenue License" style={styles.image} />
      </div>

      {/* Topic */}
      <h1 style={styles.heading}>
        Obtaining a Revenue License
      </h1>

      {/* Subtitle */}
      <h3 style={styles.subheading}>
        Issuing Revenue License
      </h3>
      
      {/* Content Sections */}
      <section style={styles.section}>
        <p style={styles.paragraph}>
          The revenue license is valid for one year and must be renewed annually for all vehicles.
        </p>
      </section>
      
      <section style={styles.section}>
        <h3 style={styles.subheading}>
          Documents Required for Renewal
        </h3>
        <ul style={styles.list}>
          <li>Copy of the vehicle registration document certified by the Commissioner of Motor Traffic or the relevant financial institution (e.g., Leasing Company)</li>
          <li>Previous year’s revenue license</li>
          <li>Valid insurance certificate for the coming year</li>
          <li>Passenger service permit (for buses or passenger vehicles)</li>
          <li>Echo Test (Not applicable for hybrid and electric vehicles)</li>
        </ul>
      </section>
      
      <section>
        <h3 style={styles.subheading}>
          Available Online
        </h3>
        <p style={styles.paragraph}>
          The revenue license can be obtained online. Visit the link below to check eligibility. You can obtain a revenue license for cars, motorcycles, dual-purpose vehicles, or three-wheelers through this service. For other vehicles, inquire at the Divisional Secretariat.
        </p>
        <p style={styles.paragraph}>
          A valid insurance certificate and vehicle emission certificate (not applicable for hybrid and electric vehicles) issued by a reputable insurance company are required for online processing.
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
  subheading: {
    color: '#333',
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'center',
  },
  section: {
    marginBottom: '20px',
  },
  paragraph: {
    lineHeight: '1.6',
    color: '#666',
    textAlign: 'center',
  },
  list: {
    lineHeight: '1.6',
    color: '#666',
    paddingLeft: '20px',
  },
};

export default RevenuLicence;
