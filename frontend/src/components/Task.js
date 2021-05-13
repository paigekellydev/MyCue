import React from 'react'

function Task({task}) {
    //pass down props from tasks.js then extract data to put into card
    return (
        <ul className="card">            
            <li>Task: {task.desciption}</li>
            <li>Room/Location: {task.desciption}</li>
            <li>Frequency per week: {task.frequency_per_week}</li>
            {/* <p>Scheduled days of the week: {task.days}</p> */}
        </ul>
    )
}

export default Task
