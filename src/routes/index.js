import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Login from '../components/authentication/login';
import Register from '../components/authentication/register';
import ForgotPassword from '../components/authentication/forgot-password';
import ResetPassword from '../components/authentication/reset-password';
import RequireAuth from '../components/hoc/require-auth';
import AuthenticatedRoutes from './authenticated/';




class Routes extends Component {

                render() {
                    return (


                            <Switch>


                                <Route exact path="/" component={App} />
                                <Route exact path="/Home" component={App} />
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/register" component={Register} />
                                <Route exact path="/forgot-password" component={ForgotPassword} />
                                <Route path="/reset-password/:token" component={ResetPassword} />
                                <Route path="/dashboard" component={RequireAuth(AuthenticatedRoutes)} />
                             </Switch>


                    );
                }
}



export default Routes;
