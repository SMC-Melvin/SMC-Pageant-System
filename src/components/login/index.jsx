import React, { Component } from 'react';
import reactDom from 'react-dom';
import './style.scss';

import 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import facebook from '../../assets/images/svg/facebook.svg';
import googlePlus from '../../assets/images/svg/google-plus.svg';
import github from '../../assets/images/svg/github-logo.svg';

import AdminMain from '../admin-main/index';

import authService from '../../services/authService';
import candidateService from '../../services/candidateService';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      password: '',
      errors: []
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
    this.setState({ fullname: e.target.value });
    this.clearValidationErr('fullname');
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
    this.clearValidationErr('password');
  };

  getCandidates = async () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    debugger;
    try {
      const { data } = await candidateService.getCandidates(currentUser.Id);
      debugger;
    } catch (error) {}
  };

  async submitLogin(e) {
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
      debugger;
      const routeUrl = data.RoleId === 1 ? '/' : '/judge';
      localStorage.setItem('currentUser', JSON.stringify(data));
      this.props.history.replace(routeUrl);
    } catch (error) {
      console.log('Invalid Username or Password');
    }
  }

  componentDidMount() {
    const { history } = this.props;
    const currentUserStorage = localStorage.getItem('currentUser');
    const currentUser = currentUserStorage && JSON.parse(currentUserStorage);
    if (currentUser && currentUser.username) {
      history.replace('/');
    }
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

              <select name="" id="" className="form-control select-button">
                <option value="" selected disabled hidden>
                  Will Vote for:
                </option>
                <option value="male">MALE</option>
                <option value="female">FEMALE</option>
              </select>

              <div className="col-md-12 padding-zero btn-group margin-top-10">
                <button
                  className="btn btn-login"
                  onClick={this.submitLogin.bind(this)}
                >
                  Login
                </button>

                <button onClick={this.getCandidates}>Test</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
