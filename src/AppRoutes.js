import React from 'react';
import { Route, Switch,BrowserRouter, Redirect} from "react-router-dom";
import Landingpage from './components/Landingpage';
import HomePage from "./containers/Home";


export default function Routes() {

    return (
       /* <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/home" />
                <Route exact path="/home" component={HomePage}/>
            </Switch>
        </BrowserRouter>*/
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landingpage}/>
            </Switch>
        </BrowserRouter>
        
    );


}
