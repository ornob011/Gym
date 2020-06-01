import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Programs from './Component/Programs/Programs';
import Pricing from './Component/Pricing/Pricing';
import ClassDescription from './Component/ClassDescription/ClassDescription';
import Membership from './Component/Membership/Membership';
import Payment from './Component/Payment/Payment';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


function App() {
    return (
        <div className="wrapper">
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

                    {/* <Route path="/membership/payment">
            <Payment></Payment>
          </Route> */}



                    <Route path="*">
                        <h1>Page not found</h1>
                    </Route>
                </Switch>
            </Router>

            <Footer></Footer>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    );
}

export default App;
