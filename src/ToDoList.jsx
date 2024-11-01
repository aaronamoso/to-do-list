import React, { useState } from 'react'

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat", "Walk"]);
    const [newTask, seNewTask] = useState("");

    // this function is for textbox when we type something
    function handleInputChange(event) {
        seNewTask(event.target.value); //this allows to show what ur input is on the text box (enter a task... )
    }

    // ADD
    function addTask() {

    }

    // DELETE
    function deletetask(index) {

    }

    // MOVE TASK UP
    function moveTaskUp(index) {

    }

    // MOVE TASK DOWN
    function moveTaskDown(index) {

    }

    return (<div className="to-do-list">

        <h1>To Do List</h1>

        <div>
            <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} />
            {/* Note: usually onChange is triggered when the value of the input changes */}
            <button className="add-button" onClick={addTask}> Add </button>
        </div>

        <ol>

            {tasks.map((task, index) => 
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button" onclick={() => deletetask(index)}>Delete</button>
            </li>)}

        </ol>

    </div>)
}

export default ToDoList