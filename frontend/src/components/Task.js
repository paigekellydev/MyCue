import React from 'react'

function Task({task}) {
    //pass down props from tasks.js then extract data to put into card
    return (
        <div class="task-container">            
            <h1>Task Description: {task.description}</h1>
            {/* <p>Room/Location: {task.description}</p> */}
            <p>Frequency per week: {task.frequency}</p>
            <p>Scheduled days of the week: {task.days}</p>
        </div>
    )
}

export default Task
