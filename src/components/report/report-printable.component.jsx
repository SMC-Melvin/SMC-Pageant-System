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
              <th>Gender</th>
              <th>Faction</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map(candidate => (
              <tr key={candidate.CandidateId} className="text-center">
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
          <table classname="table text-center" width="100%">
            <tr className="text-center">
              <td className="text-uppercase">Judge Name</td>
              <td className="text-uppercase">Judge Name</td>
              <td className="text-uppercase">Judge Name</td>
            </tr>
            <tr className="margin-bottom-100 text-center">
              <td>Judge 1</td>
              <td>Judge 2</td>
              <td>Judge 3</td>
            </tr>
            <tr className="text-center margin-top-50">
              <td className="text-uppercase">Judge Name</td>
              <td className="text-uppercase">Judge Name</td>
              <td className="text-uppercase">Judge Name</td>
            </tr>
            <tr className="text-center">
              <td>Judge 1</td>
              <td>Judge 2</td>
              <td>Judge 3</td>
            </tr>
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
