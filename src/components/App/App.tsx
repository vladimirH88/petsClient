import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Post from '../Post/Post';
import ProfileMain from '../Profile/ProfileMain/ProfileMain';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/login' component={Login} />
        <Route path='/registration' component={Registration} />
        <Route path='/profile' component={ProfileMain} />
        <Route path='/:id' component={Post} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
