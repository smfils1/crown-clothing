import React, {Component} from "react";
import "./App.css";


import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import SignInUpPage from "./pages/SignInUp/SignInUpPage";

import Header from "./components/Header/Header";

import {auth, createUserProfileDoc} from "./firebase/utils"


import { Route, Switch } from "react-router-dom";


class App extends Component {
    state = {
        currentUser: null
    }

    unsubscribeFromAuth = null


    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
          if (userAuth) {
            const userRef = await createUserProfileDoc(userAuth);
    
            userRef.onSnapshot(snapShot => {
              this.setState({
                currentUser: {
                  id: snapShot.id,
                  ...snapShot.data()
                }
              });
    
              console.log(this.state);
            });
          }
    
          this.setState({ currentUser: userAuth });
        });
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
                    <Route path="/signin" component={SignInUpPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
