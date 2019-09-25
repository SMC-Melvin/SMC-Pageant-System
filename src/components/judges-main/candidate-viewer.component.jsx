import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import candidateService from '../../services/candidateService';
import scoreService from '../../services/scoreService';
import { candidateByCategoryBuilderForUI } from './../../mappers/candidate.mapper';
import ScoreBoard from './score-board.component';
import { getCurrentUser } from './../../utilities/auth.util';

class CandidateViewer extends Component {
  state = {
    candidatesByCategory: []
  };
  async componentDidMount() {
    try {
      const { data } = await candidateService.getCandidateByCategory();
      const candidatesByCategory =
        data && data.map(candidateByCategoryBuilderForUI);
      this.setState({ candidatesByCategory });
    } catch (error) {}
  }
  handleCandidateStateUpdate = ({ categoryId, candidateId, score }) => {
    const { candidatesByCategory } = this.state;
    const categoryIndex = candidatesByCategory
      .map(category => category.categoryId)
      .indexOf(categoryId);
    const { candidates } = candidatesByCategory[categoryIndex];
    const candidateIndex = candidates
      .map(candidate => candidate.candidateId)
      .indexOf(candidateId);
    candidatesByCategory[categoryIndex].candidates[candidateIndex].score = [
      { ...score }
    ];
    this.setState({ candidatesByCategory });
  };
  handleScoreChange = async ({ categoryId, candidate, score }) => {
    const { Id: userId } = getCurrentUser();
    const { candidateId } = candidate;
    const newScoreObj = {
      ...score,
      categoryId,
      userId,
      candidateId
    };
    try {
      const { data } = await scoreService.setScore(newScoreObj);
      newScoreObj.id = data;
      this.handleCandidateStateUpdate({
        categoryId,
        candidateId,
        score: newScoreObj
      });
    } catch (error) {}
  };
  render() {
    const { match } = this.props;
    const { candidatesByCategory } = this.state;
    const { category: path } = (match && match.params) || {};
    const category = candidatesByCategory.find(
      category => category.path === path
    );
    return (
      <div>
        {category &&
          category.candidates.length &&
          category.candidates.map(candidate => (
            <div key={candidate.candidateId} className="candidate-viewer">
              <span>{candidate.name}</span>
              <ScoreBoard
                maxScore={10}
                score={candidate.score[0]}
                onScoreChange={score =>
                  this.handleScoreChange({
                    categoryId: category.categoryId,
                    candidate,
                    score
                  })
                }
              />
            </div>
          ))}
      </div>
    );
  }
}

export default withRouter(CandidateViewer);
