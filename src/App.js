import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//import logo from './logo.svg';
import Login from './components/login/index';
import Admin from './components/admin-main/index';
import JudgesMain from './components/judges-main/index';
import NotFoundPage from './components/common/not-found.component';
import ProtectedRoute from './components/common/protectedRoute.component';
import WelcomeScreen from './components/judges-main/welcome-screen.component';
import { USER_ROLE } from './constants/auth.constant';
import { getCurrentUser } from './utilities/auth.util';
import categoryService from './services/categoryService';
import { categoryBuilderForUI } from './mappers/category.mapper';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  state = {
    categories: []
  };
  async componentDidMount() {
    try {
      const { data } = await categoryService.getCategory();
      const categories = data && data.map(categoryBuilderForUI);
      this.setState({ categories });
    } catch (error) {}
  }
  render() {
    const { categories } = this.state;
    const judgeAccess = [
      USER_ROLE.JUDGE,
      USER_ROLE.JUDGE_FOR_MALE,
      USER_ROLE.JUDGE_FOR_FEMALE
    ];
    return (
      <div>
        <Switch>
          <Route
            path="/login"
            render={props => <Login {...props} categories={categories} />}
          />
          <ProtectedRoute
            accessRoleIds={judgeAccess}
            path="/judges/:category"
            render={props => <JudgesMain {...props} categories={categories} />}
          />
          <ProtectedRoute
            path="/"
            render={props => {
              const currentUser = getCurrentUser();
              return currentUser.RoleId === USER_ROLE.ADMIN ? (
                <Admin {...props} categories={categories} />
              ) : (
                <WelcomeScreen {...props} categories={categories} />
              );
            }}
          />
          <Route path="/not-found" component={NotFoundPage} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
