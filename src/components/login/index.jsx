import React, { Component } from 'react';
import SweetAlert from 'sweetalert2-react';

import 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import facebook from '../../assets/images/svg/facebook.svg';
import googlePlus from '../../assets/images/svg/google-plus.svg';
import github from '../../assets/images/svg/github-logo.svg';

import authService from '../../services/authService';
import { getCurrentUser } from '../../utilities/auth.util';
import './style.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      password: '',
      isInvalidAccount: false,
      errors: [],
      currentUser: null
    };
  }

  showValidationErr(elm, msg) {
    this.setState(prevState => ({
      errors: [...prevState.errors, { elm, msg }]
    }));
  }

  clearValidationErr(elm) {
    this.setState(prevState => {
      let newArray = [];
      for (let err of prevState.errors) {
        if (elm !== err.elm) {
          newArray.push(err);
        }
      }
      return { errors: newArray };
    });
  }

  onFullnameChange = e => {
    this.setState({ isInvalidAccount: false, fullname: e.target.value });
    this.clearValidationErr('fullname');
  };

  onPasswordChange = e => {
    this.setState({ isInvalidAccount: false, password: e.target.value });
    this.clearValidationErr('password');
  };

  routeUser = data => {
    localStorage.setItem('currentUser', JSON.stringify(data));
    this.props.history.replace('/');
  };

  submitLogin = async event => {
    event.preventDefault();
    const { fullname, password } = this.state;
    if (!fullname) {
      this.showValidationErr('fullname', 'User Name cannot be null');
      return;
    }
    if (!password) {
      this.showValidationErr('password', 'Password cannot be null!');
      return;
    }

    try {
      const { data } = await authService.login(fullname, password);
      this.routeUser(data);
    } catch (error) {
      this.setState({ isInvalidAccount: true });
    }
  };

  async componentDidMount() {
    const currentUser = getCurrentUser();
    if (!currentUser) return;
    this.routeUser(currentUser);
  }
  render() {
    let fullnameErr = null,
      passwordErr = null;

    for (let err of this.state.errors) {
      if (err.elm === 'fullname') {
        fullnameErr = err.msg;
      }
      if (err.elm === 'password') {
        passwordErr = err.msg;
      }
    }

    return (
      <div className="login-section">
        <div className="overlay">
          <div className="container">
            <div className="login-box">
              <div className="title-box">
                <span className="title text-uppercase"> Login Account</span>
              </div>
              <div className="social-logo">
                <img src={github} alt="" width="50px" />
                <img src={facebook} alt="" width="50px" />
                <img src={googlePlus} alt="" width="50px" />
              </div>

              <hr />

              <form onSubmit={this.submitLogin}>
                <input
                  type="text"
                  placeholder="User Name"
                  className="form-control textbox"
                  onChange={this.onFullnameChange}
                />
                <small>{fullnameErr ? fullnameErr : ''}</small>

                <input
                  type="password"
                  placeholder="Password"
                  className="form-control textbox"
                  onChange={this.onPasswordChange}
                />
                <small>{passwordErr ? passwordErr : ''}</small>

                <div className="col-md-12 padding-zero btn-group margin-top-10">
                  <button type="submit" className="btn btn-login">
                    Login
                  </button>
                </div>
              </form>
              <SweetAlert
                show={this.state.isInvalidAccount}
                type="error"
                title="Security Authentication"
                text="Invalid Username or Password"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
