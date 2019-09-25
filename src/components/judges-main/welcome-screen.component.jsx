import React from 'react';
import { getCurrentUser } from './../../utilities/auth.util';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import './style.scss';

const handleLogout = history => {
  localStorage.removeItem('currentUser');
  history.replace('/login');
};

const WelcomeScreen = ({ categories, history }) => {
  const [disabledCategory, defaultCategory] = categories || [];
  const { path } = defaultCategory || { path: '' };
  const routeUrl = `/judges/${path}`;
  const { Name } = getCurrentUser();
  const name = Name && Name.split(' ')[0];
  return (
    <div className="welcome-screen">
      <div className="welcome-container">
        <h1>Welcome {name}!</h1>
        <span>
          Welcome to Saint Michael College of Hindang, Leyte, Inc. Pageant
          System 2019. Please enjoy!
        </span>
        <div className="judge-button-container">
          <LinkContainer to={routeUrl}>
            <Button className="start-button" variant="success" size="lg">
              Start
            </Button>
          </LinkContainer>
        </div>
        <div className="judge-logout-container">
          <span className="judge-logout" onClick={() => handleLogout(history)}>
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
