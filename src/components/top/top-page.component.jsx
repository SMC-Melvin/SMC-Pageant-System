import React, { Component } from 'react';
import { ListGroup, Badge } from 'react-bootstrap';
import './style.scss';
import candidateService from '../../services/candidateService';
import Loader from 'react-loader-spinner';

class TopPage extends Component {
  state = {
    candidates: [],
    isLoading: false
  };
  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const categoryId = -1;
      const { data } = await candidateService.getCandidateAverageByCategory(
        categoryId
      );
      this.setState({ candidates: data, isLoading: false });
    } catch (error) {}
  }
  handleTopCandidateSet = async candidate => {
    const { CandidateId, Gender, Average, Order } = candidate;
    const topCandidateData = {
      Id: 0,
      CandidateId,
      Gender,
      Average
    };
    const { candidates } = this.state;
    const index = candidates.indexOf(candidate);
    candidates[index].Order = Order === 1 ? 2 : 1;
    this.setState({ candidates });
    try {
      candidateService.setTopCandidate(topCandidateData);
    } catch (error) {}
  };
  render() {
    return (
      <div className="container top-page">
        <div className="header">
          <h5>Select Top 3 Candidates</h5>
        </div>
        {this.state.isLoading && (
          <div className="loading-section">
            <Loader
              type="Oval"
              color="#5D120F"
              height={80}
              width={80}
              visible={this.state.isLoading}
            />
          </div>
        )}
        {!this.state.isLoading && (
          <ListGroup>
            {this.state.candidates.map(candidate => (
              <ListGroup.Item
                className={`list-item ${candidate.Order === 1 ? 'active' : ''}`}
                key={candidate.CandidateId}
                onClick={() => this.handleTopCandidateSet(candidate)}
              >
                <div className="candidate-details">
                  <div className="candidate-gender">
                    <Badge
                      variant={
                        candidate.Gender === 'Male' ? 'success' : 'warning'
                      }
                    >
                      {candidate.Gender}
                    </Badge>
                  </div>
                  <div className="candidate-number">
                    {candidate.CandidateNumber}
                  </div>
                  <div className="candidate-name">
                    {candidate.CandidateName}
                  </div>
                </div>

                <div className="candidate-average">{candidate.Average}</div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </div>
    );
  }
}

export default TopPage;
