import React, { Component } from "react";

import Input from "../Input/Input"
import  "./SignIn.scss"


export class SignIn extends Component {
    state = {
        email: "",
        password: ""
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            email: "",
            password: ""
        });
    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign In with your email & password</span>

                <form>
                    <Input
                        type="email"
                        label="email"
                        name="email"
                        value={this.state.email}
                        id="email"
                        required
                        handleChange={this.handleInputChange}
                    />
                    <Input
                        type="password"
                        label="password"
                        name="password"
                        value={this.state.password}
                        id="password"
                        required
                        handleChange={this.handleInputChange}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default SignIn;
