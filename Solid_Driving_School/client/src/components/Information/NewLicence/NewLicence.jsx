import React from 'react';

import imgD from './Assets/d.png';
import imgA from './Assets/a.png';
import imgC from './Assets/c.png';
import imgB from './Assets/b.png';

const steps = [
  {
    id: 1,
    title: 'Step 1 :',
    description: 'Book an appointment at the Department of Motor Traffic, Colombo.',
    buttonLabel: 'Apply Now',
    image: imgB,
  },
  {
    id: 2,
    title: 'Step 2 :',
    description: `Registration at Department of Motor Traffic in Werahera. 
    - It is possible to register and sit for the written test if 17 years of age has been completed.
    - The applicant should be present in person.
    - Should take the national identity card or the valid passport with the national identity card number.
    - Should take the Medical certificate obtained from the National Transport Medical Center at Nugegoda. (You can make an appointment by dialing 225)
    - Should take the birth certificate original or a true copy certified by Additional District Registrar.
    - Should take the gramasevaka certificate, if the national identity card change.

    Department of Motor Traffic registration fees:
    1. For 1 Vehicle Class Rs. 3,250/=
    2. For 2 Vehicle Class Rs. 4,750/=
    3. For 3 Vehicle Class Rs. 5,250/=`,
    image: imgD,
  },
  {
    id: 3,
    title: 'Step 3 :',
    description: `Written Test: In the event of passing the written test, a learners’ permit is issued for up to a maximum of 18 months. Holders of such permits can join our driving school and start practicing driving.`,
    image: imgC,
  },
  {
    id: 4,
    title: 'Step 4 :',
    description: `Practical Test: One should complete 18 years of age to face the practical test and a minimum of 3 months should have passed after obtaining the learners’ permit. It is compulsory to face the practical test and pass it to get a driving license.`,
    image: imgA,
  },
];

const NewLicence = () => {
  return (
    <div className='p-5 max-w-[1200px] mx-0 my-auto'style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px', padding: '20px', backgroundColor: '#e8f0fe', borderRadius: '8px' }}>
        <h2 style={{ marginBottom: '10px', fontSize: '32px', fontWeight: 'bold', color: '#2c3e50' }}>
          Process of Obtaining a New Driving License
        </h2>
        <p style={{ marginBottom: '0', fontSize: '24px', fontWeight: 'bold', color: '#34495e' }}>
          Register in 4 easy steps and get your driver’s license now from home.
        </p>
      </div>
      {steps.map((step, index) => (
        <div
          key={step.id}
          style={{
            display: 'flex',
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            alignItems: 'center',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '20px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <img
            src={step.image}
            alt={`Step ${step.id}`}
            style={{
              width: '150px',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginLeft: index % 2 === 0 ? '0' : '20px',
              marginRight: index % 2 === 0 ? '20px' : '0',
            }}
          />
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: '0 0 10px', color: '#e74c3c' }}>
              {step.title}
            </h3>
            <p style={{ marginBottom: '10px', whiteSpace: 'pre-wrap' }}>
              {step.description}
            </p>
            {step.buttonLabel && (
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#fff',
                  color: '#007bff',
                  border: '2px solid #007bff',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                {step.buttonLabel}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewLicence;
