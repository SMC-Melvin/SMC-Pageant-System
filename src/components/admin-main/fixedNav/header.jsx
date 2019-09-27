/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import logout from '../../../assets/images/svg/logout.svg';

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
                  <Link to="/top-3" className="nav-link">
                    Top 3
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
