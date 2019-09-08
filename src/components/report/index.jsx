import React, { Component } from 'react';
import './style.scss';

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
      <div className="container">
        <header>
          <div className="text-center">
            <img
              src={logo}
              alt=""
              width="50px"
              height="50px"
              className="margin-50"
            />
            <h2 className="text-uppercase">
              Saint Micheal College of Hindang, Leyte, Inc.
            </h2>
            <h5>A. Bonifacio St., Poblacion II, Hindang, Leyte</h5>
          </div>
        </header>
        <table width="100%" className="margin-top-50 table" border="1">
          <thead>
            <tr className="text-center">
              <th>Can#</th>
              <th>Name</th>
              <th>Faction</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>1</td>
              <td>Pilyang Husband</td>
              <td>A</td>
              <td>10</td>
            </tr>
            <tr className="text-center">
              <td>2</td>
              <td>Pilyang Husband</td>
              <td>A</td>
              <td>10</td>
            </tr>
            <tr className="text-center">
              <td>3</td>
              <td>Pilyang Husband</td>
              <td>A</td>
              <td>10</td>
            </tr>
            <tr className="text-center">
              <td>4</td>
              <td>Pilyang Husband</td>
              <td>A</td>
              <td>10</td>
            </tr>
            <tr className="text-center">
              <td>5</td>
              <td>Pilyang Husband</td>
              <td>A</td>
              <td>10</td>
            </tr>
            <tr className="text-center">
              <td>6</td>
              <td>Pilyang Husband</td>
              <td>A</td>
              <td>10</td>
            </tr>
            <tr className="text-center">
              <td>6</td>
              <td>Pilyang Husband</td>
              <td>A</td>
              <td>10</td>
            </tr>
            <tr className="text-center">
              <td>7</td>
              <td>Pilyang Husband</td>
              <td>A</td>
              <td>10</td>
            </tr>
            <tr className="text-center">
              <td>1</td>
              <td>Pilyang Husband</td>
              <td>A</td>
              <td>10</td>
            </tr>
            <tr className="text-center">
              <td>2</td>
              <td>Pilyang Husband</td>
              <td>A</td>
              <td>10</td>
            </tr>
            <tr className="text-center">
              <td>3</td>
              <td>Pilyang Husband</td>
              <td>A</td>
              <td>10</td>
            </tr>
            <tr className="text-center">
              <td>4</td>
              <td>Pilyang Husband</td>
              <td>A</td>
              <td>10</td>
            </tr>
            <tr className="text-center">
              <td>5</td>
              <td>Pilyang Husband</td>
              <td>A</td>
              <td>10</td>
            </tr>
            <tr className="text-center">
              <td>6</td>
              <td>Pilyang Husband</td>
              <td>A</td>
              <td>10</td>
            </tr>
            <tr className="text-center">
              <td>6</td>
              <td>Pilyang Husband</td>
              <td>A</td>
              <td>10</td>
            </tr>
            <tr className="text-center">
              <td>7</td>
              <td>Pilyang Husband</td>
              <td>A</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
        <div>
          <div className="col-md-12 judges">
            <div className="row text-center">
              <div className="col-md-4">
                <h3>Judge Name</h3>
                <h5>Judge 1</h5>
              </div>
              <div className="col-md-4">
                <h3>Judge Name</h3>
                <h5>Judge 2</h5>
              </div>
              <div className="col-md-4">
                <h3>Judge Name</h3>
                <h5>Judge 3</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Report;
