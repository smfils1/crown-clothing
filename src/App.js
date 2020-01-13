import React from "react";
import "./App.css";


import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import SignInOutPage from "./pages/SignInOut/SignInOutPage";

import Header from "./components/Header/Header";

import { Route, Switch } from "react-router-dom";


function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/shop" component={ShopPage}/>
                <Route path="/signin" component={SignInOutPage}/>
            </Switch>
        </div>
    );
}

export default App;
