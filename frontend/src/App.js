import './App.css';
import {Switch, Route} from 'react-router-dom'
import Welcome from '/Users/paigekelly/flatiron/projects/MyCue/frontend/src/pages/Welcome.js'
import {Component} from 'react'
import ColorWaves from './components/ColorWaves';
import TasksContainer from './containers/TasksContainer';
import Users from './pages/Users'
import Days from './containers/DaysContainer';
import User from './pages/User'
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    selectedUser: {}
  }

  // login = (username) => {
  //   fetch('http://localhost:9393/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       username
  //     })
  //   })
  //   .then(response => response.json())
  //   .then(response => {
  //     if(response.error) {
  //       alert(response.error)
  //     }
  //     else {
  //       alert(response.username)
  //     }
  //   })
  // }
  selected = (user) => {
    this.setState({selectedUser: user})
  }

  render(){
    return (
      <div className="App">
        {/* <ColorWaves /> */}
        <Route path="/" exact render={(props) => <Welcome {...props}/> } />
        <Route path="/login" render={(props) => <LoginForm {...props}/> } />
        {/* <Route path="/login" exact render={(props) => <Login {...props} login={this.login}/> } />
        <Route path="/sign_up" exact render={(props) => <SignUp {...props}/> } />
      <Route path="/user" exact render={(props) => <Profile {...props}/> } /> */}
        {/* <Route path="/tasks" render={(props) => <TasksContainer {...props}/> } />  */}
        {/* <Route path="/users" exact render={(props) => <Users {...props}/> } /> */}
        <Route path="/users" render={(props) => <Users selected={this.selected} {...props}/> } /> 
        <Route path="/user/:id" render={(props) => <User user={this.state.selectedUser} {...props}/> } /> 
        {/* <Route path="/user" render={(props) => <Users {...props}/> } />  */}
        {/* <Route path="/" render={(props) => <Users {...props}/> } />  */}
        {/* <Route path="/tasks_by_day" exact render={(props) => <Days {...props}/> } />  */}
      </div>
    );
  }
}

export default App;
