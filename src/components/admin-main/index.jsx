import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './style.scss';

import 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './fixedNav/header';
import Footer from './fixedNav/footer';
import UserPage from './../user/user-page.component';
import Report from '../report';
import NotFoundPage from './../common/not-found.component';
import TopPage from '../top/top-page.component';

class Admin extends Component {
  render() {
    return (
      <div className="main-section">
        <Header />
        <div className="main-content">
          <Switch>
            <Route exact path="/users" component={UserPage} />
            <Route exact path="/top-3" component={TopPage} />
            <Route
              exact
              path="/"
              render={props => (
                <Report {...props} categories={this.props.categories} />
              )}
            />
            <Route path="/not-found" component={NotFoundPage} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Admin;
