import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

//import logo from './logo.svg';
import bell from '../../../assets/images/svg/bell.svg';
import fb from '../../../assets/images/svg/fb.svg';
import settings from '../../../assets/images/svg/settings.svg';
import twitter from '../../../assets/images/svg/twitter.svg';
import ig from '../../../assets/images/svg/ig.svg';
import logout from '../../../assets/images/svg/logout.svg';
import edit from '../../../assets/images/svg/edit.svg';
import trash from '../../../assets/images/svg/trash.svg';
// import philippines from '../../assets/images/svg/philippines.svg';
// import copyright from '../../assets/images/svg/copyright.svg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleUserLogout = () => {
    localStorage.removeItem('currentUser');
    this.props.history.replace('/login');
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link to="/" className="navbar-brand text-uppercase">
              Pageant System
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link to="/users" className="nav-link">
                    Users
                  </Link>
                </li>
                <li className="nav-item active">
                  <a
                    className="nav-link margin-left-50"
                    onClick={this.handleUserLogout}
                  >
                    <img src={logout} alt="" width="20px" height="20px" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Header);
