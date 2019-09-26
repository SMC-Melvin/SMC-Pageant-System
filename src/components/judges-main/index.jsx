import React, { Component } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { withRouter } from 'react-router-dom';
import scoreService from '../../services/scoreService';
import { candidateByCategoryBuilderForUI } from './../../mappers/candidate.mapper';

import Header from './header';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import CategoryLink from './../category/category-link.component';

import candidateService from '../../services/candidateService';
import { getCurrentUser } from '../../utilities/auth.util';
import CandidateViewer from './candidate-viewer.component';

class JudgesMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentNumber: 0
      cand: [],
      userId: '',
      id: '',
      alert: null,
      isValidated: false,
      score: 0,
      currentUser: getCurrentUser(),
      next: this.next.bind(this),
      previous: this.previous.bind(this),
      list: [],
      candidatesByCategory: []
    };
  }

  next = () => {
    this.slider.slickNext();
  };

  previous = () => {
    this.slider.slickPrev();
  };

  errorMessage = () => {
    Swal.fire('Opsss!', 'Your score is either below 1 or above 10', 'error');
  };

  onScoreChanges = (event, categoryId, candidate) => {
    const { Id: userId } = getCurrentUser();
    const {
      score: [score = {}],
      candidateId
    } = candidate;
    const newScoreObj = {
      ...score,
      categoryId,
      userId,
      candidateId,
      value: event.target.value
    };
    this.handleCandidateStateUpdate({
      categoryId,
      candidateId,
      score: newScoreObj
    });
  };

  // candidates = async event => {
  //   event.preventDefault();
  //   // const { userId, id } = this.state;
  //   const { data } = await candidateService.getCandidates(
  //     this.state.currentUser.Id,
  //     0
  //   );
  //   console.log(data);
  // };

  handleCandidateStateUpdate = ({ categoryId, candidateId, score }) => {
    debugger;
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

  handleScoreChange = ({ categoryId, candidate, score = {} }) => {
    debugger;
    const { Id: userId } = getCurrentUser();
    const { candidateId } = candidate;
    const newScoreObj = {
      ...score,
      categoryId,
      userId,
      candidateId,
      value: score.value || ''
    };

    if (!score.value) {
      Swal.fire('Woooah!', 'You did not score at all!!', 'error');
    } else if (score.value < 1 || score.value > 10) {
      this.errorMessage();
    } else {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You can still change your score anytime!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, save it!'
      }).then(async result => {
        if (result.value) {
          Swal.fire('SAVED!', 'Your score has been save.', 'success');
          try {
            const { data } = await scoreService.setScore(newScoreObj);
            newScoreObj.id = data;
            this.handleCandidateStateUpdate({
              categoryId,
              candidateId,
              score: newScoreObj
            });
          } catch (error) {}
          this.next();
        }
      });
    }
  };

  // ScoreBoard = ({ maxScore, score, onScoreChange }) => {
  // const scoreList = Array.from(
  //   { length: maxScore },
  //   (value, index) => index + 1
  // );
  // const newScore = score || {
  //   id: 0,
  //   value: 0
  // };

  // saveScore = () => {
  //   if (!this.state.score) {
  //     Swal.fire('Woooah!', 'You did not score at all!!', 'error');
  //   } else if (this.state.score < 1 || this.state.score > 10) {
  //     this.errorMessage();
  //   } else {
  //     Swal.fire({
  //       title: 'Are you sure?',
  //       text: 'You can still change your score anytime!',
  //       type: 'warning',
  //       showCancelButton: true,
  //       confirmButtonColor: '#3085d6',
  //       cancelButtonColor: '#d33',
  //       confirmButtonText: 'Yes, save it!'
  //     }).then(result => {
  //       if (result.value) {
  //         Swal.fire('SAVED!', 'Your score has been save.', 'success');
  //         this.next();
  //       }
  //     });
  //   }
  // };

  async componentDidMount() {
    try {
      const { data: cand } = await candidateService.getCandidates(
        this.state.currentUser.Id,
        0
      );
      debugger;
      this.setState({ cand });

      const { data } = await candidateService.getCandidateByCategory();
      const candidatesByCategory =
        data && data.map(candidateByCategoryBuilderForUI);
      this.setState({ candidatesByCategory });
    } catch (error) {}
  }

  render() {
    const { match } = this.props;
    const { candidatesByCategory } = this.state;
    const { category: path } = (match && match.params) || {};
    const category = candidatesByCategory.find(
      category => category.path === path
    );

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const { categories } = this.props;
    // debugger;
    return (
      <div className="main">
        <Header />
        <div className="container">
          <CategoryLink categories={categories} />
          <Slider ref={c => (this.slider = c)} {...settings}>
            {/* {this.state.cand.map(getCand => ( */}
            {category &&
              category.candidates.length &&
              category.candidates.map(candidate => (
                <div className="col-md-12" key={candidate.candidateId}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="profile-pic">
                        <img src={`../candidates/${candidate.defaultImage}`} width="100%" />
                      </div>
                    </div>
                    <div className="col-md-6 margin-top-30">
                      <div className="can-info">
                        <div className="can-no">{candidate.number}</div>
                        <div className="can-name text-uppercase">
                          {candidate.name}
                        </div>
                        <div className="can-faction text-uppercase">
                          Faction: {candidate.faction}
                        </div>

                        <div className="score-holder col-md-12">
                          <div className="row">
                            <div className="padding-zero">
                              <input
                                type="text"
                                placeholder="SCORE"
                                className="form-control score"
                                value={
                                  (candidate.score &&
                                    candidate.score.length &&
                                    candidate.score[0].value) ||
                                  ''
                                }
                                onChange={event =>
                                  this.onScoreChanges(
                                    event,
                                    category.categoryId,
                                    candidate
                                  )
                                }
                              />
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          className="btn btn-cancel"
                          onClick={this.previous}
                        >
                          Previous
                        </button>
                        <button
                          type="button"
                          className="btn btn-save"
                          onClick={() =>
                            this.handleScoreChange({
                              categoryId: category.categoryId,
                              candidate,
                              score: candidate.score[0]
                            })
                          }
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>

          <div className="flex-justify">
            {this.state.cand.map(getNumber => (
              <div className="numbers" key={getNumber.Id}>
                {getNumber.Number}
              </div>
            ))}
          </div>

          {/* <CandidateViewer /> */}
        </div>
      </div>
    );
  }
}

export default withRouter(JudgesMain);
