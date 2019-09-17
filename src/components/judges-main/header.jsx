import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { getCurrentUser } from '../../utilities/auth.util';

import logout from '../../assets/images/svg/logout.svg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: getCurrentUser()
    };
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
            <a href="/#" className="navbar-brand text-uppercase">
              SMCHLI Pageant System
            </a>
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
                  <a
                    href="/#"
                    className="navbar-brand text-uppercase margin-bottom-15"
                  >
                    <p>{this.state.currentUser.Name}</p>
                  </a>
                </li>
                <li className="nav-item active">
                  <a
                    href="/#"
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
