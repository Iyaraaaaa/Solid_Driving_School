import React from 'react';
import expresswayImage from './Assets/drive.png';

const Expressway = () => {
  return (
    <div style={styles.container}>
      
      {/* Top Image */}
      <div style={styles.imageContainer}>
        <img src={expresswayImage} alt="Expressway Regulations" style={styles.image} />
      </div>

      {/* Heading */}
      <h1 style={styles.heading}>
        Speed Limits and Regulations on Expressways
      </h1>

      {/* Content Section */}
      <section>
        <p style={styles.intro}>
          Here are some important regulations to follow when driving on expressways:
        </p>
        <ul style={styles.list}>
          <li>Speed limit is 100 km/h for all approved vehicles; reduced to 60 km/h during rain or on wet roads.</li>
          <li>Most expressways in Sri Lanka consist of only two lanes. Always drive in the left lane.</li>
          <li>Do not exceed the speed limit as modern cameras monitor speeds.</li>
          <li>If you need to pass another vehicle, use the right lane, overtake, and return to the left lane.</li>
          <li>Allow other vehicles to overtake you if they are trying to do so.</li>
          <li>Exceeding 100 km/h is illegal and unsafe.</li>
          <li>Do not obstruct other vehicles trying to overtake you; this is dangerous and can lead to fines or legal action.</li>
        </ul>
      </section>
      
      <section>
        <h3 style={styles.subheading}>
          Entering the Highway
        </h3>
        <ul style={styles.list}>
          <li>Charges apply on all expressways. Ensure you have enough money for tickets, which must be purchased at entry and exit points.</li>
          <li>Do not enter the highway if you are tired or drowsy; parking on the roadside is prohibited.</li>
          <li>You are responsible for accidents and damages on the road. In case of an accident, towing services must be paid for.</li>
          <li>Always check your tires before entering the highway.</li>
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
    listStyleType: 'disc',
  },
  subheading: {
    color: '#333',
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
};

export default Expressway;
