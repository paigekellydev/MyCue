// displays all tasks, tasks by day, add task
import TasksContainer from '../containers/TasksContainer'
import DaysContainer from '../containers/DaysContainer'
import Task from '../components/Task'

export default function User(props) {
    return (
        <div>
            {/* <h1>Cues for {this.props}</h1> */}
            <h1>Tasks by Day</h1>
            <DaysContainer user_id={props.user.id} days={props.days}/>
            <h1>All Tasks</h1>
            <TasksContainer user_id={props.user.id} days={props.days}/>
        </div>
    )
}
