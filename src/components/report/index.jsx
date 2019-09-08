import React, { Component } from 'react';

import 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import logo from '../../assets/images/Logo.png';

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <header>
          <img src={logo} alt="" />
        </header>
      </div>
    );
  }
}

export default Report;
