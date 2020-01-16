import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";
import "./App.css";

import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import SignInUpPage from "./pages/SignInUp/SignInUpPage";

import Header from "./components/Header/Header";

import { auth, createUserProfileDoc } from "./firebase/utils";

import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            const { setCurrentUser } = this.props;
            if (userAuth) {
                const userRef = await createUserProfileDoc(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    });

                    console.log(this.state);
                });
            }

            setCurrentUser(userAuth);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/signin" render={() => this.props.currentUser ? <Redirect to="/" /> : <SignInUpPage />} />
                </Switch>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});
const mapStateToProps = state => ({
    currentUser:state.user.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
