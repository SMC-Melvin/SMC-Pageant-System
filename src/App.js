import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//import logo from './logo.svg';
import Login from './components/login/index';
import Admin from './components/admin-main/index';
import JudgesMain from './components/judges-main/index';
import Report from './components/report/index';
import NotFoundPage from './components/common/not-found.component';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ProtectedRoute from './components/common/protectedRoute.component';
import { USER_ROLE } from './constants/auth.constant';

class App extends Component {
  render() {
    const judgeAccess = [
      USER_ROLE.JUDGE,
      USER_ROLE.JUDGE_FOR_MALE,
      USER_ROLE.JUDGE_FOR_FEMALE
    ];
    const adminAccess = [USER_ROLE.ADMIN];
    debugger;
    return (
      <div>
        <Switch>
          <Route path="/report" component={Report} />
          <Route path="/login" component={Login} />
          )} />
          <ProtectedRoute
            accessRoleIds={judgeAccess}
            path="/judges/:category"
            component={JudgesMain}
          />
          <ProtectedRoute
            accessRoleIds={adminAccess}
            exact
            path="/"
            component={Admin}
          />
          <Route path="/not-found" component={NotFoundPage} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
