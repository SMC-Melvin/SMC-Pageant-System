import React, { Component } from 'react';
import './style.scss';

import 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Categories from './mainCategory';
import Header from './fixedNav/header';
import Footer from './fixedNav/footer';

//import logo from './logo.svg';
import bell from '../../assets/images/svg/bell.svg';
import fb from '../../assets/images/svg/fb.svg';
import settings from '../../assets/images/svg/settings.svg';
import twitter from '../../assets/images/svg/twitter.svg';
import ig from '../../assets/images/svg/ig.svg';
import logout from '../../assets/images/svg/logout.svg';
import edit from '../../assets/images/svg/edit.svg';
import trash from '../../assets/images/svg/trash.svg';
// import philippines from '../../assets/images/svg/philippines.svg';
// import copyright from '../../assets/images/svg/copyright.svg';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      fullname: '',
      Username: '',
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

  onFullNameChange(e) {
    this.setState({ fullname: e.target.value });
    this.clearValidationErr('fullname');
  }

  onUsernameChange(e) {
    this.setState({ Username: e.target.value });
    this.clearValidationErr('username');
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
    this.clearValidationErr('password');
  }

  submitAdd(e) {
    if (!this.state.fullname) {
      this.showValidationErr('fullname', 'Full Name cannot be null!');
    }
    if (!this.state.Username) {
      this.showValidationErr('username', 'Username cannot be null!');
    }
    if (!this.state.password) {
      this.showValidationErr('password', 'Password cannot be null');
    }
  }

  render() {
    let fullnameErr = null,
      usernameErr = null,
      passwordErr = null;

    for (let err of this.state.errors) {
      if (err.elm === 'fullname') {
        fullnameErr = err.msg;
      }
      if (err.elm === 'username') {
        usernameErr = err.msg;
      }
      if (err.elm === 'password') {
        passwordErr = err.msg;
      }
    }

    return (
      <div className="main-section">
        <Header />

        <div className="container">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Username</th>
                <th>Password</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Melvin Reston</td>
                <td>Re-Stone</td>
                <td>**********</td>
                <td width="10px" className="padding-edit">
                  <img
                    src={edit}
                    alt=""
                    width="15px"
                    height="15px"
                    className="cursor"
                  />
                </td>
                <td width="10px" className="padding-edit">
                  <img
                    src={trash}
                    alt=""
                    width="15px"
                    height="15px"
                    className="cursor"
                  />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Elmer Datolayta</td>
                <td>eDatz</td>
                <td>**********</td>
                <td width="10px" className="padding-edit">
                  <img
                    src={edit}
                    alt=""
                    width="15px"
                    height="15px"
                    className="cursor"
                  />
                </td>
                <td width="10px" className="padding-edit">
                  <img
                    src={trash}
                    alt=""
                    width="15px"
                    height="15px"
                    className="cursor"
                  />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Francis Gelsano</td>
                <td>Franz-G</td>
                <td>**********</td>
                <td width="10px" className="padding-edit">
                  <img
                    src={edit}
                    alt=""
                    width="15px"
                    height="15px"
                    className="cursor"
                  />
                </td>
                <td width="10px" className="padding-edit">
                  <img
                    src={trash}
                    alt=""
                    width="15px"
                    height="15px"
                    className="cursor"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <button
            type="button"
            className="btn btn-add"
            data-toggle="modal"
            data-target="#myModal"
          >
            Add Judge
          </button>

          <div className="modal" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header padding-150">
                  <h4 className="modal-title">Judges</h4>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>

                <div className="modal-body padding-150">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-control textbox"
                    onChange={this.onFullNameChange.bind(this)}
                  />
                  <small>{fullnameErr ? fullnameErr : ''}</small>

                  <input
                    type="text"
                    placeholder="Username"
                    className="form-control textbox"
                    onChange={this.onUsernameChange.bind(this)}
                  />
                  <small>{usernameErr ? usernameErr : ''}</small>

                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control textbox"
                    onChange={this.onPasswordChange.bind(this)}
                  />
                  <small>{passwordErr ? passwordErr : ''}</small>
                </div>

                <div className="modal-footer padding-150">
                  <button
                    className="btn btn-clear"
                    onClick={this.clearValidationErr.bind(this)}
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    className="btn btn-save"
                    onClick={this.submitAdd.bind(this)}
                  >
                    SAVE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Admin;
