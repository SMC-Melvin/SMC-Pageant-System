import React, { Component } from 'react';
import logo from '../../assets/images/Logo.png';

class ReportPrintable extends Component {
  render() {
    const { candidates } = this.props;
    return (
      <div>
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
            {candidates.map(candidate => (
              <tr className="text-center">
                <td>{candidate.CandidateNumber}</td>
                <td>{candidate.CandidateName}</td>
                <td>{candidate.Faction}</td>
                <td>{candidate.Average}</td>
              </tr>
            ))}
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

export default ReportPrintable;
