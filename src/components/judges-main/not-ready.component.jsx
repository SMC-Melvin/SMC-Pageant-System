import React from 'react';
import Button from 'react-bootstrap/Button';

const NotReady = ({ onCheckReady }) => {
  return (
    <div>
      <div className="not-ready-screen">
        <div className="welcome-container">
          <h1>Not Ready Yet!</h1>
          <span>
            Top 3 candidates aren't declared yet. Please ask the administrator
            to set the Top 3 candidates then click the Start button to continue
            submitting candidates score.
          </span>
          <div className="judge-button-container">
            <Button
              className="start-button"
              variant="success"
              size="lg"
              onClick={() => onCheckReady(false)}
            >
              Start
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotReady;
