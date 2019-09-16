import React, { Component } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

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
      list: []
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

  onScoreChange = e => {
    this.setState({ isValidated: false, score: e.target.value });
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

  addScore = () => {
    const newUser = { id: 3, name: 'Testing again' };
    const list = [...this.state.list, newUser];
    this.setState({ list });
  };

  saveScore = () => {
    if (!this.state.score) {
      Swal.fire('Woooah!', 'You did not score at all!!', 'error');
    } else if (this.state.score < 1 || this.state.score > 10) {
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
      }).then(result => {
        if (result.value) {
          Swal.fire('SAVED!', 'Your score has been save.', 'success');
          this.next();
        }
      });
    }
  };

  async componentDidMount() {
    try {
      const { data: cand } = await candidateService.getCandidates(
        this.state.currentUser.Id,
        0
      );
      this.setState({ cand });
    } catch (error) {}
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const { categories } = this.props;
    return (
      <div className="main">
        <Header />
        <div className="container">
          <CategoryLink categories={categories} />
          <Slider ref={c => (this.slider = c)} {...settings}>
            {this.state.cand.map(getCand => (
              <div className="col-md-12" key={getCand.Id}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="profile-pic"></div>
                  </div>
                  <div className="col-md-6 margin-top-30">
                    <div className="can-info">
                      <div className="can-no">{getCand.Number}</div>
                      <div className="can-name text-uppercase">
                        {getCand.Name}
                      </div>
                      <div className="can-faction text-uppercase">
                        Faction 1
                      </div>

                      <div className="score-holder col-md-12">
                        <div className="row">
                          <div className="padding-zero">
                            <input
                              type="text"
                              placeholder="SCORE"
                              className="form-control score"
                              // value={this.state.currentNumber}
                              onChange={this.onScoreChange}
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
                        onClick={this.saveScore}
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

          <CandidateViewer />
        </div>
      </div>
    );
  }
}

export default JudgesMain;
