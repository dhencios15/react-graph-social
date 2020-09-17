import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MainWrapper } from './App.styles';
import AuthRoute from 'utils/AuthRoute';
import { AuthProvider } from 'context/authContext';

import { HomeWrapper } from 'pages/Home/Home.styles';

import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Navbar from 'layout/Navbar';
import SinglePost from 'components/Posts/SinglePost';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <MainWrapper>
          <Navbar />
          <HomeWrapper>
            <Switch>
              <Route exact path='/' component={Home} />
              <AuthRoute exact path='/posts/:postId' component={SinglePost} />
              <AuthRoute exact path='/login' component={Login} />
              <AuthRoute exact path='/register' component={Register} />
            </Switch>
          </HomeWrapper>
        </MainWrapper>
      </Router>
    </AuthProvider>
  );
};

export default App;
