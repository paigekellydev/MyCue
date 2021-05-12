import React, { Component } from 'react'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'
import TasksContainer from '../containers/TasksContainer'
import Users from './Users'

// login form and sign up form

export default class Welcome extends Component {

  state = {
    display: false
  }

  handleClick = (event) => {
    this.setState({display: !this.state.display})
  }

  render() {
    return (
      <div>
        {/* <h1>Welcome to MyCue</h1>
        <p>( task manager )</p> */}
        <button onClick={this.handleClick}>Login</button>
        {/* <button onClick={this.handleClick}>Sign Up</button> */}
        {this.state.display && <LoginForm />}
        {/* {this.state.display && <SignUpForm />} */}
        <Users />
        {/* <TasksContainer /> */}
      </div>
    )
  }
}
