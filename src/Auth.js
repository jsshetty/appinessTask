import React, { Component } from "react"
import "./Auth.css"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as action from "./redux/action";
import login from "./data/Login.json";
import { Redirect } from "react-router-dom";

class Auth extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        const loginRequest =  { username: this.state.email, password: this.state.password };

        if (this.validate(loginRequest)) {
            this.props.authStart(loginRequest)
        }
    }


    validate(request) {
        if (request.username === login.username) {
            if (request.password === login.password) return true;
        }
    }

    render() {
        if (this.props.loginStatus) {
            return <Redirect to="/"/>
        }

        return (
            <div className="login">
                <div className="login-box">
                    <div className="login-title">
                        <h1>{this.state.signUp ? "Sign Up" : " Sign In"}</h1>
                    </div>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="login-label-div">
                            <label htmlFor="user-id">Email/User Id</label>
                        </div>
                        <div>
                            <input id="user-id" className="login-input" type="email" placeholder="" onBlur={this.handleBlur} name="email" required onChange={(event) => this.setState({ email: event.target.value })} />
                        </div>
                        <div className="login-label-div">
                            <label htmlFor="password">Password</label>
                        </div>
                        <div>
                            <input id="password" className="login-input" type="password" placeholder="" name="password" required onChange={(event) => this.setState({ password: event.target.value })} />
                        </div>
                        <button type="submit" >{this.state.signUp ? "Sign Up" : " Login"}</button>
                    </form>
                    <br />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginStatus: state.loginStatus,
        loginError: state.loginError
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);