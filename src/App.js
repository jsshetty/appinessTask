import React from 'react';
import './App.css';
import Auth from './Auth';
import DashboardPage from './Dashboard/DashboardPage';
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router"

function App() {
  return (
      <Switch>
        <Route path="/" exact component={DashboardPage} />
        <Route path="/login" component={Auth} />
        <Redirect to="/login"/>
      </Switch>
  );
}

export default withRouter(App);
