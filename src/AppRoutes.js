import React from 'react';
import { Route, Switch,BrowserRouter, Redirect} from "react-router-dom";

import HomePage from "./containers/Home";


export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route exact path="/home" component={HomePage}/>
            </Switch>
        </BrowserRouter>
        
    );
}
