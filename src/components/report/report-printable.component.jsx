import React, { Component } from 'react';
import logo from '../../assets/images/Logo.png';

import './style.scss';

class ReportPrintable extends Component {
  render() {
    const { candidates, categoryId } = this.props;
    debugger;
    return (
      <div>
        <header>
          <div className="text-center">
            <img
              src={logo}
              alt=""
              width="100px"
              height="100px"
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
              <th>Gender</th>
              <th>Faction</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map(candidate => (
              <tr
                key={candidate.CandidateId}
                className={`text-center ${
                  categoryId === -1 && candidate.Order === 1
                    ? 'top-candidate'
                    : ''
                }`}
              >
                <td>{candidate.CandidateNumber}</td>
                <td>{candidate.CandidateName}</td>
                <td>{candidate.Gender}</td>
                <td>{candidate.Faction}</td>
                <td>{candidate.Average.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <table
            className="margin-bottom-100 margin-top-200"
            border="0"
            width="100%"
          >
            <tbody>
              <tr className="text-center">
                <th className="text-uppercase">Judge Name</th>
                <th className="text-uppercase">Judge Name</th>
                <th className="text-uppercase">Judge Name</th>
              </tr>
              <tr className="text-center">
                <td>Judge 1</td>
                <td>Judge 2</td>
                <td>Judge 3</td>
              </tr>
            </tbody>
          </table>
          <table className="margin-top-50" border="0" width="100%">
            <tbody>
              <tr className="text-center">
                <th className="text-uppercase">Judge Name</th>
                <th className="text-uppercase">Judge Name</th>
                <th className="text-uppercase">Judge Name</th>
              </tr>
              <tr className="text-center">
                <td>Judge 4</td>
                <td>Judge 5</td>
                <td>Judge 6</td>
              </tr>
            </tbody>
          </table>
          {/* <div className="col-md-12 judges">
            <div className="row">
              <div className="col-md-4 text-center">
                <h4 className="text-uppercase">Judge Name</h4>
                <h5>Judge 1</h5>
              </div>
              <div className="col-md-4 text-center">
                <h4 className="text-uppercase">Judge Name</h4>
                <h5>Judge 2</h5>
              </div>
              <div className="col-md-4 text-center">
                <h4 className="text-uppercase">Judge Name</h4>
                <h5>Judge 3</h5>
              </div>
            </div>
            <div className="row margin-top-50">
              <div className="col-md-4 text-center">
                <h4 className="text-uppercase">Judge Name</h4>
                <h5>Judge 1</h5>
              </div>
              <div className="col-md-4 text-center">
                <h4 className="text-uppercase">Judge Name</h4>
                <h5>Judge 2</h5>
              </div>
              <div className="col-md-4 text-center">
                <h4 className="text-uppercase">Judge Name</h4>
                <h5>Judge 3</h5>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default ReportPrintable;
