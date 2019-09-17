import React, { Component } from 'react';
import './style.scss';

import 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import bell from '../../../assets/images/svg/bell.svg';
import fb from '../../../assets/images/svg/fb.svg';
import settings from '../../../assets/images/svg/settings.svg';
import twitter from '../../../assets/images/svg/twitter.svg';
import ig from '../../../assets/images/svg/ig.svg';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="footer">
          <div className="social">
            <img
              src={fb}
              alt=""
              width="25px"
              height="25px"
              className="img-social"
            />
            <img
              src={ig}
              alt=""
              width="25px"
              height="25px"
              className="img-social"
            />
            <img
              src={twitter}
              alt=""
              width="25px"
              height="25px"
              className="img-social"
            />
            <img
              src={settings}
              alt=""
              width="25px"
              height="25px"
              className="img-social"
            />
            <img
              src={bell}
              alt=""
              width="25px"
              height="25px"
              className="img-social"
            />
          </div>

          <div className="line"></div>
          <div className="footer-text">
            <div>
              <span className="flag"></span> Philippines{' '}
              <span className="copyright"></span> 2019. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
