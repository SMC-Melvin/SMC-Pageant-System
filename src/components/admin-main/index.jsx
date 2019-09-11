import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './style.scss';

import 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Categories from './mainCategory';
import Header from './fixedNav/header';
import Footer from './fixedNav/footer';
import UserPage from './../user/user-page.component';
import Report from '../report';
import NotFoundPage from './../common/not-found.component';

class Admin extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="main-section">
        <Header />
        <Switch>
          <Route exact path="/users" component={UserPage} />
          <Route exact path="/" component={Report} />
          <Route path="/not-found" component={NotFoundPage} />
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Admin;
