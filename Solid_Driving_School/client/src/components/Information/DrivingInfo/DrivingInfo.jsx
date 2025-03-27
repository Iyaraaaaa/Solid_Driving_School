import React from 'react';
import drivingIcon from './Assets/drive.png'; // Ensure the correct path to your image file

const DrivingInfo = () => {
  return (
    <div style={styles.container}>
      <img src={drivingIcon} alt="Driving Icon" style={styles.image} />
      <h1 style={styles.heading}>Things That Are Very Important When Driving</h1>

      <h2 style={styles.subheading}>Things to Complete Before Starting a Vehicle on the Road</h2>
      <ul style={styles.list}>
        <li>The driver must be in good physical and mental health.</li>
        <li>The driver should not take any narcotics or other drugs that may affect the mind or body.</li>
        <li>Do not drive if the driver is tired, drowsy, or has other physical discomfort.</li>
        <li>The vehicle must be in good working order.</li>
        <li>The driver should check that the brakes, tires, horns, headlights, and signal lights are working properly.</li>
        <li>The driver must have a valid driver’s license for the vehicle class.</li>
        <li>The vehicle must have a valid insurance certificate, revenue license, and emission certificate.</li>
        <li>Vehicle seat belts must be present and must be worn.</li>
      </ul>

      <h2 style={styles.subheading}>Vehicle Type Speed Limits:</h2>
      <table style={styles.table}>
        <thead>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>Vehicle Type</th>
            <th style={styles.tableHeader}>Urban Areas</th>
            <th style={styles.tableHeader}>Non-Urban Areas</th>
            <th style={styles.tableHeader}>On Highways</th>
          </tr>
        </thead>
        <tbody>
          <tr style={styles.tableRow}>
            <td style={styles.tableData}>Cars, Dual Purpose Cars, Motorcycles</td>
            <td style={styles.tableData}>50 Km/h</td>
            <td style={styles.tableData}>70 Km/h</td>
            <td style={styles.tableData}>100 Km/h</td>
          </tr>
          <tr style={styles.tableRow}>
            <td style={styles.tableData}>Lorries, Buses</td>
            <td style={styles.tableData}>50 Km/h</td>
            <td style={styles.tableData}>70 Km/h</td>
            <td style={styles.tableData}>100 Km/h</td>
          </tr>
          <tr style={styles.tableRow}>
            <td style={styles.tableData}>Three Wheelers, Agricultural, Land Vehicles</td>
            <td style={styles.tableData}>40 Km/h</td>
            <td style={styles.tableData}>40 Km/h</td>
            <td style={styles.tableData}>60 Km/h (When Raining or Wet Road)</td>
          </tr>
        </tbody>
      </table>

      <h2 style={styles.subheading}>Circular Law:</h2>
      <p style={styles.paragraph}>
        Priority will be given to the first vehicle to enter the roundabout without any traffic lights or police control.
        When more than one lane approaches the roundabout, the vehicle on the right always takes precedence.
      </p>

      <h2 style={styles.subheading}>Parking on the Side of the Road:</h2>
      <p style={styles.paragraph}>
        Parking is prohibited in areas specified in the ‘Parking Restrictions’ section, including lanes, pedestrian crossings, and bus stops.
      </p>

      <h2 style={styles.subheading}>Passing the Vehicle in Front:</h2>
      <p style={styles.paragraph}>
        First, ensure the lane is clear for the vehicle in front to overtake. Second, make sure there are no obstructions from vehicles behind the windshield.
      </p>

      <h2 style={styles.subheading}>Reversing:</h2>
      <p style={styles.paragraph}>
        Avoid reversing when the rear is not clear. Reversing on the main road is not legal.
      </p>

      <h2 style={styles.subheading}>In the Event of an Accident:</h2>
      <p style={styles.paragraph}>
        Do not park in the middle of the road, as this obstructs other vehicles. Mark the vehicles involved in the accident and pull over to the side of the road immediately.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  image: {
    display: 'block',
    margin: '20px auto',
    width: '150px', // Adjusted size as needed
    height: 'auto',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#333', // Darker color for better readability
  },
  subheading: {
    fontSize: '22px',
    marginTop: '20px',
    marginBottom: '10px',
    color: '#333', // Darker color for better readability
  },
  list: {
    lineHeight: '1.8',
    marginLeft: '20px',
    color: '#333', // Darker color for better readability
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
  tableHeader: {
    padding: '10px',
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
    color: '#333', // Darker color for better readability
  },
  tableData: {
    padding: '10px',
    textAlign: 'center',
    color: '#333', // Darker color for better readability
  },
  paragraph: {
    lineHeight: '1.6',
    marginTop: '10px',
    color: '#333', // Darker color for better readability
  },
};

export default DrivingInfo;
