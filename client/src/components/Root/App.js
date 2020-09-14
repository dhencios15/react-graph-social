import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { MainWrapper } from './App.styles';

import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';

const App = () => {
  return (
    <MainWrapper>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
        </Switch>
      </Router>
    </MainWrapper>
  );
};

export default App;
