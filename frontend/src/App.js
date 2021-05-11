import './App.css';
import {Switch, Route} from 'react-router-dom'
import Welcome from '/Users/paigekelly/flatiron/projects/MyCue/frontend/src/pages/Welcome.js'
import {Component} from 'react'
import ColorWaves from './components/ColorWaves';
import Tasks from './containers/TasksContainer';
import Days from './containers/DaysContainer';

class App extends Component {
  state = {

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

  render(){
    return (
      <div className="App">
        {/* <ColorWaves /> */}
        <Route path="/" exact render={(props) => <Welcome {...props}/> } />
        {/* <Route path="/login" exact render={(props) => <Login {...props} login={this.login}/> } />
        <Route path="/sign_up" exact render={(props) => <SignUp {...props}/> } />
        <Route path="/users" exact render={(props) => <Profiles {...props}/> } />
        <Route path="/user" exact render={(props) => <Profile {...props}/> } /> */}
        <Route path="/tasks" exact render={(props) => <Tasks {...props}/> } /> 
        {/* <Route path="/tasks_by_day" exact render={(props) => <Days {...props}/> } />  */}
      </div>
    );
  }
}

export default App;
