import React from 'react';
import { Route, Switch,BrowserRouter, Redirect} from "react-router-dom";
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';


export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/landing" />
                <Route exact path="/landing" component={LandingPage}/>
                <Route exact path="/login" component={LoginPage}/>
            </Switch>
        </BrowserRouter>        
    );


}
