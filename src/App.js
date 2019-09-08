import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//import logo from './logo.svg';
import Login from './components/login/index';
import Admin from './components/admin-main/index';
import JudgesMain from './components/judges-main/index';
import Report from './components/report/index';
import Categories from './components/admin-main/mainCategory';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/report" component={Report} />
          <Route path="/login" component={Login} />
          <Route path="/judges/:category" component={JudgesMain} />
          <Route exact path="/" component={Admin} />
        </Switch>
      </div>
    );
  }
}

export default App;
