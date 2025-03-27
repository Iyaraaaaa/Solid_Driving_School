import React from 'react';
import highwayImage from './Assets/drive.png'; // Replace with your image path

const HighwayOffenses = () => {
  return (
    <div style={styles.container}>
      
      {/* Top Image */}
      <div style={styles.imageContainer}>
        <img src={highwayImage} alt="Highway Offenses" style={styles.image} />
      </div>

      {/* Heading */}
      <h1 style={styles.heading}>
        Highway Offenses and Fines
      </h1>

      {/* Content Section */}
      <section>
        <p style={styles.intro}>
          Fines may be imposed for the following road offenses:
        </p>
        <ul style={styles.list}>
          <li>Failure to carry a driver’s license while driving</li>
          <li>Disobedience to traffic rules</li>
          <li>Not using seat belts</li>
          <li>Failure to display or submit the revenue license when required</li>
          <li>Not keeping the Emission Certificate or Certificate of Fitness in the vehicle</li>
          <li>Lack of identification plates</li>
          <li>Not wearing safety helmets while driving</li>
          <li>Violation of Revenue License provisions</li>
          <li>Passing through when the red light at a train crossing is on</li>
          <li>Excessive emissions of smoke</li>
          <li>Driving too close to the vehicle in front</li>
          <li>Excessive noise from a motor vehicle</li>
          <li>Disobedience to police orders and directions</li>
          <li>Parking or stopping on a road</li>
          <li>Lack of proper approval while driving emergency or public service vehicles</li>
          <li>Driving a special purpose vehicle without a license</li>
          <li>Failure to obtain approval for vehicles loaded with chemicals, hazardous waste, etc.</li>
          <li>Consulting activities without a consulting license</li>
          <li>Driving out of control of the vehicle</li>
          <li>Misuse of alarm equipment</li>
          <li>Allowing or moving a motor vehicle pavement</li>
          <li>Exceeding the number of passengers allowed in the front seats</li>
          <li>Distribution of advertisements from a moving vehicle</li>
          <li>Failure to take precautionary measures when a vehicle is parked or becomes inactive</li>
          <li>Exceeding allowable luggage or passenger limits in vehicles</li>
          <li>Carrying goods exceeding maximum weight limits in lorries, tricycles, or vans</li>
          <li>Exceeding approved passenger limits in lorries</li>
          <li>Violation of the Terms</li>
        </ul>
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
  },
};

export default HighwayOffenses;
