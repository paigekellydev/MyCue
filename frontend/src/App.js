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
    selectedUser: {},
    days: []
  }

  selected = (user) => {
    this.setState({selectedUser: user})
  }
  
  //create fetch request for all tasks
  // for each task create task item

  componentDidMount() {
    fetch(`http://localhost:9393/days`)
      .then(response => response.json())
      .then(days => this.setState({days}))
  }

  render(){
    return (
      <div className="App welcome-container">
        <Route path="/" exact render={(props) => <Welcome {...props}/> } />
        <Route path="/login" render={(props) => <LoginForm {...props}/> } />
        <Route path="/users" render={(props) => <Users selected={this.selected} {...props}/> } /> 
        <Route path="/user/:id" render={(props) => <User user={this.state.selectedUser} days={this.state.days}{...props}/> } /> 
      </div>
    );
  }
}

export default App;
