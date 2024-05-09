// TodoList.js

import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]); // Initialize tasks state

  // Event handler for adding a new task
  const addTask = (taskDescription) => {
    setTasks([...tasks, { id: Date.now(), description: taskDescription, completed: false }]);
  };

  // Event handler for marking a task as completed
  const toggleCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Event handler for deleting a task
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="todo-list">
      <h1>My To-Do List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompletion(task.id)}
            />
            <span className={task.completed ? 'completed' : ''}>{task.description}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a new task..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTask(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </div>
  );
}

export default TodoList;
