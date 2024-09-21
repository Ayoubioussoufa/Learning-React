import React, {useState} from "react";

function Todo() {
    let [tasks, setTask] = useState([]);
    let [newTask, setNewTask] = useState("");

    function handleInputChange(e) {
      setNewTask(e.target.value);
    }

    function addTask() {
      console.log(newTask);
      if (newTask.trim() !== '') {
        setTask(t => [...t, newTask]);
        console.log(tasks)
        newTask = "";
      }
    }

    function deleteTask(index) {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTask(updatedTasks);
    }

    function moveTaskUp(index) {
      if (index > 0) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
        setTask(updatedTasks);
      }
    }

    function moveTaskDown(index) {
      if (index < tasks.length - 1) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
        setTask(updatedTasks);
      }
    }

    return (
      <>
        <div className="to-do-list">
          <h1>To-Do-List</h1>
          <div>
            <input type="text"
            placeholder="Enter a task..." 
            value={newTask} 
            onChange={handleInputChange}/>
            <button className="add-button" onClick={addTask}>Add</button>
          </div>
          <ol>
            {tasks.map((task, index) =>
            <li key={index}><span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>Move Up</button>
            <button className="down-button" onClick={() => moveTaskDown(index)}>Move Down</button>
            </li>)}
          </ol>
        </div>
      </>
    );
  }
  
export default Todo;
  