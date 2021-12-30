import React from 'react';
import { Route, Switch,BrowserRouter, Redirect} from "react-router-dom";
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import About from './../src/Pages/About/About';
import Dashboard from './components/Dashboard';
import Dashboard_ from './components/Dashboard/Dashboard_';
import Left_sidebar from './components/Left_sidebar';
import CreatePost from './components/AllModels/Post/CreatePost';
import ServicesModel from './components/AllModels/ServicesModels/ServicesModel';
import CreateGroup from './components/AllModels/CreateGroup/CreateGroup';
import MessageInputsField from './components/AllModels/Messages/MessageInputsField';
import MessageToConnection from './components/AllModels/Messages/MessageToConnection';
import ContactSupplier from './components/AllModels/ContactSupplier/ContactSupplier';
import CAEPIPEprogram from './components/AllModels/CAEPIPEprogram/CAEPIPEprogram';
import ServiceEnquiry from './components/AllModels/ServiceEnquiry/ServiceEnquiry';
import Products from './components/Products/Products';
import RightSidebar from './components/RightSidebar';
import UserPost from './components/Post/UserPost';
import Dashboard2 from './components/Dashboard2/Dashboard2';



export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/landing" />
                <Route exact path="/landing" component={LandingPage}/>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/SignUpPage" component={SignUpPage}/>
                <Route exact path="/About" component={About}/>
                <Route exact path="/Dashboard" component={Dashboard}/>
                <Route exact path="/Dashboard_" component={Dashboard_}/>
                <Route exact path="/Left_sidebar" component={Left_sidebar}/>
                <Route exact path="/CreatePost" component={CreatePost}/>
                <Route exact path="/ServicesModel" component={ServicesModel}/>
                <Route exact path="/CreateGroup" component={CreateGroup}/>
                <Route exact path="/MessageInputsField" component={MessageInputsField}/>
                <Route exact path="/MessageToConnection" component={MessageToConnection}/>
                <Route exact path="/ContactSupplier" component={ContactSupplier}/>
                <Route exact path="/CAEPIPEprogram" component={CAEPIPEprogram}/>
                <Route exact path="/ServiceEnquiry" component={ServiceEnquiry}/>
                <Route exact path="/Products" component={Products}/>
                <Route exact path="/RightSidebar" component={RightSidebar}/>
                <Route exact path="/UserPost" component={UserPost}/>
                <Route exact path="/Dashboard2" component={Dashboard2}/>
            </Switch>
        </BrowserRouter>        
    );


   
}
