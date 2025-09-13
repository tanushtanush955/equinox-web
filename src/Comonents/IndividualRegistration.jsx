import React from 'react';
import ParticipantEntry from './ParticipantEntry';
import "../Styles/Global.css";
import "../Styles/Registration.css";

const IndividualRegistration = ({ theme }) => {
  const participantCount = 5; // Single variable defining the number of participants
  const entryBoxes = Array.from({ length: participantCount }, (_, i) => i);

  const titleColor = theme === 'gold' ? '#facc15' : '#ef4444';

  return (
    <div className="main-content registration-content">
      <h2 className="header-text animate-fade-in-up" style={{ color: titleColor }}>
        Individual Registration
      </h2>

      <div className="main-content-inner pt-20 flex justify-center items-start min-h-screen">
        <div className="w-full max-w-4xl">
          
          <div>
            {entryBoxes.map((boxId) => (
              <ParticipantEntry key={boxId} participantNumber={boxId + 1} theme={theme} />
            ))}
          </div>
          <div >
            <button className='submit-button'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualRegistration;