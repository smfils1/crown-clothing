import React, {Component} from "react";
import "./App.css";


import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import SignInOutPage from "./pages/SignInOut/SignInOutPage";

import Header from "./components/Header/Header";

import {auth} from "./firebase/utils"


import { Route, Switch } from "react-router-dom";


class App extends Component {
    state = {
        currentUser: null
    }

    unsubscribeFromAuth = null


    componentDidMount(){
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({
                currentUser:user
            })
            console.log(user.displayName)
        })
    }


    componentWillUnmount(){
        this.unsubscribeFromAuth()
    }
        
    
    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/shop" component={ShopPage}/>
                    <Route path="/signin" component={SignInOutPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
