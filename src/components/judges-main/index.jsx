import React, { Component } from 'react';
import reactDom from 'react-dom';

import Header from './header';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import authService from '../../services/authService';
import candidateService from '../../services/candidateService';
import { getCurrentUser } from '../../utilities/auth.util';
import { USER_ROLE } from '../../constants/auth.constant';
import categoryService from '../../services/categoryService';
import { categoryBuilderForUI } from '../../mappers/category.mapper';

class JudgesMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentNumber: 0
      cand: [],
      userId: '',
      id: '',
      currentUser: getCurrentUser(),
      candidate: {
        id: 0,
        name: '',
        number: ''
      }
    };
  }

  // candidates = async event => {
  //   event.preventDefault();
  //   // const { userId, id } = this.state;
  //   const { data } = await candidateService.getCandidates(
  //     this.state.currentUser.Id,
  //     0
  //   );
  //   console.log(data);
  // };

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
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const { match } = this.props;
    return (
      <div className="main">
        <Header />
        <div className="container">
          <div className="tabs">
            <button className="btn btn-tabs">Production</button>
            <button className="btn btn-tabs">First Round Interview</button>
            <button className="btn btn-tabs">Talent</button>
            <button className="btn btn-tabs">Gown</button>
            <button className="btn btn-tabs">TOP 3</button>
          </div>

          <Slider {...settings}>
            {this.state.cand.map(getCand => (
              <div className="col-md-12 padding-zero">
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
                      {/* <div className="can-faction text-uppercase">Faction 1</div> */}

                      <div className="score-holder col-md-12 margin-top-50">
                        <div className="row">
                          <div className="padding-zero">
                            <input
                              type="text"
                              placeholder="SCORE"
                              className="form-control score"
                              // value={this.state.currentNumber}
                            />
                          </div>
                        </div>
                      </div>

                      <button type="button" className="btn btn-cancel">
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-save"
                        onClick={this.candidates}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default JudgesMain;
