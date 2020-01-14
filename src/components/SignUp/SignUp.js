import React, { Component } from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";

import { auth, createUserProfileDoc } from "../../firebase/utils";
import "./SignUp.scss";

export class SignUp extends Component {
    state = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

     handleSubmit = async e => {
        e.preventDefault();
        
        const {displayName, email, password, confirmPassword} = this.state
        if(password !== confirmPassword) return alert("Password dont match")

        
        try {
            const {user} = auth.createUserWithEmailAndPassword( email, password)
            await createUserProfileDoc(user, {displayName})
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            });
        } catch (error) {
            console.error(error)
            
        }

        this.setState({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
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
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} className="sign-up-form">
                <Input
                        type="text"
                        label="displayName"
                        name="displayName"
                        value={this.state.displayName}
                        id="displayName"
                        required
                        handleChange={this.handleInputChange}
                    />
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
                    <Input
                        type="password"
                        label="confirmPassword"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        id="confirmPassword"
                        required
                        handleChange={this.handleInputChange}
                    />
                    <Button type="submit">Sign Up</Button>
                </form>
            </div>
        );
    }
}

export default SignUp;
