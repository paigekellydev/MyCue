import React, { Component } from 'react'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'
import TasksContainer from '../containers/TasksContainer'
import Octopus from '/Users/paigekelly/flatiron/projects/MyCue/frontend/src/images/octopus.png'
import PinkLayer1 from '/Users/paigekelly/flatiron/projects/MyCue/frontend/src/images/pink-layer-1.png'
import orangeLayer1 from '/Users/paigekelly/flatiron/projects/MyCue/frontend/src/images/orange-layer-1.png'
import lightOrangeLayer from '/Users/paigekelly/flatiron/projects/MyCue/frontend/src/images/light-orange-layer.png'
import orangeLayer2 from '/Users/paigekelly/flatiron/projects/MyCue/frontend/src/images/orange-layer-2.png'
import pinkLayer2 from '/Users/paigekelly/flatiron/projects/MyCue/frontend/src/images/pink-layer-2.png'


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
        <h1>Task Manager</h1>
        <div class="welcome-container">
          {!this.state.display && <button class="login-btn" onClick={this.handleClick}>Login</button>}
          {!this.state.display && <button class="login-btn" onClick={this.handleClick}>Sign Up</button>}
        </div>
        {this.state.display && <LoginForm props={this.props}/>}
        <TasksContainer />
        {/* <div class="color-waves">
            <div id='circle'></div>
            <img id="pink-1" class="color-waves" src={PinkLayer1} alt="pink"/>
            <img id="orange-1" class="color-waves" src={orangeLayer1} alt="pink"/>
            <img id="light-orange" class="color-waves" src={lightOrangeLayer} alt="pink"/>
            <img id="orange-2" class="color-waves" src={orangeLayer2} alt="pink"/>
            <img id="pink-2" class="color-waves" src={pinkLayer2} alt="pink"/>
        </div> */}
      </div>
    )
  }
}
