import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ROUTES from '../../constants/routes';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Post from '../Post/Post';
import ProfileMain from '../Profile/ProfileMain/ProfileMain';
import AdminMain from '../Admin/Main/Main';
import AdminPost from '../Admin/Post/Post';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={ROUTES.ROOT} component={Main} />
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.REGISTRATION} component={Registration} />
            <Route path={ROUTES.PROFILE} component={ProfileMain} />
            <Route path={ROUTES.POST_BY_ID} component={Post} />
            <Switch>
                <Route exact path={ROUTES.ADMIN} component={AdminMain} />
                <Route path={ROUTES.ADMIN_POST_BY_ID} component={AdminPost} />
            </Switch>
        </Switch>
    </BrowserRouter>
);

export default App;
