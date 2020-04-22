import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './_services/PrivateRoute';

//Components
import { HomePage } from './components/home/HomePage';
import { LoginPage } from './components/login/LoginPage';
import { LogoutPage } from './components/login/LogoutPage';

import { NotFound } from './components/notfound/NotFound';
import { NavBar } from './components/navbar/NavBar';

import { userService } from './_services';

class App extends Component {
  constructor(props) {
      super(props);
  }

    render() {
        return (
            
            <div>              
                <Router basename={process.env.PUBLIC_URL}>
                    <div className="wrapper">
                    {! userService.isLogged() ? null : <NavBar />}            
                        <Switch>                        
                            <Route path="/login" component={LoginPage} />
                            <Route path="/logout" component={LogoutPage} />
                            <PrivateRoute path="/" exact component={HomePage} />                         
                            <Route path="*" component={NotFound} />
                        </Switch>
                        </div>
                </Router>
                </div>
        );
  }
}

export default App;