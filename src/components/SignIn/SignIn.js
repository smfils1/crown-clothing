import React, { Component } from "react";

import Input from "../Input/Input";
import Button from "../Button/Button";

import { signInWithGoogle,signInWithEmail } from "../../firebase/utils";
import "./SignIn.scss";

export class SignIn extends Component {
    state = {
        email: "",
        password: ""
    };

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;

        try {
          await signInWithEmail(email, password);
          this.setState({ email: '', password: '' });
        } catch (error) {
          console.log(error);
        }
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

                <form onSubmit={this.handleSubmit}>
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
                    <Button type="submit">Sign In</Button>
                    <Button
                        onClick={signInWithGoogle}
                        isGoogleSignIn
                    >
                        Sign in With Google
                    </Button>
                </form>
            </div>
        );
    }
}

export default SignIn;
