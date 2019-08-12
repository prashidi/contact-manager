import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AlertTemplate from "react-alert-template-basic";

import store from "../store";
import Header from "./layouts/Header";
import Dashboard from "./contacts/Dashboard";
import Alerts from "./layouts/Alerts";
import PrivateRoute from "./common/PrivateRoute";
import { loadUser } from "../actions/auth";

// optional cofiguration
const alertOptions = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className="container">
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
