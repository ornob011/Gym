import React from 'react';
import './App.scss';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Programs from './Component/Programs/Programs';
import Pricing from './Component/Pricing/Pricing';
import ClassDescription from './Component/ClassDescription/ClassDescription';
import Membership from './Component/Membership/Membership';
import ReactGa from 'react-ga';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function initializeAnalytics() {
    ReactGa.initialize("UA-168440504-1");
    ReactGa.pageview(window.location.pathname + window.location.search);

}

function App() {

    initializeAnalytics();

    return (
        <div>
            <Header></Header>

            <Router>
                <Switch>

                    <Route exact path="/">
                        <Home></Home>
                    </Route>

                    <Route path="/class">
                        <Programs></Programs>
                    </Route>

                    <Route path="/class-description/:program">
                        <ClassDescription></ClassDescription>
                    </Route>

                    <Route path="/pricing">
                        <Pricing></Pricing>
                    </Route>

                    <Route path="/membership/form/:plan">
                        <Membership></Membership>
                    </Route>

                    <Route path="*">
                        <h1>Page not found</h1>
                    </Route>
                </Switch>
            </Router>

            <Footer></Footer>

        </div>
    );
}

export default App;
