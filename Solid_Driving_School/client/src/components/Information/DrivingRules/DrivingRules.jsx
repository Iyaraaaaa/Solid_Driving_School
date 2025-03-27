import React from 'react';
import drivingRulesImg from './Assets/drive.png'; 

const DrivingRules = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      {/* Centered Image at the Top */}
      <img
        src={drivingRulesImg}
        alt="Driving Rules Icon"
        style={{ width: '100px', height: 'auto', margin: '0 auto 20px', display: 'block' }} 
    />

      
        <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '20px' }}>Important Driving Rules</h1>

      
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <ol style={{ lineHeight: '1.8', marginLeft: '20px' }}>
          <li>
            <strong>Driving Position:</strong>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
              <li>Drive on the left side of the road.</li>
              <li>When making a right turn or overtaking, use the middle or right side of the road.</li>
              <li>On roads with three or more lanes, the leftmost lanes are for left turns or slower traffic.</li>
            </ul>
          </li>
          <li>
            <strong>Yielding and Overtaking:</strong>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
              <li>Yield to vehicles requesting to pass.</li>
              <li>Overtake only if the road ahead is clear and unobstructed.</li>
              <li>Overtake other vehicles on the right side, unless dealing with non-motor vehicles or animals, which should be overtaken from the side.</li>
            </ul>
          </li>
          <li>
            <strong>Avoiding Obstruction:</strong>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
              <li>Do not block oncoming vehicles.</li>
              <li>Avoid obstructing traffic on highways with unnecessary turns or movements.</li>
              <li>Do not block vehicles on the main road when entering or exiting side roads.</li>
            </ul>
          </li>
          <li>
            <strong>Intersections and Priorities:</strong>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
              <li>Do not block traffic when entering a side road from a highway.</li>
              <li>At intersections from narrow to main roads, give priority to main road traffic and enter without blocking.</li>
              <li>At intersections where highways connect, yield to vehicles coming from the right unless directed otherwise by traffic lights or police.</li>
            </ul>
          </li>
          <li>
            <strong>Traffic Flow:</strong>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
              <li>Drive slowly and safely when traveling in opposite directions on narrow roads.</li>
              <li>Keep to the left side of the road at intersections.</li>
              <li>When turning, use the center of the curve and, in roundabouts, turn right while staying on the left side of the circle.</li>
            </ul>
          </li>
          <li>
            <strong>Stop Lines:</strong>
            <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
              <li>Stop at the stop line at intersections before entering the road.</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default DrivingRules;
