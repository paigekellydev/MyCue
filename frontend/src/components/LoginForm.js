import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class LoginForm extends Component {

  state = {
    username: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()
    this.props.props.history.push('/users')
  }

  render() {
    return (
      <div>
        {/* <p>Please Log In</p> */}
        <form class="login-form" onSubmit={this.handleSubmit}>
          <label class="form-name">Login</label><br></br>
          <label id="username-field">Username:</label>
          <input 
            type="text" 
            name="username" 
            value={this.state.username}
            onChange={this.handleChange}
          /><br></br>
          <label id="password-field">Password:</label>
          <input 
            type="password" 
            name="password" 
          /><br></br>
          <input class="login-btn" type="submit"/>
          {/* type="submit"/> */}
        </form>
      </div>
    )
  }
}
