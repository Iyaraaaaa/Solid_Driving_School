import React from 'react';
import drivingIcon from './Assets/drive.png'; // Ensure this path is correct

const SpecialLicenseInfo = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.mainHeading}>Obtaining a New Driving License for Special Occasion Applicants</h1>
      <div style={styles.imageContainer}>
        <img src={drivingIcon} alt="Driving License" style={styles.image} />
      </div>
      <p>
        Obtaining a new driver’s license for applicants with special needs and
        conversions to be made in the new car when a driver’s license holder
        becomes in that situation.
      </p>

      <div style={styles.section}>
        <h2 style={styles.subHeading}>Visual Impairment Considerations</h2>
        <ul style={styles.list}>
          <li>Driving license is given for motor cars only.</li>
          <li>The vehicle should be registered in the name of the concerned person.</li>
          <li>
            Two side mirrors should be installed on the front two sides of the motor
            car so that it can be observed with one’s own eye (without turning the head).
          </li>
          <li>
            The vehicle should be submitted to Werahera Vehicle Inspection Division and
            the relevant report should be obtained.
          </li>
          <li>
            Submit the vehicle inspection report and the medical report to the Chief Motor
            Vehicle Inspector, Werahera and obtain the relevant recommendation.
          </li>
          <li>
            Present the vehicle registration certificate, medical report, national identity card,
            and original copy of the birth certificate to Hall H of Verahera Premises for registration.
          </li>
          <li>No additional installation or changes from the original model should be made.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subHeading}>Considerations for Foot Injury</h2>
        <ul style={styles.list}>
          <li>Driving license is issued based on the vehicle modifications.</li>
          <li>The vehicle should be adapted with a hand-operated system if required.</li>
          <li>
            Submit the medical report confirming the loss of the right foot to the Chief Motor
            Vehicle Inspector.
          </li>
          <li>
            Ensure the vehicle inspection and registration comply with special needs requirements.
          </li>
        </ul>
      </div>
    </div>
  );
};

// Define your styles
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1200px', // Adjust as needed for consistency
    margin: '0 auto',
    backgroundColor: '#f9f9f9', // Light background for a professional look
    borderRadius: '8px', // Rounded corners for a modern touch
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  },
  mainHeading: {
    fontSize: '28px', // Increase main heading size
    textAlign: 'center', // Center align the main heading
    marginBottom: '20px',
  },
  subHeading: {
    fontSize: '22px', // Increase subheading size
    marginBottom: '10px',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center', // Center the image horizontally
    marginBottom: '20px',
  },
  image: {
    maxWidth: '100%', // Ensures the image fits within its container
    height: 'auto',
    borderRadius: '8px', // Matching rounded corners for images
  },
  section: {
    marginBottom: '30px',
  },
  list: {
    lineHeight: '1.6', // Improve readability
    paddingLeft: '20px', // Indent list items
  },
};

export default SpecialLicenseInfo;
