import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <div className="App">
      <div className="header">
          <h1>Bubble App</h1>
        <h2>
            <Link to="/login"> Login </Link> 
        </h2>
        <h2>
            <Link to="/protected"> Bubble Page </Link>
        </h2>
        </div>
        <Switch>
        <PrivateRoute path="/colors" component={BubblePage} />
        <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
